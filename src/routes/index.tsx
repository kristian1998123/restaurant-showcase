import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import entranceAsset from "@/assets/barbaresco-entrance.jpeg.asset.json";
import waterfrontAsset from "@/assets/batsi-waterfront.jpeg.asset.json";
import pizzaAsset from "@/assets/wood-fired-pizza.jpeg.asset.json";
import pastaAsset from "@/assets/pasta-rose.jpeg.asset.json";
import wineAsset from "@/assets/wine-shadows.jpg.asset.json";
import menuAsset from "@/assets/barbaresco-menu.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbaresco | Italian Restaurant in Batsi, Andros" },
      {
        name: "description",
        content:
          "Wood-fired pizza, handmade pasta and Italian wine in the heart of Batsi, Andros. Call Barbaresco to reserve your table.",
      },
      { property: "og:title", content: "Barbaresco | Batsi, Andros" },
      {
        property: "og:description",
        content: "Italian dining, wood-fired pizza and waterfront evenings in Batsi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menuHighlights = [
  {
    name: "Margherita",
    description: "Fresh burrata and basil",
    price: "12€",
  },
  {
    name: "Wild Mushroom Pizza",
    description: "Wild mushrooms and Parmesan, with optional fresh truffle",
    price: "17€ / 22€",
  },
  {
    name: "Spaghetti alle Vongole",
    description: "White wine sauce and chili",
    price: "17€",
  },
  {
    name: "Linguine with Fresh Shrimp",
    description: "Bisque, fennel and three peppers",
    price: "18€",
  },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          element.dataset["visible"] = "true";
          observer.unobserve(element);
        }
      },
      { threshold: 0.14 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-accent/20">
      <nav className="fixed inset-x-0 top-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-6 text-hero mix-blend-difference sm:px-8 lg:px-12">
        <a href="#top" className="min-w-0 truncate font-mono text-[10px] uppercase tracking-widest sm:text-xs">
          Batsi / Andros
        </a>
        <div className="flex shrink-0 items-center gap-4 sm:gap-8">
          <a href="#menu" className="font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-accent sm:text-xs">
            Menu
          </a>
          <a href="tel:+302282042015" className="rounded-full border border-hero/40 px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:bg-hero hover:text-foreground sm:text-xs">
            Reserve
          </a>
        </div>
      </nav>

      <header id="top" className="relative flex min-h-[92svh] items-center justify-center overflow-hidden">
        <img src={entranceAsset.url} alt="Barbaresco restaurant glowing at sunset in Batsi" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-hero-shade" />
        <div className="relative z-10 px-4 text-center text-hero">
          <p className="mb-5 animate-fade-up font-mono text-[10px] uppercase tracking-[0.3em] sm:text-xs">Italian restaurant · Batsi</p>
          <h1 className="animate-title font-display text-[20vw] italic leading-[0.72] sm:text-[15vw] lg:text-[12vw]">Barbaresco</h1>
          <p className="mt-8 animate-fade-up font-mono text-[10px] uppercase tracking-[0.3em] [animation-delay:300ms] sm:text-xs">Wood fire · Pasta · Italian wine</p>
        </div>
        <a href="#story" aria-label="Scroll to our story" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-hero/70 transition-colors hover:text-hero">
          <ArrowDown className="h-6 w-6 animate-scroll" strokeWidth={1.25} />
        </a>
      </header>

      <main>
        <section id="story" className="mx-auto grid max-w-screen-xl items-end gap-14 px-6 py-24 md:grid-cols-12 md:py-36 lg:px-10">
          <Reveal className="md:col-span-7">
            <p className="eyebrow">Our table in Batsi</p>
            <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] sm:text-6xl md:text-7xl">
              Where the <span className="italic text-accent">Aegean</span> meets the warmth of an <span className="italic">Italian kitchen.</span>
            </h2>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              In the heart of Batsi, Barbaresco offers a distinctly Italian evening on Andros: hand-shaped pizza from the wood-fired oven, fresh pasta, seasonal ingredients and bottles from Italy’s celebrated wine regions.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              <span>★ 4.6</span><span>Daily 17:00—01:00</span><span>€20—25 per person</span>
            </div>
          </Reveal>
          <Reveal className="md:col-span-5">
            <img src={pizzaAsset.url} alt="A wood-fired Margherita pizza being finished with herbs" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </Reveal>
        </section>

        <section id="menu" className="bg-menu px-6 py-24 md:py-32 lg:px-10">
          <div className="mx-auto max-w-screen-xl">
            <Reveal className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5 border-b border-border pb-8 sm:flex sm:justify-between">
              <div className="min-w-0">
                <p className="eyebrow">From the menu</p>
                <h2 className="mt-4 font-display text-5xl sm:text-6xl">The selection</h2>
              </div>
              <a href={menuAsset.url} target="_blank" rel="noreferrer" className="group inline-flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-widest sm:text-xs">
                Full menu <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
            <div className="mt-14 grid gap-x-20 gap-y-10 md:grid-cols-2">
              {menuHighlights.map((item, index) => (
                <Reveal key={item.name} className={`menu-row delay-${index + 1}`}>
                  <div className="min-w-0 pr-4">
                    <h3 className="text-lg font-medium sm:text-xl">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs">{item.price}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Barbaresco atmosphere" className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 px-6 py-24 md:grid-cols-12 md:gap-7 md:py-36 lg:px-10">
          <Reveal className="col-span-2 md:col-span-7">
            <img src={pastaAsset.url} alt="Fresh pasta served with rosé wine" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <p className="photo-caption">Pasta & rosé</p>
          </Reveal>
          <Reveal className="col-span-1 md:col-span-5 md:pt-20">
            <img src={wineAsset.url} alt="Two wine glasses casting long shadows" className="aspect-[3/4] w-full object-cover" loading="lazy" />
            <p className="photo-caption">Italian pours</p>
          </Reveal>
          <Reveal className="col-span-1 mt-16 md:col-span-5 md:col-start-2 md:mt-0">
            <img src={waterfrontAsset.url} alt="Tables overlooking Batsi bay at sunset" className="aspect-[3/4] w-full object-cover" loading="lazy" />
            <p className="photo-caption">Sunset in Batsi</p>
          </Reveal>
          <Reveal className="col-span-2 flex items-center md:col-span-6 md:col-start-7">
            <p className="font-display text-4xl italic leading-tight sm:text-5xl md:text-6xl">Dinner begins as the light falls over the bay.</p>
          </Reveal>
        </section>
      </main>

      <footer id="visit" className="bg-foreground px-6 py-20 text-footer md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-screen-xl gap-14 md:grid-cols-3">
          <div>
            <p className="footer-label">Hours</p>
            <p className="mt-6 text-xl">Daily<br />17:00 — 01:00</p>
          </div>
          <div>
            <p className="footer-label">Location</p>
            <p className="mt-6 text-xl">Batsi 845 01<br />Andros, Greece</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Barbaresco+Batsi+Andros" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent sm:text-xs">
              <MapPin className="h-4 w-4" /> Open in maps
            </a>
          </div>
          <div>
            <p className="footer-label">Reservations</p>
            <a href="tel:+302282042015" className="mt-6 block font-display text-4xl italic leading-none transition-colors hover:text-accent sm:text-5xl">+30 22820<br />42015</a>
            <p className="mt-5 text-sm text-footer-muted">Call to reserve your table.</p>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-screen-xl items-center justify-between border-t border-footer-line pt-7 font-mono text-[9px] uppercase tracking-widest text-footer-muted sm:text-[10px]">
          <span>© 2026 Barbaresco</span><span>Batsi · Andros</span>
        </div>
      </footer>

      <a href="tel:+302282042015" aria-label="Call Barbaresco to reserve" className="fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 rounded-full bg-accent px-5 font-mono text-[10px] uppercase tracking-widest text-accent-foreground shadow-reserve transition-transform active:scale-95 md:hidden">
        <Phone className="h-4 w-4" /> Reserve
      </a>
    </div>
  );
}
