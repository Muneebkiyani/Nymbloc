/** Industry demo landing pages — shared layout: Hero → Problem → Offer → WhatsApp CTA → Testimonials */

export const WHATSAPP_E164 = '923165423233';

export function whatsappHref(previewLabel) {
    const base = `https://wa.me/${WHATSAPP_E164}`;
    if (!previewLabel) return base;
    const text = `Hi — I saw the NYMBLOC ${previewLabel} demo and want something similar.`;
    return `${base}?text=${encodeURIComponent(text)}`;
}

/** Pre-filled message for ordering / quoting a website from demo pages. */
export function whatsappWebsiteOrderHref(viewedDemoLabel) {
    const base = `https://wa.me/${WHATSAPP_E164}`;
    const text = viewedDemoLabel
        ? `Hi NYMBLOC — I want to order a website. I was viewing your "${viewedDemoLabel}" demo layout—please share next steps and pricing.`
        : `Hi NYMBLOC — I want to order a website and would like a quote.`;
    return `${base}?text=${encodeURIComponent(text)}`;
}

const U = {
    /* Verified HTTP 200 — swap if Unsplash rotates IDs */
    salonA: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85&ixlib=rb-4.0.3',
    salonB: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85&ixlib=rb-4.0.3',
    salonC: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=85&ixlib=rb-4.0.3',
    salonD: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85&ixlib=rb-4.0.3',
    cleanA: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85&ixlib=rb-4.0.3',
    cleanB: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85&ixlib=rb-4.0.3',
    cleanC: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85&ixlib=rb-4.0.3',
    cleanD: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=85&ixlib=rb-4.0.3',
    cleanE: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85&ixlib=rb-4.0.3',
    bakeA: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1600&q=85&ixlib=rb-4.0.3',
    bakeB: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=85&ixlib=rb-4.0.3',
    bakeC: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1600&q=85&ixlib=rb-4.0.3',
    bakeD: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1600&q=85&ixlib=rb-4.0.3',
    bakeE: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1600&q=85&ixlib=rb-4.0.3',
    bakeF: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1600&q=85&ixlib=rb-4.0.3',
    bakeG: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=85&ixlib=rb-4.0.3',
    portrait1: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85&ixlib=rb-4.0.3',
    portrait2: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85&ixlib=rb-4.0.3',
    portrait3: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85&ixlib=rb-4.0.3',
    portrait4: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85&ixlib=rb-4.0.3',
    portrait5: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85&ixlib=rb-4.0.3',
};

export const NICHE_DEMOS = {
    restaurants: {
        slug: 'restaurants',
        path: '/demos/restaurants',
        label: 'Restaurants & Cafes',
        seoTitle: 'Restaurant & cafe website demo | NYMBLOC',
        seoDescription:
            'Sample landing: hero, problem/solution, offers with photography, WhatsApp CTA, and testimonials—for restaurants and cafés.',
        accentNote: 'Ideal for: menus, booking, ordering, and atmosphere-led brands.',
        visualTheme: 'ember',
        heroImage: '/assets/demos/restaurant-hero.jpg',
        heroEyebrow: 'Sample site · Restaurants & Cafes',
        heroHeadline: 'Rustic dining, open kitchen energy—booked without the back-and-forth',
        heroSub:
            'Warm lighting, wood-fired dishes, and a bar program worth staying for. This demo shows how your venue can look online when the story matches the room.',
        problem: {
            eyebrow: 'The problem',
            title: 'Guests decide before they ever reach your door',
            lead: 'If the website feels generic or the menu hides in a PDF, people pick the place down the street.',
            items: [
                {
                    title: '“We’re on Instagram—that’s enough.”',
                    text: 'Social proves vibe, but it does not replace hours, location, dietary notes, or a one-tap reservation path.',
                },
                {
                    title: 'Menus that live in screenshots',
                    text: 'Blurry story highlights frustrate guests who want prices, allergens, and wine pairings in one scroll.',
                },
                {
                    title: 'No clear next step',
                    text: 'Without a obvious “reserve” or “order” action, high-intent traffic bounces—even when the food is exceptional.',
                },
            ],
        },
        offer: {
            eyebrow: 'What we offer',
            title: 'Plates, fire, and drinks—shown the way diners choose',
            lead: 'Use strong photography so delivery, date-night, and walk-in guests instantly see what makes you different.',
            items: [
                {
                    title: 'Seafood & seasonal plates',
                    desc: 'Crisp skin, bright vegetables, and sauces that read clean on mobile.',
                    image: '/assets/demos/restaurant-offer-salmon.jpg',
                },
                {
                    title: 'Wood-fired mains',
                    desc: 'Leopard-spotted crust, herbs, and ember-kissed flavour—shot the way it leaves the pass.',
                    image: '/assets/demos/restaurant-offer-pizza-1.jpg',
                },
                {
                    title: 'From the oven',
                    desc: 'Second angles for specials and limited runs—great for rotating menus.',
                    image: '/assets/demos/restaurant-offer-pizza-2.jpg',
                },
                {
                    title: 'Bar & pairing',
                    desc: 'Cocktails and low-ABV options staged for upsell without cluttering the page.',
                    image: '/assets/demos/restaurant-offer-cocktail.jpg',
                },
            ],
        },
        cta: {
            title: 'Ready when you are',
            lead: 'Reserve a table, ask about a private dinner, or check tonight’s sellouts—message us on WhatsApp.',
        },
        testimonials: {
            eyebrow: 'Testimonials',
            title: 'What guests say',
            disclaimer: 'Sample quotes for layout demonstration—not attributed to real reviews.',
            items: [
                {
                    quote: 'Finally a site that looks like the actual dining room. Booking took ten seconds.',
                    name: 'Amelia R.',
                    role: 'Regular guest',
                },
                {
                    quote: 'The menu photos match what arrived. We knew exactly what to order for our anniversary.',
                    name: 'Jordan & Lee',
                    role: 'Date-night visit',
                },
                {
                    quote: 'I asked about gluten-free options on WhatsApp and had an answer before we left home.',
                    name: 'Priya S.',
                    role: 'Weekend brunch',
                },
            ],
        },
    },
    salons: {
        slug: 'salons',
        path: '/demos/salons',
        label: 'Salons & Beauty Studios',
        seoTitle: 'Salon & beauty studio website demo | NYMBLOC',
        seoDescription:
            'Sample landing: hero, problems salons face, service offers with imagery, WhatsApp CTA, testimonials.',
        accentNote: 'Ideal for: booking, portfolios, Instagram handoff.',
        visualTheme: 'rose',
        heroImage: U.salonA,
        heroEyebrow: 'Sample site · Salons & Beauty',
        heroHeadline: 'Calm booking, confident portfolios—beyond the bio link',
        heroSub:
            'Your work deserves a page that loads fast, lists durations and prices, and hands off neatly to WhatsApp for colour consults.',
        problem: {
            eyebrow: 'The problem',
            title: 'Clients ghost when the path is unclear',
            lead: 'Beauty is visual—but trust comes from policies, hygiene cues, and frictionless scheduling.',
            items: [
                {
                    title: 'DM-only booking',
                    text: 'Threads get buried; you lose deposits, patch-test notes, and aftercare instructions in chat history.',
                },
                {
                    title: 'Pricing that hides until the chair',
                    text: 'Guests want ranges and timing upfront. Mystery pricing breeds no-shows.',
                },
                {
                    title: 'Portfolio sprawl',
                    text: 'Highlights expire. A structured gallery with captions sells transformations better than scattered posts.',
                },
            ],
        },
        offer: {
            eyebrow: 'What we offer',
            title: 'Services clients can understand at a glance',
            lead: 'Pairs look-book imagery with the practical details stylists need on the calendar.',
            items: [
                {
                    title: 'Cut & finish',
                    desc: 'Timed slots, add-on treatments, and stylist tiers—clear before checkout.',
                    image: U.salonB,
                },
                {
                    title: 'Colour & care',
                    desc: 'Patch-test callouts, maintenance windows, and retail recommendations.',
                    image: U.salonC,
                },
                {
                    title: 'Event & bridal',
                    desc: 'Inquiry form plus WhatsApp for bespoke quotes and trials.',
                    image: U.salonD,
                },
                {
                    title: 'Treatments & add-ons',
                    desc: 'Bundles for memberships or seasonal promos—easy to swap each quarter.',
                    image: U.salonA,
                },
            ],
        },
        cta: {
            title: 'Book or ask a stylist',
            lead: 'Send a photo reference, check patch-test rules, or hold a Saturday slot—tap WhatsApp.',
        },
        testimonials: {
            eyebrow: 'Testimonials',
            title: 'Client love',
            disclaimer: 'Sample quotes for layout demonstration—not attributed to real reviews.',
            items: [
                {
                    quote: 'I could see pricing and timing before I booked. No awkward surprises.',
                    name: 'Taylor M.',
                    role: 'Colour client',
                },
                {
                    quote: 'The gallery matched what I got—huge for trusting someone new with bridal hair.',
                    name: 'Elena V.',
                    role: 'Bridal package',
                },
                {
                    quote: 'WhatsApp reminders nailed the aftercare steps. My tone stayed fresh twice as long.',
                    name: 'Chris P.',
                    role: 'First visit',
                },
            ],
        },
    },
    cleaning: {
        slug: 'cleaning',
        path: '/demos/cleaning',
        label: 'Cleaning Services',
        seoTitle: 'Corporate cleaning services website demo | NYMBLOC',
        seoDescription:
            'IWCF-inspired corporate layout: hero with overlap cards, stats, split narrative, service grid, feature carousel, video stories, asymmetric gallery, partners, testimonials, WhatsApp CTA.',
        accentNote: 'Ideal for: franchise-ready cleaning brands and B2B janitorial teams.',
        visualTheme: 'aqua',
        heroImage: U.cleanA,
        heroEyebrow: 'Sample site · Professional cleaning',
        heroHeadline: 'Excellence and integrity in every clean',
        heroSub:
            'Setting the standard for insured residential and commercial crews—clear scopes, verified supplies, and bookings your clients can trust.',
        corporate: {
            brandShort: 'Pristine Crew',
            topBar: {
                phone: '+1 (555) 010-0142',
                email: 'hello@pristinecrew.demo',
            },
            heroCards: [
                { label: 'Residential', href: '#cc-services', image: U.cleanB },
                { label: 'Commercial', href: '#cc-services', image: U.cleanC },
                { label: 'Deep clean', href: '#cc-services', image: U.cleanD },
                { label: 'Move-in ready', href: '#cc-gallery', image: U.cleanA },
                { label: 'Get a quote', href: '#cc-contact', image: U.cleanE },
            ],
            stats: [
                { value: '500+', label: 'Spaces refreshed' },
                { value: '40+', label: 'Teams on roster' },
                { value: '99%', label: 'On-time arrivals' },
            ],
            splitEyebrow: 'Who we are',
            splitTitle: 'Disciplined crews, accountable checklists',
            splitLead:
                'We train on product chemistry, PPE, and client communication—so your keys, codes, and reputation stay protected.',
            splitPrimaryImage: U.cleanB,
            splitOverlapImage: U.cleanC,
            featuredSlides: [
                {
                    title: 'Recurring programmes that protect your standard',
                    sub: 'Cadence-based home and office care with supervisor QA photos after each visit.',
                    image: U.cleanA,
                    cardThumb: U.cleanD,
                    cardKicker: 'Programme',
                    cardTitle: 'Scheduled residential care',
                    cardText: 'Weekly or bi-weekly scopes with kitchen and bath add-ons.',
                },
                {
                    title: 'After-hours commercial resets',
                    sub: 'Retail and clinical timing windows with SDS-visible supply lists and sign-off sheets.',
                    image: U.cleanE,
                    cardThumb: U.cleanB,
                    cardKicker: 'Commercial',
                    cardTitle: 'Facility turnover',
                    cardText: 'Nightly routes for high-traffic floors and glass.',
                },
                {
                    title: 'Photo-ready handoffs',
                    sub: 'Landlords and agents get timestamped galleries before the next walkthrough.',
                    image: U.cleanC,
                    cardThumb: U.cleanA,
                    cardKicker: 'Turnover',
                    cardTitle: 'Move-out sparkle',
                    cardText: 'Appliance details, grout lines, and fixture polish.',
                },
            ],
            galleryLarge: U.cleanA,
            galleryStacked: [U.cleanB, U.cleanE],
            partners: ['Northwind FM', 'Harbor Clinics', 'Metro Lettings', 'UrbanFit Co.', 'Summit Realty'],
            videos: [
                {
                    title: 'Weekly maintenance',
                    caption: 'See how we stage supplies and secure entry',
                    thumb: U.cleanC,
                },
                {
                    title: 'Deep reset walkthrough',
                    caption: 'Before / after pacing for estate agents',
                    thumb: U.cleanD,
                },
            ],
            ctaBannerLine: 'Book a walkthrough or request availability—most quotes return same day.',
        },
        problem: {
            eyebrow: 'The problem',
            title: 'Trust is the product—and cheap sites erode it',
            lead: 'You are walking into homes and offices. Prospects want proof before they hand over keys.',
            items: [
                {
                    title: '“Anyone with a van” positioning',
                    text: 'Without licensing, insurance, and process language, you compete only on price.',
                },
                {
                    title: 'Vague checklists',
                    text: 'Buyers fear skipped baseboards or missed sanitising. Specific scopes win bids.',
                },
                {
                    title: 'Hidden contact paths',
                    text: 'Property managers and busy parents want WhatsApp or SMS with fast answers—not only a web form.',
                },
            ],
        },
        offer: {
            eyebrow: 'What we offer',
            title: 'Packages prospects can compare',
            lead: 'Imagery shows disciplined teams; copy spells what is included in every tier.',
            items: [
                {
                    title: 'Recurring home care',
                    desc: 'Weekly or bi-weekly cadences with add-ons for kitchens and baths.',
                    image: U.cleanB,
                },
                {
                    title: 'Deep & seasonal resets',
                    desc: 'Appliances, detail work, and move-ready finish options.',
                    image: U.cleanC,
                },
                {
                    title: 'Office & retail',
                    desc: 'After-hours timing, PPE notes, and checklist transparency per location.',
                    image: U.cleanD,
                },
                {
                    title: 'Move-in / handoff',
                    desc: 'Photo-ready turnovers landlords and agents expect.',
                    image: U.cleanA,
                },
            ],
        },
        cta: {
            title: 'Get a quote today',
            lead: 'Square footage, frequency, and access notes—send them on WhatsApp and we’ll respond with availability.',
        },
        testimonials: {
            eyebrow: 'Testimonials',
            title: 'Owners who switched',
            disclaimer: 'Sample quotes for layout demonstration—not attributed to real reviews.',
            items: [
                {
                    quote: 'They listed exactly what “deep clean” meant. We booked the same day.',
                    name: 'Rosa G.',
                    role: 'Homeowner',
                },
                {
                    quote: 'Our clinic needed after-hours crews. The site spelled insurance and supplies—sold us immediately.',
                    name: 'Devon L.',
                    role: 'Office manager',
                },
                {
                    quote: 'WhatsApp updates beat phone tag. Keys handoff was painless.',
                    name: 'Marcus H.',
                    role: 'Landlord',
                },
            ],
        },
    },
    bakeries: {
        slug: 'bakeries',
        path: '/demos/bakeries',
        label: 'Bakeries & Food Shops',
        seoTitle: 'Peaceput-style bakery demo | editorial landing | NYMBLOC',
        seoDescription:
            'Minimal cream-and-charcoal bakery layout: cinematic hero, brand essay, full-bleed story bands with floating cards, recruit portraits, news list, LINE-style CTA pattern—sample only.',
        accentNote: 'Ideal for: multi-brand bakeries, donut shops, editorial food retail.',
        visualTheme: 'honey',
        heroImage: U.bakeA,
        heroEyebrow: 'Sample site · Bakery collective',
        heroHeadline: 'hearthlot',
        heroSub:
            'Place a little calm on every street—croissants at dawn, cases refreshed by noon, custom tiers when celebrations call.',
        problem: {
            eyebrow: 'The problem',
            title: 'Sugar sells with clarity—not chaos',
            lead: 'When allergens, pickup windows, and custom lead times hide, you get cancellations and wasted batches.',
            items: [
                {
                    title: 'Custom cakes in endless DMs',
                    text: 'Inspirational Pinterest threads need structure: flavour matrix, servings, deposit links.',
                },
                {
                    title: '“Sold out” confusion',
                    text: 'Case items change hourly. Static PDFs lie; lightweight web updates keep trust.',
                },
                {
                    title: 'Catering math in captions',
                    text: 'Min orders and per-person pricing belong on a page—not lost in comment threads.',
                },
            ],
        },
        offer: {
            eyebrow: 'What we offer',
            title: 'Products that look as good as they taste',
            lead: 'Pair crave-worthy shots with the logistics guests need before they pay.',
            items: [
                {
                    title: 'Daily case & bread',
                    desc: 'Seasonal loaves, laminated pastries, and grab-and-go pricing.',
                    image: U.bakeB,
                },
                {
                    title: 'Celebration cakes',
                    desc: 'Tiers, feeds, and frosting options—with WhatsApp for references.',
                    image: U.bakeC,
                },
                {
                    title: 'Boxes & gifting',
                    desc: 'Corporate drops and holiday sets with clear minimums.',
                    image: U.bakeD,
                },
                {
                    title: 'Café pairing',
                    desc: 'Drinks and bundles staged for morning rushes.',
                    image: U.bakeA,
                },
            ],
        },
        cta: {
            title: 'Order or ask about custom bakes',
            lead: 'Send a date, servings, and dietary notes—we’ll confirm on WhatsApp with pickup slots.',
        },
        testimonials: {
            eyebrow: 'Testimonials',
            title: 'Sweet words',
            disclaimer: 'Sample quotes for layout demonstration—not attributed to real reviews.',
            items: [
                {
                    quote: 'Photos matched the case. I grabbed croissants on a time crunch and still felt confident.',
                    name: 'Noah F.',
                    role: 'Weekday regular',
                },
                {
                    quote: 'Custom birthday cake consult moved to WhatsApp seamlessly. Deposit link was a nice touch.',
                    name: 'Ingrid K.',
                    role: 'Party host',
                },
                {
                    quote: 'Catering page spelled minimums—we ordered for the office without ten clarification emails.',
                    name: 'Samira A.',
                    role: 'Ops lead',
                },
            ],
        },
        peaceputPage: {
            showLoaderLine: '0%',
            visionEyebrow: 'history & vision',
            visionTitle: 'A world that keeps changing—hands that stay curious',
            visionLead:
                'Small happiness baked daily, carried door to door. When curiosity meets care, shape becomes story—and streets feel a little softer.',
            brandHeading: 'brand',
            brandLead:
                'When intention becomes form, brands are born. We stay beside guests with transparent process and stubborn craft—through viennoiserie, celebration cakes, and the quiet rhythm of the case.',
            brandAside:
                'hearthlot is a demonstration name. Layout pattern evokes editorial sites such as peace put—copy and marks are fictitious.',
            storyBands: [
                {
                    image: U.bakeB,
                    glyph: '◆',
                    title: 'Stone oven line',
                    body: 'First load before light—steam, malt, and the sound of peels on stone. A calm choreography you can taste in the crumb.',
                    accent: 'bakery',
                },
                {
                    image: U.bakeC,
                    glyph: '✦',
                    title: 'Butter & fold',
                    body: 'Laminated layers with honest butter—croissants that shatter clean, pain au chocolat that earns silence at the table.',
                    accent: 'pastry',
                },
                {
                    image: U.bakeD,
                    glyph: '◎',
                    title: 'Ring & glaze',
                    body: 'Raised doughnuts, fruit curds, and glazes set in small batches—no mystery fillings, labels you can read without a magnifier.',
                    accent: 'donut',
                },
                {
                    image: U.bakeA,
                    glyph: '☐',
                    title: 'The counter crew',
                    body: 'Front house remembers names, backs each other on rushes, and still sweeps with the door locked—pride in the closing checklist.',
                    accent: 'team',
                },
                {
                    image: U.bakeE,
                    glyph: '?',
                    title: 'I’m croissant?',
                    body: 'Playful limited runs—a wink at neon signage culture—posted with time stamps so guests know when the joke is fresh.',
                    accent: 'neon',
                },
                {
                    image: U.bakeF,
                    glyph: '?',
                    title: 'Retail wall',
                    body: 'Jars, merch, and beans lined with negative space—every shelf photograph reads like a still life.',
                    accent: 'shop',
                },
                {
                    image: U.bakeG,
                    glyph: '●',
                    title: 'Night bake sign',
                    body: 'Blue-hour photography and quiet signage for guests who walk the neighborhood after dinner.',
                    accent: 'blue',
                },
            ],
            recruitHeading: 'recruit',
            recruitLead: 'Everyone who shapes hearthlot is a craftsperson—fire, flour, counter, or courier.',
            recruitSub:
                'Bakers who listen, runners who protect boxes in the rain, stylists who light each croissant before open. Here, every role holds the work with both hands.',
            recruits: [
                { name: 'Elena Ward', role: 'Head baker · sour city location', corner: '01', image: U.portrait1 },
                { name: 'Marcus Chen', role: 'Pastry lead · lamination', corner: '02', image: U.portrait2 },
                { name: 'Priya N.', role: 'Shop captain · morning rush', corner: '03', image: U.portrait3 },
                { name: 'Jonas I.', role: 'Brand photographer', corner: '04', image: U.portrait4 },
                { name: 'Sam Okafor', role: 'Operations · wholesale', corner: '05', image: U.portrait5 },
            ],
            newsHeading: 'news',
            newsLead: 'Product drops, shop notes, and slow stories from the kitchen.',
            newsItems: [
                { date: '2026.04.28', title: 'Spring rhubarb danish weekend—limited Sat–Sun', tags: '#menu #seasonal' },
                { date: '2026.04.02', title: 'Mobile order pickup window now trimmed to 12 minutes at peak', tags: '#service #app' },
                { date: '2026.03.18', title: 'New cocoa supplier traceability cards at the register', tags: '#transparency' },
            ],
            lineTitle: 'official updates',
            lineLead:
                'Tap below for same-day pickup questions, tier cakes, or catering minimums—we answer fastest on WhatsApp.',
            lineButton: 'Message hearthlot',
            footerMarkQuestion: '?',
            footerMarkEmoji: ':P',
            footerTagline: 'Put a little calm\non every corner.',
            footerDisclaimer: 'hearthlot and layout cues are NYMBLOC samples—not affiliated with peace put Co., Ltd.',
        },
    },
};

export const NICHE_DEMO_LIST = Object.values(NICHE_DEMOS);

export function getNicheDemoBySlug(slug) {
    return NICHE_DEMOS[slug] || null;
}
