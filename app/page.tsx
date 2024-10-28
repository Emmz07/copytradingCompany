import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import MarqueeDemo from '@/components/Reviews';
import Stat from '@/components/new';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stat />
        <MarqueeDemo />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}