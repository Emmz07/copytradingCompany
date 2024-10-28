'use client';

import { Card } from '@/components/ui/card';
import { ArrowUpRight, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function StatisticsSection() {
  return (
    <section className="px-4 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trading Performance Analytics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track real-time performance metrics and trading statistics from our top-performing traders
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4 mb-8">
          {[
            {
              title: 'Total Profit',
              value: '$842,593',
              change: '+23.5%',
              icon: DollarSign,
            },
            {
              title: 'Active Investors',
              value: '2,147',
              change: '+18.2%',
              icon: Users,
            },
            {
              title: 'Win Rate',
              value: '89.4%',
              change: '+5.7%',
              icon: TrendingUp,
            },
            {
              title: 'Avg. Monthly Return',
              value: '17.8%',
              change: '+2.3%',
              icon: ArrowUpRight,
            },
          ].map((stat, index) => (
            <Card key={index} className="p-6 border-border/50 border-primary/20 hover:border-primary/50  transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                  <stat.icon className="w-6 h-6 text-yellow-500" />
                </div>
                <span className="text-sm text-emerald-500 flex items-center gap-1">
                  {stat.change}
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <h3 className="font-medium text-muted-foreground">{stat.title}</h3>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}