const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-l from-blue-500 backdrop-blur bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">Rohan.dev</h1>
        <ul className="flex gap-6 text-sm mr-6">
          <li className=" font-semibold mr-3 hover:bg-white rounded p-2  hover:shadow transition-transform duration-300 ease-out hover:scale-110">Home</li>
          <li className=" font-semibold mr-3 hover:bg-white rounded p-2  hover:shadow transition-transform duration-300 ease-out hover:scale-110">About</li>
          <li className=" font-semibold mr-3 hover:bg-white rounded p-2  hover:shadow transition-transform duration-300 ease-out hover:scale-110">Projects</li>
          <li className=" font-semibold mr-3 hover:bg-white rounded p-2  hover:shadow transition-transform duration-300 ease-out hover:scale-110">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
