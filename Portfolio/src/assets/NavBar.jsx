import { Link } from "react-router-dom";
import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen(!isOpen);
};

function NavBar() {
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

        <ul>
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
