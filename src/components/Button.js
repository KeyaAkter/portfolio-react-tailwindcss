import { HashLink } from "react-router-hash-link";

const Button = ({ to, text }) => {
  return (
    <HashLink
      smooth
      to={`#${to}`}
      className="bg-cyan-400/20 py-3 px-8 border border-cyan-400 rounded-sm hover:bg-cyan-400 hover:text-gray-900 font-medium duration-500 mt-3"
    >
      {text}
    </HashLink>
  );
};

export default Button;
