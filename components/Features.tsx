import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    title: 'Expert Strategies',
    description: 'Benefit from our meticulously crafted trading strategies, designed to maximize profits while minimizing risks.',
    icon: TrendingUp,
  },
  {
    title: 'Advanced Risk Management',
    description: 'Our sophisticated risk management techniques ensure your investments are protected in volatile markets.',
    icon: Shield,
  },
  {
    title: 'Real-Time Execution',
    description: 'Experience lightning-fast trade executions on Exness, powered by our cutting-edge technology.',
    icon: Zap,
  },
  {
    title: 'Community Insights',
    description: 'Join a thriving community of traders and gain valuable insights to enhance your trading knowledge.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-foreground mb-12">Why TradewithChun?</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-blue-400 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;