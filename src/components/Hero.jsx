const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Modern</span> Web Experiences
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          React Developer crafting fast, scalable & visually stunning web applications.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition">
            View Projects
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:scale-105 transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
