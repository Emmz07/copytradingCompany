import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to Revolutionize Your Trading?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join TradewithChun today and experience the power of expert copytrading on Exness. Start maximizing your trading potential now!
        </p>
        <Button size="lg" variant="secondary" className="bg-yellow-400 font-semibold"> 
          Start Copytrading Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;