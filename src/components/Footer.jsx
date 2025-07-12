import React from "react";
import { Coffee, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900/50 backdrop-blur-xl border-t border-emerald-500/20 py-8 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee size={16} className="text-emerald-400" />
            <span className="text-gray-300">Made with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span className="text-gray-300">by Toqeer</span>
          </div>
          <p className="text-gray-400">
            © 2025 Muhammad Toqeer Zia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
