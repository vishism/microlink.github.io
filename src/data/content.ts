export const site = {
  name: "Microlink Solutions",
  tagline: "Digital that earns its keep",
  email: "hello@microlinksolutions.com.au",
  url: "https://www.microlinksolutions.com.au",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "FuelGO", href: "#fuelgo" },
  { label: "Work", href: "#work" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const focusAreas = [
  {
    title: "Getting more jobs through the door?",
    body: "A sharp website that makes tradies and local businesses look the goods — and gets the phone ringing.",
  },
  {
    title: "Selling online without the headaches?",
    body: "Shopify stores set up properly — products, payments, shipping, and a checkout that doesn’t lose customers.",
  },
  {
    title: "Systems that actually talk to each other?",
    body: "NetSuite, eBay, custom APIs and WordPress — integrations that cut the double-handling.",
  },
  {
    title: "Building your own product?",
    body: "From apps like FuelGO to custom tools — we design, build and ship digital products that feel premium.",
  },
];

export const services = [
  {
    id: "tradie-websites",
    title: "Websites for tradies",
    eyebrow: "Aussie businesses",
    body: "No waffle. Clean sites for plumbers, sparkies, arborists, builders and the rest — built to win local work, show off the jobs, and make quoting easy.",
    points: [
      "Service & suburb pages that rank",
      "Quote forms that actually get used",
      "Mobile-first, fast, and easy to update",
    ],
  },
  {
    id: "shopify",
    title: "Shopify online stores",
    eyebrow: "eCommerce",
    body: "We create and set up Shopify stores end-to-end — theme, products, payments, shipping and the little details that make a shop feel pro.",
    points: [
      "Store setup & brand polish",
      "Collections, products & checkout",
      "Apps, analytics and handoff training",
    ],
  },
  {
    id: "integrations",
    title: "Integrations & NetSuite",
    eyebrow: "Systems",
    body: "Stop copying data between platforms. We wire up NetSuite to eBay, build custom NetSuite APIs, and connect the tools your business already runs on.",
    points: [
      "NetSuite ↔ eBay integrations",
      "Custom NetSuite APIs",
      "Workflow automation that sticks",
    ],
  },
  {
    id: "wordpress",
    title: "WordPress sites",
    eyebrow: "Content & CMS",
    body: "Solid WordPress builds for businesses that need to publish, edit and grow without calling a developer every five minutes.",
    points: [
      "Custom themes & page builders",
      "Secure, maintained foundations",
      "SEO-ready structure from day one",
    ],
  },
  {
    id: "apps",
    title: "Apps & digital products",
    eyebrow: "Product",
    body: "We build our own products too — like FuelGO — and partner with founders who need a polished app or tool in market.",
    points: [
      "iOS & cross-platform apps",
      "Product design & UX",
      "Launch-ready builds",
    ],
  },
];

export const fuelgo = {
  name: "FuelGO",
  status: "Launching on iOS",
  headline: "Smarter fuel savings for Aussie drivers",
  body: "FuelGO helps Australian drivers compare nearby fuel prices, find better stops, estimate vehicle costs, and unlock premium savings tools — without the guesswork at the bowser.",
  href: "/fuelgo/",
  features: [
    "Nearby fuel prices & map",
    "Best Pick recommendations",
    "Vehicle & full-tank cost estimates",
    "Premium widgets & route planning",
  ],
};

export const work = [
  {
    name: "Perth Tree Care",
    url: "https://perthtreecare.com.au",
    domain: "perthtreecare.com.au",
    category: "Tradie website",
    summary:
      "Local tree removal and lopping site built to convert — clear services, suburb coverage, reviews and obligation-free quotes.",
  },
  {
    name: "Sweet Melodies",
    url: "https://sweetmelodies.com.au",
    domain: "sweetmelodies.com.au",
    category: "Events & culture",
    summary:
      "High-energy event site for Perth’s Gujarati cultural celebrations — tickets, vibe and festival presence in one place.",
  },
  {
    name: "Tara Uniforms",
    url: "https://tarauniforms.com.au",
    domain: "tarauniforms.com.au",
    category: "Business website",
    summary:
      "Professional web presence for a uniforms business — clean, credible and ready for customers to get in touch.",
  },
  {
    name: "Mighty Gifts",
    url: "https://mightygifts.com.au",
    domain: "mightygifts.com.au",
    category: "Shopify store",
    summary:
      "Australian online gift store — curated products, smooth shopping and a storefront built to sell.",
  },
];

export const packages = [
  {
    name: "Starter Site",
    price: "$699",
    blurb: "A proper five-page site without the big-agency bill.",
    featured: false,
    includes: [
      "5-page website",
      "Domain included for the first year",
      "DNS setup via Cloudflare",
      "Mobile responsive design",
      "Basic on-page SEO",
      "Contact form",
    ],
    excludes: ["Email hosting & mailboxes"],
  },
  {
    name: "Business Site",
    price: "$1,499",
    blurb: "For businesses that need more room to tell the story and convert.",
    featured: true,
    includes: [
      "Up to 10 pages",
      "Domain + Cloudflare DNS (first year)",
      "Quote / enquiry forms",
      "Google Analytics setup",
      "SEO foundations & sitemap",
      "Two revision rounds",
    ],
    excludes: ["Email hosting & mailboxes"],
  },
  {
    name: "Tradie Pro",
    price: "$2,499",
    blurb: "Built for Aussie tradies who want more jobs, not more admin.",
    featured: false,
    includes: [
      "Everything in Business",
      "Service & suburb landing pages",
      "Photo gallery of your work",
      "Click-to-call CTAs throughout",
      "Aussie-first copywriting",
      "Review / trust section",
    ],
    excludes: ["Email hosting & mailboxes"],
  },
  {
    name: "Shopify Store",
    price: "$2,999",
    blurb: "A shop that’s set up to sell — not just look pretty.",
    featured: false,
    includes: [
      "Shopify store setup & theme",
      "Brand styling & navigation",
      "Product & collection structure",
      "Payments & shipping config",
      "Essential apps guidance",
      "Owner training handoff",
    ],
    excludes: ["Shopify subscription fees", "Ongoing ad spend"],
  },
];

export const customEngagements = [
  {
    title: "NetSuite integrations",
    body: "NetSuite to eBay, custom NetSuite APIs, and ERP workflows scoped to how your team actually works.",
  },
  {
    title: "WordPress & custom builds",
    body: "From content sites to tailored web apps — priced to the job, not a one-size package.",
  },
  {
    title: "Apps & products",
    body: "Fixed-scope or staged builds for mobile apps and digital products. Let’s talk about the outcome you need.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    body: "We get clear on what you need, who it’s for, and what success looks like — before a single pixel is pushed.",
  },
  {
    step: "02",
    title: "Design",
    body: "Structure, copy and visuals aligned to your brand. You see it, we refine it, then we lock the direction.",
  },
  {
    step: "03",
    title: "Build",
    body: "Clean, modern builds — websites, Shopify, WordPress or integrations — tested on real devices.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Domain, Cloudflare DNS, go-live checks and a handoff so you’re not left guessing how it all works.",
  },
];
