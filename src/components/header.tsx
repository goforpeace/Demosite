
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="#home" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <Droplets className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Hygiene Horizon</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex">
             <Button asChild>
                <Link href="#contact">Request a Quote</Link>
            </Button>
        </div>
       
        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background/95 backdrop-blur-sm",
          isOpen ? "max-h-96" : "max-h-0"
        )}>
          <nav className="flex flex-col items-center gap-4 px-4 pb-4 border-t border-border">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </Link>
            ))}
            <Button onClick={() => setIsOpen(false)} asChild className="mt-2">
              <Link href="#contact">Request a Quote</Link>
            </Button>
          </nav>
        </div>
    </header>
  );
}
