import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <ul className="h-6 bg-emerald-500/70 flex items-center justify-center text-xs md:text-sm gap-3 md:gap-12 w-screen">
          <li className="text-white  hover:bg-emerald-800 h-6 w-19 transition-all hover:duration-300 text-center">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white  hover:bg-emerald-800 h-6 w-19 transition-all hover:duration-300 text-center">
            <Link to="/Projects">Portfolio</Link>
          </li>
          <li className="text-white  hover:bg-emerald-800 h-6 w-19 transition-all hover:duration-300 text-center">
            <Link to="/About">About</Link>
          </li>
          <li className="text-white hover:bg-emerald-800 h-6 w-19 transition-all hover:duration-300 text-center">
            <Link to="/Skills">Skills</Link>
          </li>
          <li className="text-white hover:bg-emerald-800 h-6 w-19 transition-all hover:duration-300 text-center">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
