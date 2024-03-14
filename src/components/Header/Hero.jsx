// import profile from "../../../src/img/logo.png";

const Hero = () => {
  return (
    <>
      <section className="leading-6 font-inter font-regular">
        <div className="px-4 py-16 text-left sm:bg-slate-400 md:bg-slate-700 lg:bg-red-300 lg:container lg:mx-auto">
          <p className="p-2 text-sm bg-slate-200 mb-2 w-fit">
            Frontend Developer | Web Designer
          </p>
          <h1 className="text-3xl mb-3">Frontend Developer and Web Designer</h1>
          <p className="lg:w-1/2 leading-6">
            I am Udeme Emmanuel, your go-to Frontend Developer, passionate about
            crafting user-friendly interfaces that captivate and engage. With a
            knack for translating concepts into pixel-perfect designs, I bring
            concepts to life with sleek designs and smooth interactions.
            Let&apos;s work together to create interfaces that prioritize user
            satisfaction and make a lasting impact.Elevate your online presence
            with seamless, responsive web solutions tailored to your unique
            needs.
          </p>
          <button
            type="button"
            className="border border-black py-2 px-4 mt-4 bg-slate-100 hover:bg-slate-200 hover:border-none"
          >
            Hire Me
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
