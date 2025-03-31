
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-10 fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold font-poppins text-brand-blue">CareerLift</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li><a href="#features" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Features</a></li>
            <li><a href="#testimonials" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Testimonials</a></li>
            <li><a href="#pricing" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Pricing</a></li>
            <li><a href="#faq" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">FAQ</a></li>
          </ul>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="font-medium">Log in</Button>
            <Button className="bg-brand-blue hover:bg-brand-blue/90 font-medium">Sign up</Button>
          </div>
        </div>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-t p-4">
          <ul className="flex flex-col space-y-4 mb-4">
            <li><a href="#features" className="text-gray-700 hover:text-brand-blue font-medium block py-2" onClick={toggleMenu}>Features</a></li>
            <li><a href="#testimonials" className="text-gray-700 hover:text-brand-blue font-medium block py-2" onClick={toggleMenu}>Testimonials</a></li>
            <li><a href="#pricing" className="text-gray-700 hover:text-brand-blue font-medium block py-2" onClick={toggleMenu}>Pricing</a></li>
            <li><a href="#faq" className="text-gray-700 hover:text-brand-blue font-medium block py-2" onClick={toggleMenu}>FAQ</a></li>
          </ul>
          
          <div className="flex flex-col space-y-3">
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
