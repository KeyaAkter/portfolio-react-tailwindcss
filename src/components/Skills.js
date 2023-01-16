import SectionTitle from "./SectionTitle";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { BsPlayFill } from "react-icons/bs";

const data = [
  "HTML",
  "CSS",
  "Sass",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "React.js",
  "React Router",
  "Redux.js",
  "Redux Toolkit",
  "Axios",
  "GSAP",
  "Firebase",
  "Node.js",
  "Express.js",
  "MongoDB",
];

const Skills = () => {
  return (
    <section id="skills" className="skills container mx-auto py-20 ">
      <SectionTitle title="Skills" />
      <div className="skills-wrapper flex gap-20 items-center">
        <div className="skills-left flex-1 flex flex-col gap-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            similique aspernatur impedit dicta! Molestiae, quisquam corrupti
            unde nisi eos iusto, aliquam sequi inventore, deserunt accusamus ab
            aut maxime debitis praesentium.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className="skills-lists flex gap-10">
            <ul className="list-1">
              {data
                .filter((_, i) => i <= 3)
                .map((skill, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span className="text-cyan-400">
                      <BsPlayFill />
                    </span>{" "}
                    {skill}
                  </li>
                ))}
            </ul>
            <ul className="list-2">
              {data
                .filter((_, i) => i > 3)
                .filter((_, i) => i <= 3)
                .map((skill, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span className="text-cyan-400">
                      <BsPlayFill />
                    </span>{" "}
                    {skill}
                  </li>
                ))}
            </ul>
            <ul className="list-3">
              {data
                .filter((_, i) => i > 7)
                .filter((_, i) => i <= 3)
                .map((skill, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span className="text-cyan-400">
                      <BsPlayFill />
                    </span>{" "}
                    {skill}
                  </li>
                ))}
            </ul>
            <ul className="list-4">
              {data
                .filter((_, i) => i > 11)
                .map((skill, i) => (
                  <li key={i} className="flex items-center gap-1">
                    <span className="text-cyan-400">
                      <BsPlayFill />
                    </span>{" "}
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="skills-right flex-1 flex justify-between text-6xl text-cyan-400 border border-cyan-700 bg-cyan-700/10 rounded-sm py-20 px-10">
          <span>
            <SiMongodb />
          </span>
          <span>
            <SiExpress />
          </span>
          <span>
            <SiReact />
          </span>
          <span>
            <SiNodedotjs />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
