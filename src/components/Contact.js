import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="contact container mx-auto py-20 ">
      <SectionTitle title="Contact" />
      <div className="contact-wrapper flex gap-10 w-full h-full">
        <div className="contact-left flex-1 bg-cyan-700/10 rounded-sm p-10 shadow-2xl border border-cyan-700/30 flex flex-col gap-10 items-start">
          <h3 className="text-3xl text-cyan-400">Send me a message</h3>
          <form className="form flex flex-col gap-5 w-full">
            <div className="form-control flex flex-col gap-1 w-full">
              <label htmlFor="full-name">Name</label>
              <input
                className=" py-5 px-10 rounded-sm  border border-cyan-700/30 bg-cyan-700/5 outline-none focus:border-cyan-700 duration-500"
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Tumpa Rahman"
                required
              />
            </div>

            <div className="form-control flex flex-col gap-1">
              <label htmlFor="email">Email address</label>
              <input
                className=" py-5 px-10 rounded-sm  border border-cyan-700/30 bg-cyan-700/5  outline-none focus:border-cyan-700 duration-500"
                type="email"
                id="email"
                name="email"
                placeholder="hello@example.com"
                required
              />
            </div>

            <div className="form-control flex flex-col gap-1">
              <label htmlFor="message">Your Message</label>
              <textarea
                className="resize-none py-5 px-10 rounded-sm border border-cyan-700/30 bg-cyan-700/5   outline-none focus:border-cyan-700 duration-500"
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
                placeholder="Write your message..."
              ></textarea>
            </div>

            <input
              type="submit"
              value="Send message"
              className="bg-cyan-400/20 py-3 px-8 border border-cyan-400 rounded-sm hover:bg-cyan-400 hover:text-gray-900 font-medium duration-500 inline-block mt-5"
            />
          </form>
        </div>
        <div className="contact-right flex-1"></div>
      </div>
    </section>
  );
};

export default Contact;
