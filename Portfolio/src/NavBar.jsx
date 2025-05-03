import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav>
        <button onClick={() => setIsOpen(!isOpen)}>
          {
            <img
              src="/images/homemadeburger.svg"
              alt="menu"
              className="w-8 h-8"
            />
          }
          Menu
        </button>

        <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-emerald-400 my-8 uppercase">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b border-emerald-400 my-8 uppercase">
            <Link to="/Projects">Portfolio</Link>
          </li>
          <li className="border-b border-emerald-400 my-8 uppercase">
            <Link to="/About">About</Link>
          </li>
          <li className="border-b border-emerald-400 my-8 uppercase">
            <Link to="/Skills">Skills</Link>
          </li>
          <li className="border-b border-emerald-400 my-8 uppercase">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
