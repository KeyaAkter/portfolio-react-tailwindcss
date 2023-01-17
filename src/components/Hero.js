import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="hero container  mx-auto h-screen w-full flex  gap-10 pt-40 pb-20 ">
      <div className="hero-left mt-14 flex-1 flex flex-col gap-3 items-start ">
        <span>Hello, I'm</span>
        <h1 className="text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-cyan-700">
          Tumpa Rahman.
        </h1>
        <h2 className="text-6xl bg-clip-text text-transparent bg-gradient-to-br from-gray-500 to-gray-800">
          I build interactive things for the web.
        </h2>
        <p className="w-4/5">
          I'm a <span className="text-cyan-400">MERN Stack Developer</span>{" "}
          specializing in developing exceptional and unique projects. Currently,
          I'm focused on building interactive web applications.
        </p>
        <Button to="contact" text="Let's talk" />
      </div>
      <div className="hero-right flex-1 relative">
        <div className="hero-img w-3/5 h-4/5 absolute top-0 right-0 z-10 rounded-sm shadow-2xl group">
          <img
            src="https://images.pexels.com/photos/14577737/pexels-photo-14577737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="A Woman in Beige Clothes Smiling at the Camera"
            className="w-full h-full object-cover grayscale brightness-75 rounded-sm group-hover:grayscale-0 group-hover:brightness-100 duration-500"
          />
        </div>
        <span className="absolute top-10 right-10 w-3/5 h-4/5 border border-cyan-700 bg-cyan-700/10 rounded-sm"></span>
      </div>
    </section>
  );
};

export default Hero;
