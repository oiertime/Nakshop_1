import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why', href: '#why' },
    { name: 'Who', href: '#who' },
    { name: 'How', href: '#how' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Price', href: '#price' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-6 h-6 bg-nakYellow rounded-full group-hover:scale-110 transition-transform"></div>
            <span className="text-2xl font-black tracking-tighter uppercase text-nakBlack">
              Nakshop
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-nakDarkGray hover:text-black hover:bg-nakYellow/20 px-3 py-1 rounded transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#price" className="bg-nakBlack text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase hover:bg-nakYellow hover:text-black transition-colors">
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-nakBlack"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full top-full left-0">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-bold uppercase text-nakBlack"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#price" className="bg-nakYellow text-black text-center py-4 text-lg font-bold uppercase rounded-lg" onClick={() => setIsOpen(false)}>
              Join Nakshop
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};