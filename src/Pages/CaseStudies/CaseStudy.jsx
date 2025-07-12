import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Play,
  Database,
  Server,
  Monitor,
  Users,
} from "lucide-react";
import Footer from "../../components/Footer";
import d1 from "../../components/Assets/d_01.png";
import d2 from "../../components/Assets/d_02.png";

const CaseStudy = () => {
  const { projectId } = useParams();
  
  // Helper function to convert YouTube URL to embed format
  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=))([\w-]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  };

  const projects = {
    "ecommerce-platform": {
      title: "Full-Stack E-Commerce Platform",
      subtitle: "Complete MERN Stack Solution",
      youtubeId: "https://youtu.be/P4s2md_NHFc?si=1WMpmOEMkLMc04g7",
      overview:
        "This is a complete MERN Stack project built using the latest and modern web technologies. It incorporates MongoDB, Express.js, React, and Node.js to create a full-stack application. On the frontend, it utilizes Redux Toolkit for efficient state management, enabling streamlined and scalable data flow across the app. Real-time functionality is powered by Socket.IO, allowing features like instant messaging, notifications, or live updates. For email communication, the project integrates Nodemailer, enabling automated and secure email sending such as account verification or notifications. Overall, this project is structured to support scalable, real-time, and interactive web applications with a clean and maintainable architecture.",
      problemStatement: {
        title: "Problem Statement",
        description:
          "Small businesses needed an affordable, scalable e-commerce solution that could handle product management, user authentication, payments, and order tracking without the complexity and cost of enterprise solutions.",
        challenges: [
          "Secure user authentication and authorization",
          "Real-time inventory management",
          "Payment processing integration",
          "Responsive design for all devices",
          "Scalable architecture for growth",
        ],
      },
      solution: {
        title: "Solution & Features",
        features: [
          "User registration and authentication with JWT",
          "Product catalog with search and filtering",
          "Shopping cart and wishlist functionality",
          "Secure payment processing with Stripe",
          "Order tracking and history",
          "Admin dashboard for product and user management",
          "Responsive design for mobile and desktop",
        ],
      },
      techStack: {
        frontend: ["React.js", "Redux Toolkit", "Tailwind CSS", "Axios"],
        backend: ["Node.js", "Express.js", "JWT Authentication", "Bcrypt"],
        database: ["MongoDB", "Mongoose ODM"],
        tools: ["Stripe API", "Cloudinary", "Postman", "Git"],
      },
      architecture: {
        title: "System Architecture",
        description:
          "The application follows a three-tier architecture with clear separation of concerns.",
        layers: [
          {
            name: "Presentation Layer (Frontend)",
            tech: "React.js with Redux",
            description:
              "Handles user interface, state management, and user interactions",
          },
          {
            name: "Business Logic Layer (Backend)",
            tech: "Node.js with Express.js",
            description:
              "Manages API endpoints, authentication, and business rules",
          },
          {
            name: "Data Layer (Database)",
            tech: "MongoDB with Mongoose",
            description:
              "Stores user data, products, orders, and application state",
          },
        ],
      },
      database: {
        title: "Database Design",
        description:
          "MongoDB collections designed for optimal performance and scalability.",
        collections: [
          {
            name: "Users",
            fields: ["_id", "name", "email", "password", "role", "createdAt"],
            relationships: "One-to-Many with Orders",
          },
          {
            name: "Products",
            fields: [
              "_id",
              "name",
              "description",
              "price",
              "category",
              "stock",
              "images",
            ],
            relationships: "Many-to-Many with Orders",
          },
          {
            name: "Orders",
            fields: [
              "_id",
              "userId",
              "products",
              "totalAmount",
              "status",
              "createdAt",
            ],
            relationships: "Belongs to User, Contains Products",
          },
          {
            name: "Categories",
            fields: ["_id", "name", "description", "image"],
            relationships: "One-to-Many with Products",
          },
        ],
      },
      results: {
        title: "Results & Impact",
        metrics: [
          "99.9% uptime with optimized performance",
          "40% faster page load times",
          "Secure payment processing with 0% fraud",
          "Mobile-responsive design with 95% user satisfaction",
        ],
      },
      links: {
        demo: "https://client-eight-coral.vercel.app/",
        github: "https://github.com/im-Toqeer-506/Multivendor",
      },
    },
  };

  const project = projects[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-emerald-400 hover:text-emerald-300">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/20 to-teal-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>
            <p className="text-xl text-gray-300">{project.subtitle}</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-emerald-500/20 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Play size={24} className="text-emerald-400" />
                <h2 className="text-2xl font-bold text-gray-100">
                  Project Demo
                </h2>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-slate-700/50">
                <iframe
                  width="100%"
                  height="100%"
                  src={getYouTubeEmbedUrl(project.youtubeId)}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-emerald-500/20 p-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                Project Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {project.overview}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-emerald-400 text-emerald-400 px-6 py-3 rounded-lg hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-emerald-500/20 p-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                {project.problemStatement.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.problemStatement.description}
              </p>

              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Key Challenges:
              </h3>
              <ul className="space-y-3">
                {project.problemStatement.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Solution & Features */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-emerald-500/20 p-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                {project.solution.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {project.solution.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-emerald-500/20 p-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-8">
                Technology Stack
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Monitor size={24} className="text-emerald-400" />
                    <h3 className="text-xl font-semibold text-gray-100">
                      Frontend
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {project.techStack.frontend.map((tech, index) => (
                      <span
                        key={index}
                        className="block bg-emerald-500/20 text-emerald-400 px-3 py-2 rounded-lg text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Server size={24} className="text-teal-400" />
                    <h3 className="text-xl font-semibold text-gray-100">
                      Backend
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {project.techStack.backend.map((tech, index) => (
                      <span
                        key={index}
                        className="block bg-teal-500/20 text-teal-400 px-3 py-2 rounded-lg text-sm border border-teal-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Database size={24} className="text-cyan-400" />
                    <h3 className="text-xl font-semibold text-gray-100">
                      Database
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {project.techStack.database.map((tech, index) => (
                      <span
                        key={index}
                        className="block bg-cyan-500/20 text-cyan-400 px-3 py-2 rounded-lg text-sm border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users size={24} className="text-purple-400" />
                    <h3 className="text-xl font-semibold text-gray-100">
                      Tools
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {project.techStack.tools.map((tech, index) => (
                      <span
                        key={index}
                        className="block bg-purple-500/20 text-purple-400 px-3 py-2 rounded-lg text-sm border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-emerald-500/20 p-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                {project.architecture.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {project.architecture.description}
              </p>

              {/* Architecture Diagram */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">
                  System Architecture Diagram
                </h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg blur-sm"></div>
                  <div className="relative bg-slate-700/30 rounded-lg border border-emerald-500/20 p-4">
                    <img
                      src={d1}
                      alt="System Architecture Diagram"
                      className="w-full max-h-[28rem] object-contain rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-gray-400 mt-2 text-center">
                      Replace this with your actual system architecture diagram
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {project.architecture.layers.map((layer, index) => (
                  <div
                    key={index}
                    className="p-6 bg-slate-700/50 rounded-lg border border-emerald-500/20"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-100">
                        {layer.name}
                      </h3>
                    </div>
                    <p className="text-emerald-400 font-medium mb-2">
                      {layer.tech}
                    </p>
                    <p className="text-gray-300">{layer.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Database Design */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-emerald-500/20 p-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-6">
                {project.database.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {project.database.description}
              </p>

              {/* Database Schema Diagram */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-100 mb-4">
                  Database Schema Diagram
                </h3>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg blur-sm"></div>
                  <div className="relative bg-slate-700/30 rounded-lg border border-emerald-500/20 p-4">
                    <img
                      src={d2}
                      alt="Database Schema Diagram"
                      className="w-full max-h-[28rem] object-contain rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-gray-400 mt-2 text-center">
                      Replace this with your actual database schema diagram
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {project.database.collections.map((collection, index) => (
                  <div
                    key={index}
                    className="p-6 bg-slate-700/50 rounded-lg border border-emerald-500/20"
                  >
                    <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                      {collection.name}
                    </h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">
                        Fields:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {collection.fields.map((field, fieldIndex) => (
                          <span
                            key={fieldIndex}
                            className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs border border-emerald-500/30"
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">
                        Relationships:
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {collection.relationships}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-emerald-500/20 p-8">
              <h2 className="text-3xl font-bold text-gray-100 mb-8">
                {project.results.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {project.results.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20"
                  >
                    <div className="w-3 h-3 bg-emerald-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default CaseStudy;