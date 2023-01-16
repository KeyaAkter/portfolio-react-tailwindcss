import SectionTitle from "./SectionTitle";
import Project from "./Project";

const data = [
  {
    id: 1,
    title: "Perrisys Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    img: "https://images.pexels.com/photos/3319333/pexels-photo-3319333.jpeg?auto=compress&cs=tinysrgb&w=1600",
    tools: ["React", "Redux", "Tailwind CSS", "Express"],
    client: "https://www.google.com",
    server: "https://www.google.com",
    live: "https://www.google.com",
  },
  {
    id: 2,
    title: "Perrisys Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    img: "https://images.pexels.com/photos/3724836/pexels-photo-3724836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tools: ["React", "Redux", "Tailwind CSS", "Express"],
    client: "https://www.google.com",
    live: "https://www.google.com",
  },
  {
    id: 3,
    title: "Perrisys Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    img: "https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tools: ["React", "Redux", "Tailwind CSS", "Express"],
    client: "https://www.google.com",
    live: "https://www.google.com",
  },
  {
    id: 4,
    title: "Perrisys Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    img: "https://images.pexels.com/photos/458381/pexels-photo-458381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tools: ["React", "Redux", "Tailwind CSS", "Express"],
    client: "https://www.google.com",
    live: "https://www.google.com",
  },
  {
    id: 5,
    title: "Perrisys Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    img: "https://images.pexels.com/photos/219552/pexels-photo-219552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tools: ["React", "Redux", "Tailwind CSS", "Express"],
    client: "https://www.google.com",
    live: "https://www.google.com",
  },
  {
    id: 6,
    title: "Perrisys Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    img: "https://images.pexels.com/photos/1190446/pexels-photo-1190446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tools: ["React", "Redux", "Tailwind CSS", "Express"],
    client: "https://www.google.com",
    live: "https://www.google.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects container mx-auto py-10">
      <SectionTitle title="Projects" />
      <div className="projects-wrapper grid grid-cols-3 gap-10 justify-center items-center">
        {data.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
