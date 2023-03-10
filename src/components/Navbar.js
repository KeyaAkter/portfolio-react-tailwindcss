import { HashLink } from "react-router-hash-link";
import Anchor from "../components/Anchor";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-center items-center bg-gray-900/80 backdrop-blur-xl shadow-md h-20 fixed left-0 top-0 right-0 z-50 border-b border-cyan-700/30 ">
      <div className="navbar-content container mx-auto  flex  justify-between items-center">
        <HashLink
          smooth
          to="#home"
          className="logo font-medium text-cyan-400 hover:text-gray-300 duration-500"
        >
          tumpa_
        </HashLink>
        <div className="links flex gap-10">
          <HashLink
            smooth
            to="#home"
            className="link-item hover:text-cyan-400 duration-500 group"
          >
            <span className="text-gray-500 group-hover:text-cyan-400 duration-500">
              i.
            </span>{" "}
            Home
          </HashLink>
          <HashLink
            smooth
            to="#about"
            className="link-item hover:text-cyan-400 duration-500 group"
          >
            <span className="text-gray-500 group-hover:text-cyan-400 duration-500">
              ii.
            </span>{" "}
            About
          </HashLink>
          <HashLink
            smooth
            to="#skills"
            className="link-item hover:text-cyan-400 duration-500 group"
          >
            <span className="text-gray-500 group-hover:text-cyan-400 duration-500">
              iii.
            </span>{" "}
            Skills
          </HashLink>
          <HashLink
            smooth
            to="#projects"
            className="link-item hover:text-cyan-400 duration-500 group"
          >
            <span className="text-gray-500 group-hover:text-cyan-400 duration-500">
              iv.
            </span>{" "}
            Projects
          </HashLink>
          <HashLink
            smooth
            to="#contact"
            className="link-item hover:text-cyan-400 duration-500 group"
          >
            <span className="text-gray-500 group-hover:text-cyan-400 duration-500">
              v.
            </span>{" "}
            Contact
          </HashLink>
        </div>
        <Anchor href="https://www.google.com" text="R??sum??" />
      </div>
    </nav>
  );
};

export default Navbar;
