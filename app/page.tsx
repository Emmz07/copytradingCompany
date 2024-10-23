import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import MarqueeDemo from '@/components/Reviews';
import StatsSection from '@/components/Stat';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <StatsSection />
        <Testimonials />
        <MarqueeDemo />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}