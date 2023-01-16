const Project = ({ project }) => {
  return (
    <div className="project flex flex-col gap-5 bg-cyan-700/10 overflow-hidden rounded shadow-2xl border border-cyan-700/30 group">
      <div className="project-img w-full h-[20rem] overflow-hidden">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 duration-500"
        />
      </div>
      <div className="text-contents flex flex-col gap-3 px-5 mb-10">
        <h3 className="text-3xl">{project.title}</h3>
        <p>{project.description}</p>
        <p className="text-gray-500 flex gap-5">
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </p>
        <div className="project-links flex gap-5 text-cyan-400">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="link-item"
          >
            Live Site
          </a>
          <a
            href={project.client}
            target="_blank"
            rel="noreferrer"
            className="link-item"
          >
            Front-End Code
          </a>
          {project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noreferrer"
              className="link-item"
            >
              Back-End Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
