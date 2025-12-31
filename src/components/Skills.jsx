import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 70 },
  { name: "React", percent: 75 },
  { name: "Tailwind CSS", percent: 85 },
  { name: "Git", percent: 70 },
  { name: "API Integration", percent: 75 },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // reset when leaving
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => {
          const radius = 50;
          const circumference = 2 * Math.PI * radius;

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 group"
            >
              {/* Circle */}
              <div className="relative w-28 h-28">
                <svg className="w-full h-full -rotate-90">
                  {/* Background */}
                  <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="8"
                    fill="none"
                  />

                  {/* Progress */}
                  <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    stroke="rgb(59 130 246)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={
                      visible
                        ? circumference -
                          (circumference * skill.percent) / 100
                        : circumference
                    }
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out group-hover:stroke-indigo-400"
                  />
                </svg>

                {/* Percentage */}
                <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                  {visible ? skill.percent : 0}%
                </span>
              </div>

              {/* Skill Name */}
              <p className="text-sm font-medium group-hover:text-indigo-400 transition">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
