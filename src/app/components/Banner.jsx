"use client";
import React, { useEffect } from "react";
import { Github, Linkedin, X, Instagram, Facebook } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/supanile" },
    { Icon: Instagram, href: "https://www.instagram.com/revernire/" },
    { Icon: X, href: "https://x.com/supanile" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/supanile/" },
    { Icon: Github, href: "https://github.com/supanile" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-950">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-gray-950 to-gray-950"></div>

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Content */}
      <div className="relative h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h2
                data-aos="fade-up"
                className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500 text-xl font-medium"
              >
                <TypeAnimation
                  sequence={[
                    "Front-End Developer",
                    1000, 
                    "Back-End Developer",
                    1000,
                    "Full-Stack Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </h2>
              <h1
                data-aos="fade-up"
                className="text-4xl md:text-6xl font-bold text-white"
              >
                <TypeAnimation
                  sequence={[
                    "Supawich Sangrattanayon",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              <p
                data-aos="fade-up"
                className="text-lg text-gray-400 max-w-2xl leading-relaxed"
              >
                สวัสดีครับ! ผมเป็น Full Stack Developer จบจาก KMITL มีประสบการณ์
                2+ ปี เชี่ยวชาญด้าน Front-End และการพัฒนาเว็บไซต์ด้วย HTML, CSS,
                JavaScript รวมถึง Bootstrap และ Tailwind CSS ยินดีรับงาน
                Freelance ครับ
              </p>
            </div>

            {/* Tech stack pills */}
            <div data-aos="fade-up" className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "Next.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800/50 text-gray-300 border border-gray-700/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div data-aos="fade-up" className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-full bg-gray-800/30 text-gray-400 hover:text-white hover:bg-gray-800/70 transition-all duration-300"
                >
                  <social.Icon className="w-5 h-5" />
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
