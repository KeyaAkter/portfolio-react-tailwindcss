import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer  py-20 text-center bg-gray-900 text-gray-500 border-t border-cyan-700/30">
      <p>
        Designed & built by{" "}
        <HashLink smooth to="#home" className="link-item text-cyan-400 ">
          Tumpa Rahman
        </HashLink>{" "}
      </p>
    </footer>
  );
};

export default Footer;
