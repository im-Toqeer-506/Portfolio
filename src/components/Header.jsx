import React from "react";
import { Menu, X, Terminal } from "lucide-react";

const Header = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollToSection,
}) => {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl z-50 border-b border-emerald-500/20 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                <Terminal size={16} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Toqeer.dev
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === section
                        ? "text-emerald-400 bg-emerald-500/20 shadow-lg shadow-emerald-500/25"
                        : "text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10"
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-emerald-400 p-2 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-slate-900 border-l border-emerald-500/20 z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {[
            "home",
            "about",
            "skills",
            "projects",
            "contact",
          ].map((section) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(section);
                setIsMenuOpen(false); // close on selection
              }}
              className={`capitalize block w-full text-left px-4 py-2 rounded-md text-base font-medium transition-colors ${
                activeSection === section
                  ? "text-emerald-400 bg-emerald-500/20"
                  : "text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
