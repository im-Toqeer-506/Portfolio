import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Dot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Full‑Stack E‑Commerce Platform",
      description:
        "A full‑stack MERN app with real‑time Socket.IO, Redux Toolkit state, and Nodemailer emails — built for scalable modern commerce.",
      image: "https://cmsmart.net/images/community/7961/banner.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "JWT",
        "Socket.io",
        "Redux Toolkit",
        "Nodemailer",
        "Mongoose",
        "Tailwind CSS",
      ],
      demo: "https://client-eight-coral.vercel.app/",
      github: "https://github.com/im-Toqeer-506/Multivendor",
      featured: true,
    },
    {
      title: "Real‑Time Chat Application",
      description:
        "Modern chat with authentication, private & group rooms, and instant messaging.",
      image:
        "https://clarity.pk/wp-content/uploads/2021/03/realestate-pakistan-850x491.jpg",
      technologies: [
        "React",
        "TailwindCSS",
        "React Redux",
        "Jwt",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
      demo: "https://github.com/im-Toqeer-506",
      github: "https://github.com/im-Toqeer-506/Real_Estate",
    },
  ];

  return (
    <section id="projects" className="relative py-20 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A timeline of my recent work and creative solutions
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* vertical line */}
          <span className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-1 bg-emerald-500/30 h-full rounded"></span>

          {/* items */}
          {projects.map((project, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={project.title}
                className={`
                  mb-16 flex flex-col sm:flex-row
                  ${isLeft ? "sm:justify-start" : "sm:justify-end"}
                `}
              >
                {/* connector dot */}
                <span
                  className={`
                    hidden sm:flex items-center justify-center
                    absolute left-1/2 -translate-x-1/2
                    w-6 h-6 rounded-full bg-slate-900 border-4 border-emerald-400 z-10
                  `}
                >
                  <Dot size={10} className="text-emerald-400" />
                </span>

                {/* card */}
                <div
                  className={`
                    relative w-full sm:w-[45%]
                    ${isLeft ? "sm:mr-auto" : "sm:ml-auto"}
                    bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-emerald-500/20
                    hover:border-emerald-400/40 transition-all duration-300
                    overflow-hidden group transform hover:scale-105
                  `}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>

                  {/* image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    {project.featured && (
                      <span className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-100 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {idx === 0 && (
                        <Link
                          to="/case-study/ecommerce-platform"
                          className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium"
                        >
                          <ExternalLink size={16} />
                          Case Study
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
