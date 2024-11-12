import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="hero-bg h-screen p-[60px] max-[900px]:px-0">
        <div className="h-full w-full max-[900px]:max-w-[90%] mx-auto rounded-[50px] bg-[#000] shadow flex items-start justify-center max-[900px]:flex-col">
          <div className="w-[50%] max-[900px]:w-[100%] flex items-center justify-center h-[100%]">
            <div className="rounded-[50%] h-[600px] w-[600px] max-[900px]:h-[400px] max-[900px]:w-[400px]  flex items-center justify-center">
              <img
                className="rounded-[100%] w-[100%] subject"
                src="./subject.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%] max-[900px]:w-[100%] flex items-center justify-center h-[100%]">
            <div class="text-[#fff] flex flex-col items-center justify-center ">
              <h2 class="text-[#ffb400] text-3xl md:text-4xl font-bold mb-2">
                — I'M GAURAV SINGH.
              </h2>
              <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
                WEB DEVELOPER
              </h1>
              <p class="text-center text-lg md:text-xl max-w-2xl mb-8 px-4">
                I'm a Jaipur based web designer & front-end developer focused on
                crafting clean & user-friendly experiences. I am passionate
                about building excellent software that improves the lives of
                those around me.
              </p>
              <button>
                <Link
                  href="/about"
                  class="group relative inline-block px-8 py-4 bg-black border-2 border-[#ffb400] text-[#ffb400] font-bold rounded-full overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <span class="absolute inset-0 w-full h-full bg-[#ffb400] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                  <span class="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300 ease-in-out">
                    More About Me
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 group-hover:text-white transition-colors duration-300 ease-in-out"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
