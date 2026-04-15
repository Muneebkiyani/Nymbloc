import ScrollSection3D from './ScrollSection3D';

/**
 * Decorative 3D for `.page-header`: absolute layer (top-right), content stays readable.
 */
export default function PageHeader3D({ variant = 'torus' }) {
    return (
        <div className="page-header-3d-accent" aria-hidden>
            <ScrollSection3D variant={variant} height={260} className="page-header-3d-canvas" />
        </div>
    );
}
