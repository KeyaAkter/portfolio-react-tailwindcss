import SectionTitle from "./SectionTitle";
import Anchor from "./Anchor";

const About = () => {
  return (
    <section id="about" className="about container  mx-auto py-20">
      <SectionTitle title="About" />
      <div className="about-wrapper flex gap-10">
        <div className="about-left flex-1 relative">
          <div className="about-img w-3/5 h-full absolute top-0 left-0 z-10 rounded-sm shadow-2xl">
            <img
              src="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Woman Taking Notes"
              className="w-full h-full object-cover grayscale brightness-75 rounded-sm"
            />
          </div>
          <span className="absolute top-10 left-10 w-3/5 h-full border border-cyan-700 bg-cyan-700/10 rounded-sm"></span>
        </div>
        <div className="about-right flex-[2] flex flex-col items-start gap-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga cum
            ipsum expedita ut repellendus odit maxime quae fugiat illo,
            quibusdam recusandae enim qui temporibus perferendis facere nisi,
            molestias asperiores quas earum aliquam natus? Accusamus sint
            architecto nam temporibus perspiciatis sunt vitae obcaecati veniam
            consequuntur facilis, aspernatur voluptatibus perferendis, nobis
            natus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            magni recusandae explicabo, neque amet eos qui dolor dolorum
            consectetur officia illo numquam dicta id in. Ea eius necessitatibus
            eaque nihil eos possimus voluptas, illum rerum nisi fugiat officia
            esse debitis nemo et ipsam eum consequatur quae voluptatibus. Nam
            fuga aut adipisci! Sunt ut maxime velit maiores necessitatibus modi
            illo nesciunt provident, ullam, nostrum harum, quam ex tempora fugit
            odio. Non enim vitae possimus accusantium labore.
          </p>
          <Anchor href="https://www.google.com" text="View résumé" needMargin />
        </div>
      </div>
    </section>
  );
};

export default About;
