import React from "react";
import { Globe, ExternalLink, ChevronDown, Zap, Download } from "lucide-react";
import image from "./Assets/about.jpeg"
const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent flex-1 max-w-20 lg:hidden"></div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/20 rounded-full border border-emerald-400/30">
                  <Zap size={16} className="text-emerald-400" />
                  <span className="text-emerald-400 font-medium">
                    MERN Stack Developer
                  </span>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent flex-1 max-w-20 lg:hidden"></div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="block text-gray-100 mb-2">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Muhammad Toqeer Zia
                </span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting scalable full-stack web applications with modern
              technologies. Passionate about creating seamless user experiences
              and robust backend solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-medium transform hover:scale-105 shadow-lg shadow-emerald-500/25"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Globe size={20} />
                  <span>View My Work</span>
                  <ExternalLink
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>

              <a
                href="/resume.pdf"
                download="Muhammad_Toqeer_Zia_Resume.pdf"
                className="group border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-xl hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 font-medium transform hover:scale-105"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Download size={20} className="group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-2xl opacity-30 animate-pulse scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img
                src={`${image}`}
                alt="Muhammad Toqeer Zia - MERN Stack Developer"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl ring-4 ring-emerald-400/50 transition-transform duration-500 hover:scale-105 hover:ring-emerald-400/70"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white font-bold text-sm">MERN</span>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Globe size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12 lg:mt-8">
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-emerald-400 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
