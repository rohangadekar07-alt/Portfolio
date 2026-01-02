import { Award, Briefcase, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Full Stack Web Development",
    org: "Kiran Academy",
    date: "Aug 2025",
    description:
      "Comprehensive course covering modern web development technologies and frameworks.",
    skills: ["Angular", "Java", "MySql", "Springboot", "JavaScript"],
    icon: <Award className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600" />,
    link: "#",
  },
  {
    title: "Internship Completion Letter",
    org: "Sumago Infotech",
    date: "July 2023",
    description:
      "Advanced training on integrating AI tools and services into web applications.",
    skills: ["AI Integration", "API Development", "Machine Learning", "Python"],
    icon: <Briefcase className="w-6 h-6 font-gradient-to-r from-blue-500 to-purple-600" />,
    link: "#",
  },
];

const Certifications = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Glass Container */}
      <div
        className="bg-white/5 backdrop-blur p-10 rounded-2xl border border-white/10"
        style={{
          border: "2px solid ",
          borderImage: "linear-gradient(to right, #60a5fa, #a855f7) 1"
        }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and skill development through various courses
            and certifications
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 hover:scale-[1.02] transition hover:border-blue-400 hover:border-1"
            >
              {/* Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 ">
                    {item.org}
                  </p>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6">
                {item.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <p className="text-white font-medium mb-3">
                  Skills Covered:
                </p>
                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-sm rounded-full backdrop-blur-xl border border-bg-gradient-to-r from-blue-500 to-purple-600  bg-gradient-to-r from-blue-500 to-purple-600 bg-yellow-500/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradiant-to-r  hover:text-gradient-to-r from-blue-500 transition"
              >
                <ExternalLink size={16} />
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
