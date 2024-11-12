import React from "react";

const Timeline = () => {
  const data = [
    {
      period: "2023 - PRESENT",
      title: "WEB DEVELOPER — PRP WEBS",
      description:
        "Developed and launched over 15 WordPress websites, optimizing performance and functionality to meet client specifications.",
    },
    {
      period: "2022 - 2023",
      title: "INTERN — MODERN EMERGENCY SERVICES",
      description:
        "Assisted in the development and implementation of critical software solutions for emergency response services.",
    },
    {
      period: "2020 - 2023",
      title: "STUDENT — UNIVERSITY OF MAHARAJA'S COLLEGE",
      description:
        "Pursued a Bachelor’s degree in Computer Science, focusing on software development and system architecture.",
    },
    {
      period: "2020",
      title: "12TH STUDENT — SS JAIN SUBODH SCHOOL",
      description:
        "Completed senior secondary education with a focus on Mathematics, Physics, and Computer Science.",
    },
  ];

  return (
    <div className="bg-[#000] text-white py-[85px]  ">
      <div className="max-w-[1200px] max-[1200px]:max-w-[90%] mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="group bg-[#1a1a1a] hover:bg-gray-800 p-4 rounded-lg transition duration-300"
            >
              <h4 className="text-yellow-400 font-bold">{item.period}</h4>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
