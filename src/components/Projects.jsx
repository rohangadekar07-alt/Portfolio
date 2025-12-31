import { useState } from "react";

const projects = [
  {
    title: "Hotel Management System",
    description: "A modern hotel management app built with React and Tailwind CSS.",
    video:
      "https://9f3ragwb2jgeh5pt.public.blob.vercel-storage.com/WhatsApp%20Video%202025-12-31%20at%201.41.23%20PM.mp4",
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce Website",
    description: "E-commerce platform with cart, checkout, and responsive UI.",
    video:
      "https://9f3ragwb2jgeh5pt.public.blob.vercel-storage.com/WhatsApp%20Video%202025-12-31%20at%201.41.23%20PM.mp4",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio to showcase projects and skills.",
    video:
      "https://9f3ragwb2jgeh5pt.public.blob.vercel-storage.com/WhatsApp%20Video%202025-12-31%20at%201.41.23%20PM.mp4",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  const [videoError, setVideoError] = useState({});

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition"
          >
            {/* Video Preview */}
            <div className="relative h-44 overflow-hidden">
              {videoError[index] ? (
                <div className="w-full h-full flex items-center justify-center bg-black/60 text-sm text-gray-300">
                  <div className="text-center">
                    <p className="mb-2">Preview unavailable</p>
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-indigo-300"
                    >
                      Open video in new tab
                    </a>
                  </div>
                </div>
              ) : (
                <video
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                  onMouseEnter={async (e) => {
                    try {
                      await e.currentTarget.play();
                    } catch (err) {
                      setVideoError((s) => ({ ...s, [index]: true }));
                    }
                  }}
                  onMouseLeave={(e) => {
                    try {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    } catch (err) {
                      /* ignore */
                    }
                  }}
                  onError={() => setVideoError((s) => ({ ...s, [index]: true }))}
                >
                  <source
                    src={encodeURI(project.video)}
                    type={project.video?.toLowerCase().endsWith(".webm") ? "video/webm" : "video/mp4"}
                  />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-sm font-semibold">Hover to Preview</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>

              {/* Buttons */}
              <div className="flex gap-4 text-sm">
                <a href={project.live} target="_blank" className="px-4 py-1 rounded bg-indigo-500/20 hover:bg-indigo-500/40 transition">Live</a>
                <a href={project.github} target="_blank" className="px-4 py-1 rounded bg-white/10 hover:bg-white/20 transition">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
