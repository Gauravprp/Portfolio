import React from "react";

const MyProjects = () => {
  const projects = [
    {
      name: "Alchymyleads",
      image: "./Alchymyleads.png", // Replace with actual image later
      link: "https://alchemyleads.com/", // Placeholder link
    },
    {
      name: "T²Labs",
      image: "./Tlabs.png", // Replace with actual image later
      link: "https://tsquaredlab.com/", // Placeholder link
    },
    {
      name: "Trejhara",
      image: "./Trejhara.png", // Replace with actual image later
      link: "https://vinayk55.sg-host.com/", // Placeholder link
    },
    {
      name: "Emgee",
      image: "./Emgee.png", // Replace with actual image later
      link: "https://vinayk51.sg-host.com/", // Placeholder link
    },
    {
      name: "Council",
      image: "./Council.png", // Replace with actual image later
      link: "https://council.org/", // Placeholder link
    },
    {
      name: "Aashima Joshi",
      image: "./Aashima.png", // Replace with actual image later
      link: "https://aashimajoshi.com/", // Placeholder link
    },
    {
      name: "Myndcanvas",
      image: "./my.png", // Replace with actual image later
      link: "https://myndcanvas.in/", // Placeholder link
    },
    {
      name: "Orthofoot",
      image: "./orthofoot.png",
      link: "https://orthofootindia.com/",
    },
    {
      name: "Suits cafe",
      image: "./suits.png",
      link: "https://www.suitscafe.com/",
    },
    {
      name: "Menopose",
      image: "./menopose.png",
      link: "https://vinayk61.sg-host.com/",
    },
    {
      name: "Platform studio",
      image: "./platform.png",
      link: "https://www.theplatformstudios.com/",
    },
  ];

  return (
    <div className="bg-[#000] text-white py-[85px]">
      <div className="max-w-[1200px] max-[1200px]:max-w-[90%] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400">My Projects</h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {projects.map((project, index) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div
                key={index}
                className="group relative bg-[#1a1a1a] p-4 rounded-lg transition-transform transform hover:scale-105 duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[200px] object-cover rounded-md mb-4"
                />

                <h3 className="text-xl font-semibold text-yellow-400 mb-2 text-center">
                  {project.name}
                </h3>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-lg" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
