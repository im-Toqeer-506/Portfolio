import React from "react";
import { Code, Server, Database } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      color: "from-emerald-400 to-teal-500",
      description: "React, JavaScript, HTML5, CSS3, Tailwind CSS",
    },
    {
      name: "Backend Development",
      icon: Server,
      color: "from-green-400 to-emerald-500",
      description: "Node.js, Express.js, RESTful APIs, Authentication",
    },
    {
      name: "Database Management",
      icon: Database,
      color: "from-teal-400 to-cyan-500",
      description: "MongoDB, Mongoose, Database Design, Optimization,SQL",
    },
  ];

  return (
    <section id="skills" className="relative py-20 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 transform hover:scale-105">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <skill.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  {skill.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-100 mb-8">
            MERN Stack & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "MongoDB",
              "Express.js",
              "React",
              "Node.js",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "Socket.io",
              "Stripe",
              "JWT",
              "Mongoose",
              "Git",
              "Postman",
              "Firebase",
              "MetrialUi",
              "Notion"
            ].map((tech) => (
              <span
                key={tech}
                className="bg-slate-800/50 backdrop-blur-xl border border-emerald-500/20 px-6 py-3 rounded-full text-gray-200 hover:border-emerald-400/40 hover:text-emerald-400 transition-all duration-300 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
