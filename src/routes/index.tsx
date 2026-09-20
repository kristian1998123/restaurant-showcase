import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Instagram, MapPin, Phone, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import entranceAsset from "@/assets/barbaresco-entrance.jpeg.asset.json";
import waterfrontAsset from "@/assets/batsi-waterfront.jpeg.asset.json";
import pizzaAsset from "@/assets/wood-fired-pizza.jpeg.asset.json";
import pastaAsset from "@/assets/pasta-rose.jpeg.asset.json";
import wineAsset from "@/assets/wine-shadows.jpg.asset.json";
import menuAsset from "@/assets/barbaresco-menu.pdf.asset.json";
import logoAsset from "@/assets/barbaresco-logo.jpg.asset.json";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbaresco | Italian Restaurant in Batsi, Andros" },
      {
        name: "description",
        content:
          "Wood-fired pizza, handmade pasta and Italian wine in the heart of Batsi, Andros. Browse the full menu and call Barbaresco to reserve your table.",
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

const INSTAGRAM = "https://www.instagram.com/barbarescoandros/";
const PHONE = "tel:+302282042015";

function Reveal({
  children,
  className = "",
  variant = "",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "" | "left" | "right" | "zoom" | "blur" | "clip";
}) {
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
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const variantClass = variant ? `reveal-${variant}` : "";

  return (
    <div ref={ref} className={`scroll-reveal ${variantClass} ${className}`}>
      {children}
    </div>
  );
}

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setY(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return y;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full origin-left bg-accent transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

function MenuSection() {
  const [active, setActive] = useState(menu[0]!.id);
  const [open, setOpen] = useState<string | null>(null);
  const category = menu.find((c) => c.id === active) ?? menu[0]!;

  return (
    <section id="menu" className="menu-tiles relative px-4 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-screen-xl">
        <Reveal variant="zoom" className="menu-card mx-auto max-w-3xl text-center">
          <img src={logoAsset.url} alt="Barbaresco emblem" className="mx-auto h-16 w-16 rounded-full object-contain mix-blend-multiply" />
          <p className="eyebrow mt-5">The full menu</p>
          <h2 className="mt-3 font-display text-5xl sm:text-6xl">Il menù</h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Every dish we serve, in Greek and English. Tap a dish to read it in Greek.
          </p>
          <a
            href={menuAsset.url}
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            View menu as PDF
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <div className="sticky top-[62px] z-30 -mx-4 mt-12 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max gap-2 rounded-full bg-background/85 p-2 backdrop-blur-sm">
            {menu.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setActive(c.id);
                  setOpen(null);
                }}
                className={`menu-tab shrink-0 ${
                  c.id === active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div key={category.id} className="menu-card mx-auto mt-10 max-w-3xl animate-fade-up">
          <p className="eyebrow text-center">{category.note}</p>
          <h3 className="mt-2 text-center font-mono text-sm uppercase tracking-[0.3em] text-accent">
            {category.label}
          </h3>
          <ul className="mt-8 divide-y divide-border">
            {category.items.map((item, index) => {
              const id = `${category.id}-${index}`;
              const isOpen = open === id;
              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : id)}
                    aria-expanded={isOpen}
                    className="group grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 py-5 text-left"
                  >
                    <span className="min-w-0">
                      <span className="flex items-center gap-2 text-base font-medium sm:text-lg">
                        {item.name}
                        <Plus
                          className={`h-3.5 w-3.5 shrink-0 text-accent transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "group-hover:rotate-90"
                          }`}
                        />
                      </span>
                      {item.description ? (
                        <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </span>
                      ) : null}
                      <span
                        className="grid transition-[grid-template-rows,opacity] duration-500 ease-out"
                        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                      >
                        <span className="overflow-hidden">
                          <span className="mt-2 block font-display text-base italic leading-snug text-accent">
                            {item.greek}
                          </span>
                        </span>
                      </span>
                    </span>
                    <span className="shrink-0 pt-1 font-mono text-xs text-accent">{item.price}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-center font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
            Please inform us of any food allergies
          </p>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const scrollY = useScrollY();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-accent/20">
      <ScrollProgress />

      <nav className="fixed inset-x-0 top-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 bg-gradient-to-b from-black/25 to-transparent px-5 py-4 text-hero sm:px-8 lg:px-12">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img src={logoAsset.url} alt="Barbaresco logo" className="h-9 w-9 rounded-full object-cover" />
          <span className="truncate font-mono text-[10px] uppercase tracking-widest sm:text-xs">Batsi / Andros</span>
        </a>
        <div className="flex shrink-0 items-center gap-4 sm:gap-8">
          <a href="#menu" className="font-mono text-[10px] uppercase tracking-widest transition-colors hover:text-accent sm:text-xs">
            Menu
          </a>
          <a href={PHONE} className="rounded-full border border-hero/40 px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:bg-hero hover:text-foreground sm:text-xs">
            Reserve
          </a>
        </div>
      </nav>

      <header id="top" className="relative flex min-h-[92svh] items-center justify-center overflow-hidden">
        <img
          src={entranceAsset.url}
          alt="Barbaresco restaurant glowing at sunset in Batsi"
          className="parallax-img absolute inset-0 h-[118%] w-full object-cover object-center"
          style={{ transform: `translate3d(0, ${scrollY * 0.28}px, 0) scale(${1 + Math.min(scrollY, 600) * 0.0002})` }}
        />
        <div className="absolute inset-0 bg-hero-shade" />
        <div
          className="relative z-10 px-4 text-center text-hero"
          style={{
            opacity: Math.max(0, 1 - scrollY / 520),
            transform: `translate3d(0, ${scrollY * -0.08}px, 0)`,
          }}
        >
          <img
            src={logoAsset.url}
            alt="Barbaresco emblem"
            className="mx-auto mb-6 h-24 w-24 animate-fade-up rounded-full object-cover shadow-reserve sm:h-28 sm:w-28"
          />
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
          <Reveal variant="left" className="md:col-span-7">
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
          <Reveal variant="clip" className="md:col-span-5">
            <img
              src={pizzaAsset.url}
              alt="A wood-fired Margherita pizza being finished with herbs"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </section>

        <div className="overflow-hidden border-y border-border bg-menu py-5">
          <div className="flex w-max animate-marquee gap-10 font-display text-3xl italic text-accent sm:text-4xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex shrink-0 gap-10">
                <span>Wood-fired pizza</span><span>·</span><span>Fresh pasta</span><span>·</span>
                <span>Italian wine</span><span>·</span><span>Sunset in Batsi</span><span>·</span>
                <span>Wood-fired pizza</span><span>·</span><span>Fresh pasta</span><span>·</span>
                <span>Italian wine</span><span>·</span><span>Sunset in Batsi</span><span>·</span>
              </span>
            ))}
          </div>
        </div>

        <MenuSection />

        <section aria-label="Barbaresco atmosphere" className="mx-auto grid max-w-screen-xl grid-cols-2 gap-4 px-6 py-24 md:grid-cols-12 md:gap-7 md:py-36 lg:px-10">
          <Reveal variant="clip" className="col-span-2 md:col-span-7">
            <img src={pastaAsset.url} alt="Fresh pasta served with rosé wine" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            <p className="photo-caption">Pasta & rosé</p>
          </Reveal>
          <Reveal variant="right" className="col-span-1 md:col-span-5 md:pt-20">
            <img src={wineAsset.url} alt="Two wine glasses casting long shadows" className="aspect-[3/4] w-full object-cover" loading="lazy" />
            <p className="photo-caption">Italian pours</p>
          </Reveal>
          <Reveal variant="zoom" className="col-span-1 mt-16 md:col-span-5 md:col-start-2 md:mt-0">
            <img src={waterfrontAsset.url} alt="Tables overlooking Batsi bay at sunset" className="aspect-[3/4] w-full object-cover" loading="lazy" />
            <p className="photo-caption">Sunset in Batsi</p>
          </Reveal>
          <Reveal variant="blur" className="col-span-2 flex items-center md:col-span-6 md:col-start-7">
            <p className="font-display text-4xl italic leading-tight sm:text-5xl md:text-6xl">Dinner begins as the light falls over the bay.</p>
          </Reveal>
        </section>
      </main>

      <footer id="visit" className="bg-foreground px-6 py-20 text-footer md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-screen-xl gap-14 md:grid-cols-3">
          <div>
            <img src={logoAsset.url} alt="Barbaresco logo" className="h-16 w-16 rounded-full object-cover" />
            <p className="footer-label mt-6">Hours</p>
            <p className="mt-4 text-xl">Daily<br />17:00 — 01:00</p>
          </div>
          <div>
            <p className="footer-label">Location</p>
            <p className="mt-6 text-xl">Batsi 845 01<br />Andros, Greece</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Barbaresco+Batsi+Andros" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent sm:text-xs">
              <MapPin className="h-4 w-4" /> Open in maps
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent sm:text-xs">
              <Instagram className="h-4 w-4" /> @barbarescoandros
            </a>
          </div>
          <div>
            <p className="footer-label">Reservations</p>
            <a href={PHONE} className="mt-6 block font-display text-4xl italic leading-none transition-colors hover:text-accent sm:text-5xl">+30 22820<br />42015</a>
            <p className="mt-5 text-sm text-footer-muted">Call to reserve your table.</p>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-screen-xl items-center justify-between border-t border-footer-line pt-7 font-mono text-[9px] uppercase tracking-widest text-footer-muted sm:text-[10px]">
          <span>© 2026 Barbaresco</span><span>Batsi · Andros</span>
        </div>
      </footer>

      <a href={PHONE} aria-label="Call Barbaresco to reserve" className="fixed bottom-5 right-5 z-50 flex h-14 items-center gap-2 rounded-full bg-accent px-5 font-mono text-[10px] uppercase tracking-widest text-accent-foreground shadow-reserve transition-transform active:scale-95 md:hidden">
        <Phone className="h-4 w-4" /> Reserve
      </a>
    </div>
  );
}
