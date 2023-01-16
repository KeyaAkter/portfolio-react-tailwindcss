const Anchor = ({ href, text, needMargin }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`bg-cyan-400/20 py-3 px-8 border border-cyan-400 rounded-sm hover:bg-cyan-400 hover:text-gray-900 font-medium duration-500 inline-block ${
        needMargin ? "mt-3" : "mt-0"
      }`}
    >
      {text}
    </a>
  );
};

export default Anchor;
