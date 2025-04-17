"use client";
import { Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const certificates = [
  {
    id: 1,
    title: "Certificate 51db55d",
    image: "/img/certificate/_1_6d5d7ca3ddf7fb576e6d6dcdf3849882.jpg",
  },
  {
    id: 2,
    title: "Certificate 51db55d",
    image: "/img/certificate/_1_51db55d99ee3bc908eceae3e51da33be.jpg",
  },
  {
    id: 3,
    title: "Certificate 760b585",
    image: "/img/certificate/_1_760b585a461289f20275ff23939574a4.jpg",
  },
  {
    id: 4,
    title: "Certificate 9982cea",
    image: "/img/certificate/_1_9982cea9330e9627eb0e35d0897d4207.jpg",
  },
  {
    id: 5,
    title: "Certificate a81f78402",
    image: "/img/certificate/_1_a81f78402294dc64cb5c9c01fdd48a3.jpg",
  },
  {
    id: 6,
    title: "Certificate b4c77ce",
    image: "/img/certificate/_1_b4c77ce1937fa5be6a73bc6a11cede3d.jpg",
  },
  {
    id: 7,
    title: "Certificate b12231a",
    image: "/img/certificate/_1_b12231a1d6a93adefa641d34598f47c8.jpg",
  },
  {
    id: 8,
    title: "Building LINE Chatbot with ChatGPT and Gemini",
    image:
      "/img/certificate/borntodev-academy_Building LINE Chatbot with ChatGPT and Gemini_certificate.png",
  },
  {
    id: 9,
    title: "Excel for Everyone",
    image:
      "/img/certificate/borntodev-academy_Excel for Everyone_certificate.png",
  },
  {
    id: 11,
    title: "Get started with TypeScript",
    image:
      "/img/certificate/borntodev-academy_Get started with TypeScript_certificate.png",
  },
  {
    id: 12,
    title: "Introduction to Computer Science",
    image:
      "/img/certificate/borntodev-academy_Introduction to Computer Science_certificate.png",
  },
  {
    id: 13,
    title: "Introduction to Quantum Computing",
    image:
      "/img/certificate/borntodev-academy_Introduction to Quantum Computing_certificate.png",
  },
  {
    id: 14,
    title: "เริ่มต้นเขียนโค้ด ด้วย Kaojao",
    image:
      "/img/certificate/borntodev-academy_ติดจรวด เก่งจริงเขียนโค้ด ด้วย Kaojao_certificate.png",
  },
  {
    id: 15,
    title: "ChatGPT for Developers",
    image:
      "/img/certificate/borntodev-academy_ChatGPT for Developers_certificate.png",
  },
  {
    id: 16,
    title: "Command Prompt 101",
    image:
      "/img/certificate/borntodev-academy_Command Prompt 101_certificate.png",
  },
  {
    id: 17,
    title: "Essential SQL for Everyone",
    image:
      "/img/certificate/borntodev-academy_Essential SQL for Everyone_certificate.png",
  },
  {
    id: 18,
    title: "Fundamentals of Graphic Design",
    image:
      "/img/certificate/borntodev-academy_Fundamentals of Graphic Design_certificate.png",
  },
  {
    id: 19,
    title: "GitHub for Developer",
    image:
      "/img/certificate/borntodev-academy_GitHub for Developer_certificate.png",
  },
  {
    id: 20,
    title: "Introduction to JavaScript",
    image:
      "/img/certificate/borntodev-academy_Introduction to JavaScript_certificate.png",
  },
  {
    id: 21,
    title: "Fundamental Web Dev with HTML5 & CSS3",
    image:
      "/img/certificate/borntodev-academy_Lite _ Fundamental Web Dev with HTML5 & CSS3_certificate.png",
  },
  {
    id: 22,
    title: "Notion Database for Everyone",
    image:
      "/img/certificate/borntodev-academy_Notion Database for Everyone_certificate.png",
  },
  {
    id: 23,
    title: "DevLab Ranking",
    image: "/img/certificate/certificate-devlab-ranking.png",
  },
  {
    id: 24,
    title: "Elements of AI",
    image: "/img/certificate/certificate-elements-of-ai.png",
  },
  {
    id: 25,
    title: "Udemy React",
    image: "/img/certificate/udemy-react.jpg",
  },
  {
    id: 26,
    title: "Udemy Python GUI",
    image: "/img/certificate/udemy-python-gui.jpg",
  },
  {
    id: 27,
    title: "Udemy JavaScript 40",
    image: "/img/certificate/udemy-js-40.jpg",
  },
  {
    id: 28,
    title: "Udemy JavaScript 20",
    image: "/img/certificate/udemy-js-20.jpg",
  },
];

const CertificatePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredCertificates = certificates.filter((cert) =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-gray-950 to-gray-950"></div>

      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Header Content */}
      <div data-aos="fade-up" className="relative pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
            My Certificates
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search certificates..."
              className="w-full pl-12 pr-4 py-2.5 bg-gray-900/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:outline-none text-gray-100 placeholder-gray-400 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div data-aos="fade-up" className="relative">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800/50 backdrop-blur-sm"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-100 mb-2 truncate">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-violet-400 transition-colors duration-300">
                    Click to view details
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-violet-500/0 group-hover:border-violet-500/50 rounded-2xl transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-gray-950/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-800/50">
              <div className="relative">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
                >
                  <X size={20} />
                </button>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {selectedCert.title}
                  </h2>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-600 text-white rounded-xl hover:from-violet-600 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatePage;
