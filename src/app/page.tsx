import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Watch } from "@/components/Watch";
import { Faq } from "@/components/Faq";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Watch />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
