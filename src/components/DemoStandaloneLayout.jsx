import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../utils/gsapClient';
import Seo from './Seo';
import CookieConsent from './CookieConsent';
import DemoHeader from './demos/DemoHeader';
import DemoFooter from './demos/DemoFooter';
import { RestaurantFarmHeader, RestaurantFarmFooter } from './demos/RestaurantFarmChrome';
import { SalonStudioHeader, SalonStudioFooter } from './demos/SalonStudioChrome';
import { CleaningCorporateHeader, CleaningCorporateFooter } from './demos/CleaningCorporateChrome';
import { BakeryPeaceputHeader, BakeryPeaceputFooter } from './demos/BakeryPeaceputChrome';
import AOS from 'aos';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import DemoWhatsAppPopup from './demos/DemoWhatsAppPopup';
import DemoSideWhatsAppAd from './demos/DemoSideWhatsAppAd';
import { getNicheDemoBySlug, whatsappHref, whatsappWebsiteOrderHref } from '../data/nicheDemos';

/**
 * Full chrome for /demos/:slug and /demo/:slug — separate header, nav, and footer from the main marketing site.
 * Opens from the main site via links with target="_blank".
 */
export default function DemoStandaloneLayout() {
    const { pathname } = useLocation();
    useSmoothScroll();

    const slugMatch = /^\/demos?\/([^/]+)$/.exec(pathname);
    const popupSlug = slugMatch?.[1];
    const popupDemo = popupSlug ? getNicheDemoBySlug(popupSlug) : null;
    const popupWa = popupDemo ? whatsappHref(popupDemo.label) : '';
    const orderWa = popupDemo ? whatsappWebsiteOrderHref(popupDemo.label) : '';

    const farmMatch = /^\/demos?\/(restaurants)$/.exec(pathname);
    const isFarmRestaurant = Boolean(farmMatch);
    const farmDemo = isFarmRestaurant ? getNicheDemoBySlug('restaurants') : null;
    const farmWa = farmDemo ? whatsappHref(farmDemo.label) : '';

    const salonMatch = /^\/demos?\/(salons)$/.exec(pathname);
    const isSalonStudio = Boolean(salonMatch);
    const salonDemo = isSalonStudio ? getNicheDemoBySlug('salons') : null;
    const salonWa = salonDemo ? whatsappHref(salonDemo.label) : '';

    const cleaningMatch = /^\/demos?\/(cleaning)$/.exec(pathname);
    const isCleaningCorporate = Boolean(cleaningMatch);
    const cleaningDemo = isCleaningCorporate ? getNicheDemoBySlug('cleaning') : null;
    const cleaningWa = cleaningDemo ? whatsappHref(cleaningDemo.label) : '';
    const cleaningCo = cleaningDemo?.corporate ?? {};

    const bakeryMatch = /^\/demos?\/(bakeries)$/.exec(pathname);
    const isBakeryPeaceput = Boolean(bakeryMatch);
    const bakeryDemo = isBakeryPeaceput ? getNicheDemoBySlug('bakeries') : null;
    const bakeryWa = bakeryDemo ? whatsappHref(bakeryDemo.label) : '';

    useEffect(() => {
        AOS.init({
            duration: 680,
            once: true,
            /* Taller standalone headers (e.g. cleaning top bar + nav ~106px) */
            offset: 120,
            easing: 'ease-out-cubic',
            delay: 0,
            anchorPlacement: 'center-bottom',
        });
        return () => {};
    }, []);

    useEffect(() => {
        requestAnimationFrame(() => {
            AOS.refresh();
            ScrollTrigger.refresh();
            requestAnimationFrame(() => {
                AOS.refresh();
            });
        });
    }, [pathname]);

    if (isFarmRestaurant && farmDemo) {
        return (
            <div className="demo-standalone-shell demo-standalone-shell--farm">
                <Seo />
                <RestaurantFarmHeader wa={farmWa} />
                <main key={pathname} className="demo-standalone-main demo-standalone-main--farm demo-standalone-main--enter">
                    <Outlet />
                </main>
                <RestaurantFarmFooter wa={farmWa} />
                {popupDemo ? (
                    <DemoWhatsAppPopup waHref={popupWa} nicheLabel={popupDemo.label} slug={popupSlug} />
                ) : null}
                {popupDemo ? <DemoSideWhatsAppAd waHref={orderWa} demoLabel={popupDemo.label} /> : null}
                <CookieConsent />
            </div>
        );
    }

    if (isSalonStudio && salonDemo) {
        return (
            <div className="demo-standalone-shell demo-standalone-shell--salon">
                <Seo />
                <SalonStudioHeader wa={salonWa} />
                <main key={pathname} className="demo-standalone-main demo-standalone-main--salon demo-standalone-main--enter">
                    <Outlet />
                </main>
                <SalonStudioFooter wa={salonWa} />
                {popupDemo ? (
                    <DemoWhatsAppPopup waHref={popupWa} nicheLabel={popupDemo.label} slug={popupSlug} />
                ) : null}
                {popupDemo ? <DemoSideWhatsAppAd waHref={orderWa} demoLabel={popupDemo.label} /> : null}
                <CookieConsent />
            </div>
        );
    }

    if (isCleaningCorporate && cleaningDemo) {
        return (
            <div className="demo-standalone-shell demo-standalone-shell--cleaning">
                <Seo />
                <CleaningCorporateHeader wa={cleaningWa} topBar={cleaningCo.topBar} brandShort={cleaningCo.brandShort} />
                <main key={pathname} className="demo-standalone-main demo-standalone-main--cleaning demo-standalone-main--enter">
                    <Outlet />
                </main>
                <CleaningCorporateFooter wa={cleaningWa} brandShort={cleaningCo.brandShort} />
                {popupDemo ? (
                    <DemoWhatsAppPopup waHref={popupWa} nicheLabel={popupDemo.label} slug={popupSlug} />
                ) : null}
                {popupDemo ? <DemoSideWhatsAppAd waHref={orderWa} demoLabel={popupDemo.label} /> : null}
                <CookieConsent />
            </div>
        );
    }

    if (isBakeryPeaceput && bakeryDemo) {
        return (
            <div className="demo-standalone-shell demo-standalone-shell--bakery">
                <Seo />
                <BakeryPeaceputHeader wa={bakeryWa} wordmark={bakeryDemo.heroHeadline} />
                <main key={pathname} className="demo-standalone-main demo-standalone-main--bakery demo-standalone-main--enter">
                    <Outlet />
                </main>
                <BakeryPeaceputFooter wa={bakeryWa} pp={bakeryDemo.peaceputPage} wordmark={bakeryDemo.heroHeadline} />
                {popupDemo ? (
                    <DemoWhatsAppPopup waHref={popupWa} nicheLabel={popupDemo.label} slug={popupSlug} />
                ) : null}
                {popupDemo ? <DemoSideWhatsAppAd waHref={orderWa} demoLabel={popupDemo.label} /> : null}
                <CookieConsent />
            </div>
        );
    }

    return (
        <div className="demo-standalone-shell">
            <Seo />
            <DemoHeader />
            <main key={pathname} className="demo-standalone-main demo-standalone-main--enter">
                <Outlet />
            </main>
            <DemoFooter />
            {popupDemo ? (
                <DemoWhatsAppPopup waHref={popupWa} nicheLabel={popupDemo.label} slug={popupSlug} />
            ) : null}
            {popupDemo ? <DemoSideWhatsAppAd waHref={orderWa} demoLabel={popupDemo.label} /> : null}
            <CookieConsent />
        </div>
    );
}
