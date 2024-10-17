import React from "react";

const skills = [
  { name: "HTML", level: "80%" },
  { name: "JavaScript", level: "82%" },
  { name: "CSS", level: "70%" },
  { name: "PHP", level: "66%" },
  { name: "WordPress", level: "91%" },
  { name: "jQuery", level: "50%" },
  { name: "UI/UX", level: "80%" },
  { name: "React", level: "70%" }, // Changed to 100% for demonstration
];

const SkillCircle = ({ name, level }) => {
  const [hover, setHover] = React.useState(false);

  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;
  const percentage = parseInt(level, 10);
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <div
      className="text-center p-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-2 transition-all duration-300 ease-in-out ${
          hover ? "scale-110" : "scale-100"
        }`}
      >
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#333"
            strokeWidth="3"
          ></path>
          <path
            className="circle"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#ffb400"
            strokeWidth="3"
          ></path>
          <text
            x="18"
            y="20.35"
            className="percentage"
            fill="#fff"
            fontSize="5"
            textAnchor="middle"
          >
            {level}
          </text>
        </svg>
        <span className="skill-name text-white text-sm absolute top-full w-full left-0 mt-2">
          {name}
        </span>
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <div className="bg-black pt-[40px] max-[600px]:pt-0">
      <div className="container max-w-[1200px] max-[1200px]:max-w-[90%] mx-auto px-4">
        container mx-auto px-[5%] flex flex-wrap justify-between items-center
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <SkillCircle
              key={skill.name}
              name={skill.name}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
