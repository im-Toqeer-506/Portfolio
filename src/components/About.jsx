import React from "react";
import { User, Briefcase, BookOpen } from "lucide-react";
import ProfilePic from "./assets/about.jpeg";

const About = () => {
  return (
    <section id="about" className="relative py-20 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating exceptional digital
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <img
              src={ProfilePic}
              alt="Muhammad Toqeer Zia"
              className="relative rounded-2xl shadow-2xl border border-emerald-500/20"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-100 mb-6">
              MERN Stack Developer & CS Undergraduate
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm currently in my 5th semester pursuing a Bachelor's degree in
              Computer Science. Through my coursework, I've gained hands-on
              experience in core areas like Object-Oriented Programming (OOP),
              Data Structures & Algorithms (DSA), Computer Networking, and
              Database Management Systems (DBMS).
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Alongside my academic journey, I specialize in full-stack web
              development using the MERN stack — building scalable and
              maintainable applications from frontend to backend. I'm passionate
              about writing clean, efficient code and solving real-world
              problems through technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <User size={24} className="text-emerald-400" />
                <span className="text-gray-200">MERN Stack Developer</span>
              </div>

              <div className="flex items-center gap-3 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <BookOpen size={24} className="text-cyan-400" />
                <span className="text-gray-200">5th Semester CS Student</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
