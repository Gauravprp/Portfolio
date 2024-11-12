import React from "react";
import SkillsSection from "./Skills";
import Timeline from "./Timeline";

function About() {
  return (
    <>
      <section className="bg-[#000] text-white pt-16">
        <div className="container mx-auto max-w-[1200px] max-[1200px]:max-w-[90%] flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-[55px] max-[900px]:text-[36px] font-bold mb-6">
              Personal Infos
            </h2>
            <ul className="text-lg space-y-2">
              <li>
                <span className="text-[#c2c2c2] font-[600]">First Name:</span>{" "}
                <span className="text-[#ffffff] font-[600]">Gaurav</span>
              </li>
              <li>
                <span className="text-[#c2c2c2] font-[600]">Last Name:</span>{" "}
                <span className="text-[#ffffff] font-[600]">Singh</span>
              </li>
              <li>
                <span className="text-[#c2c2c2] font-[600]">Age:</span> 22 Years
              </li>
              <li>
                <span className="text-[#c2c2c2] font-[600]">Freelance:</span>{" "}
                <span className="text-green-500 font-[600]">Available</span>
              </li>
              <li>
                <span className="text-[#c2c2c2] font-[600]">Phone:</span>{" "}
                <span className="text-[#ffffff] font-[600]">
                  +91 978 5072 507
                </span>
              </li>
              <li>
                <span className="text-[#c2c2c2] font-[600]">Email:</span>{" "}
                <span className="text-[#ffffff] font-[600]">
                  mailto:gaurav89824@gmail.com
                </span>
              </li>

              <li>
                <span className="text-[#c2c2c2] font-[600]">Nationality:</span>{" "}
                <span className="text-[#ffffff] font-[600]">Indian</span>
              </li>
              <li>
                <span className="text-[#c2c2c2] font-[600]">Address:</span>{" "}
                <span className="text-[#ffffff] font-[600]">Jaipur</span>
              </li>
              <li>
                <span className="text-[#c2c2c2] font-[600]">Languages:</span>{" "}
                <span className="text-[#ffffff] font-[600]">
                  English, Hindi
                </span>
              </li>
            </ul>
            <button className="mt-[40px]">
              <a
                href="/public/gauravcv.pdf" // Update this path
                download="" // This will set the downloaded file's name
                className="group relative inline-block px-8 py-4 bg-black border-2 border-[#ffb400] text-[#ffb400] font-bold rounded-full overflow-hidden transition-all duration-300 ease-in-out"
              >
                <span className="absolute inset-0 w-full h-full bg-[#ffb400] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300 ease-in-out">
                  Download CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:text-white transition-colors duration-300 ease-in-out"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </a>
            </button>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-8 text-center">
            <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-md  hover:bg-gray-800  transition duration-300">
              <h3 className="text-4xl font-bold text-yellow-500">2+</h3>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-md  hover:bg-gray-800  transition duration-300">
              <h3 className="text-4xl font-bold text-yellow-500">20+</h3>
              <p className="text-lg">Completed Projects</p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-md  hover:bg-gray-800  transition duration-300">
              <h3 className="text-4xl font-bold text-yellow-500">18+</h3>
              <p className="text-lg">Happy Customers</p>
            </div>
            <div className="bg-[#1a1a1a] p-8 rounded-lg shadow-md  hover:bg-gray-800  transition duration-300">
              <h3 className="text-4xl font-bold text-yellow-500">15+</h3>
              <p className="text-lg">Awards Won</p>
            </div>
          </div>
        </div>
      </section>
      <SkillsSection />
      <Timeline />
    </>
  );
}

export default About;
