"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './mode-toogle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Tradewith<span className='text-blue-400'>Chun</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="#features" className="text-foreground hover:text-primary transition-colors">Features</Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link>
            <Button className='bg-blue-400 hover:bg-blue-300'>Copy Now</Button>
            <ModeToggle />
          </nav>
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">Features</Link>
            <Link href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">Testimonials</Link>
            <Link href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary">FAQ</Link>
            <Button variant="outline" className="w-full mt-2">Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;