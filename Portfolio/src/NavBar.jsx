import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  return (
    <div>
      <nav>
        <ul className="h-6 bg-emerald-400/70 flex items-center justify-center text-xs md:text-sm gap-5 md:gap-12">
          <li className="text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white">
            <Link to="/Projects">Portfolio</Link>
          </li>
          <li className="text-white">
            <Link to="/About">About</Link>
          </li>
          <li className="text-white">
            <Link to="/Skills">Skills</Link>
          </li>
          <li className="text-white">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

/*      
<img
              src="/images/homemadeburger.svg"
              alt="menu"
              className="w-8 h-8"
            />
          }
          Menu


            const [isOpen, setIsOpen] = useState(false);

          */
