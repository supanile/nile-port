"use client"
import React, { useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  X,
} from "lucide-react";
import StackIcon from "tech-stack-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillBadge = ({ children }) => (
  <span className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-xl text-sm font-medium border border-gray-700/50 backdrop-blur-sm hover:bg-gray-700/50 hover:text-white transition-all duration-300">
    {children}
  </span>
);

const SkillLogo = ({ Icon, alt, size = "w-20 h-20" }) => (
  <Icon
    className={`${size} object-contain rounded-lg group-hover:scale-110 transition-transform duration-300`}
  />
);

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent mb-6">
    {children}
  </h2>
);

const AboutPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  const skills = {
    frontend: [
      { id: "html", name: "HTML", Icon: () => <StackIcon name="html5" /> },
      { id: "css", name: "CSS", Icon: () => <StackIcon name="css3" /> },
      {
        id: "javascript",
        name: "JavaScript",
        Icon: () => <StackIcon name="js" />,
      },
      {
        id: "typescript",
        name: "TypeScript",
        Icon: () => <StackIcon name="typescript" />,
      },
      { id: "react", name: "React", Icon: () => <StackIcon name="reactjs" /> },
      { id: "vue", name: "Vue.js", Icon: () => <StackIcon name="vuejs" /> },
      {
        id: "bootstrap",
        name: "Bootstrap",
        Icon: () => <StackIcon name="bootstrap5" />,
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        Icon: () => <StackIcon name="tailwindcss" />,
      },
      {
        id: "mui",
        name: "Material UI",
        Icon: () => <StackIcon name="materialui" />,
      },
    ],
    backend: [
      {
        id: "nodejs",
        name: "Node.js",
        Icon: () => <StackIcon name="nodejs" />,
      },
      { id: "java", name: "Java", Icon: () => <StackIcon name="java" /> },
      { id: "spring", name: "Spring", Icon: () => <StackIcon name="spring" /> },
      { id: "php", name: "PHP", Icon: () => <StackIcon name="php" /> },
      { id: "go", name: "Go", Icon: () => <StackIcon name="go" /> },
    ],
    database: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        Icon: () => <StackIcon name="postgresql" />,
      },
      {
        id: "mongodb",
        name: "MongoDB",
        Icon: () => <StackIcon name="mongodb" />,
      },
      { id: "mysql", name: "MySQL", Icon: () => <StackIcon name="mysql" /> },
    ],
    tools: [
      {
        id: "vscode",
        name: "VS Code",
        Icon: () => <StackIcon name="vscode" />,
      },
      { id: "git", name: "Git", Icon: () => <StackIcon name="git" /> },
      { id: "github", name: "GitHub", Icon: () => <StackIcon name="github" /> },
      {
        id: "postman",
        name: "Postman",
        Icon: () => <StackIcon name="postman" />,
      },
      { id: "figma", name: "Figma", Icon: () => <StackIcon name="figma" /> },
    ],
  };

  return (
    <div className="relative min-h-screen bg-gray-950">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-gray-950 to-gray-950"></div>

      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative">
        {/* Profile Section */}
        <div data-aos="fade-up" className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-1 bg-gray-950 rounded-full"></div>
                <img
                  src="/img/avatar.jpg"
                  alt="Supawich Sangrattanayon"
                  className="relative w-full h-full rounded-full object-cover border-4 border-gray-950"
                />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                ศุภวิชญ์ แสงรัตนายนต์
              </h1>
              <p className="text-xl text-gray-300 mb-2">
                Supawich Sangrattanayon
              </p>
              <p className="text-lg text-gray-400 mb-8">Full Stack Developer</p>

              {/* Social Media Icons */}
              <div data-aos="fade-up" className="flex space-x-4 justify-center">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/supanile" },
                  {
                    Icon: Instagram,
                    href: "https://www.instagram.com/revernire/",
                  },
                  { Icon: X, href: "https://x.com/supanile" },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/supanile/",
                  },
                  { Icon: Github, href: "https://github.com/supanile" },
                ].map((social, index) => (
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

        {/* Content Sections */}
        <div data-aos="fade-up" className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* About Section */}
            <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50">
              <SectionTitle>About Me</SectionTitle>
              <p className="text-gray-300 leading-relaxed">
                สวัสดีครับ! ผมเป็น Full Stack Developer
                ที่มีความหลงใหลในการพัฒนาเว็บไซต์และแอปพลิเคชัน
                จบการศึกษาจากสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                (KMITL) มีประสบการณ์การทำงานมากกว่า 2 ปี
                ในด้านการพัฒนาเว็บไซต์และแอปพลิเคชัน
              </p>
            </div>

            {/* Skills Section */}
            <div data-aos="fade-up" className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50">
              <SectionTitle>Skills</SectionTitle>
              <div className="space-y-12">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-gray-400 uppercase text-sm font-semibold mb-6">
                      {category}
                    </h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4">
                      {skillList.map((skill) => (
                        <SkillLogo
                          key={skill.id}
                          Icon={skill.Icon}
                          alt={skill.name}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div data-aos="fade-up" className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800/50">
              <SectionTitle>Contact</SectionTitle>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a
                  href="mailto:supawit.nile@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-800 px-6 py-3 rounded-xl transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>supawit.nile@gmail.com</span>
                </a>
                <a
                  href="tel:0959562191"
                  className="flex items-center gap-3 text-gray-300 hover:text-white bg-gray-800/50 hover:bg-gray-800 px-6 py-3 rounded-xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>095-956-2191</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
