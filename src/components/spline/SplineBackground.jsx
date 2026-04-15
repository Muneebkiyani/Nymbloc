import { Suspense, lazy, useEffect, useRef, useState, useCallback } from 'react';
import { ScrollTrigger } from '../../utils/gsapClient';
import { SPLINE_SCENE_URL } from './splineConfig';

const Spline = lazy(() => import('@splinetool/react-spline'));

/** Skip finger/hand meshes — rotating those breaks the pose; only arm / shoulder / manipulator parents. */
function shouldExcludeName(name) {
    if (!name) return true;
    return /finger|thumb|wrist|hand|palm|nail|knuckle|fingertip/i.test(name);
}

function shouldIncludeName(name) {
    if (!name) return false;
    if (shouldExcludeName(name)) return false;
    return /arm|forearm|upperarm|shoulder|elbow|bicep|manipul|gripper|claw|servo|joint/i.test(name);
}

function pickArmTargets(objs) {
    const withName = objs.filter((o) => o?.name?.trim());
    const candidates = withName.filter((o) => shouldIncludeName(o.name));

    const limb = /arm|shoulder|elbow|forearm|manipul|gripper|claw/i;
    const left = candidates.find(
        (o) => /(left|_l\b|l_|^l_|arm_l|l_arm|armleft|leftarm|arm\.l)/i.test(o.name) && limb.test(o.name)
    );
    const right = candidates.find(
        (o) => /(right|_r\b|r_|^r_|arm_r|r_arm|armright|rightarm|arm\.r)/i.test(o.name) && limb.test(o.name)
    );
    if (left && right && left !== right) return [left, right];

    const manip = candidates.filter((o) => /manipul|gripper|claw/i.test(o.name));
    if (manip.length) return manip.slice(0, 2);

    return candidates.slice(0, 2);
}

/**
 * Fixed full-viewport Spline.
 * - Home: scroll can drive arm motion (unless `staticScene`).
 * - Inner pages: pass `staticScene` — same robot / scene, no scroll animation.
 */
export default function SplineBackground({ reducedMotion, staticScene = false }) {
    const appRef = useRef(null);
    const baseRotationRef = useRef(new Map());
    const [ready, setReady] = useState(false);

    const onLoad = useCallback((app) => {
        appRef.current = app;
        baseRotationRef.current = new Map();
        setReady(true);
    }, []);

    useEffect(() => {
        if (reducedMotion || staticScene || !ready || !appRef.current) return undefined;

        const updateFromProgress = (progress) => {
            const app = appRef.current;
            if (!app?.getAllObjects) return;
            try {
                const objs = app.getAllObjects();
                const targets = pickArmTargets(objs);
                if (targets.length === 0) return;

                targets.forEach((obj) => {
                    if (!obj.rotation) return;
                    const id = obj.uuid || obj.name;
                    if (!baseRotationRef.current.has(id)) {
                        baseRotationRef.current.set(id, {
                            x: obj.rotation.x,
                            y: obj.rotation.y,
                            z: obj.rotation.z,
                        });
                    }
                });

                targets.forEach((obj, i) => {
                    if (!obj.rotation) return;
                    const id = obj.uuid || obj.name;
                    const base = baseRotationRef.current.get(id);
                    if (!base) return;

                    const mirror = i % 2 === 0 ? 1 : -1;
                    const sweepY = progress * Math.PI * 0.16;
                    const breatheX = Math.sin(progress * Math.PI) * 0.04;

                    obj.rotation.x = base.x + breatheX;
                    obj.rotation.y = base.y + sweepY * mirror;
                    obj.rotation.z = base.z;
                });
            } catch {
                /* scene may restrict mutation */
            }
        };

        const st = ScrollTrigger.create({
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.15,
            onUpdate: (self) => updateFromProgress(self.progress),
        });

        updateFromProgress(0);
        requestAnimationFrame(() => ScrollTrigger.refresh());

        return () => {
            st.kill();
        };
    }, [ready, reducedMotion, staticScene]);

    if (reducedMotion) {
        return <div className="spline-fallback-gradient" aria-hidden />;
    }

    return (
        <div className="spline-fixed-layer" aria-hidden="true">
            <div className="spline-scene-backdrop" />
            <Suspense fallback={<div className="spline-fallback-gradient spline-scene-inner" />}>
                <div className="spline-scene-inner">
                    <Spline
                        scene={SPLINE_SCENE_URL}
                        className="spline-canvas-fill"
                        onLoad={onLoad}
                    />
                </div>
            </Suspense>
            <div className="spline-atmosphere" aria-hidden />
        </div>
    );
}
