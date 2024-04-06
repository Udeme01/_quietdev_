import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutMe = () => {
  return (
    <>
      <Header />
      <section className="container mx-auto px-4 py-16 pb-0 dark:text-neutral-100">
        <h1 className="text-center font-regular font-inter text-2xl mb-3 md:text-4xl">
          LEAVE BEHIND THE WORLD OF MAKE-BELIEVE, WELCOME TO MY CORNER OF THE
          WEB, WHERE CODE MEETS CREATIVITY!
        </h1>
        <p className="text-center max-w-screen-md mx-auto mt-2 leading-7 font-light md:text-lg md:leading-8">
          I&apos;m Udeme Emmanuel, a passionate frontend developer with a keen
          eye for design and a committment to excellence. I specialize in
          seamless and exceptional user experiences that captivate audiences and
          elevate brands.
        </p>
        <div className="mt-4">
          <video autoPlay muted loop controls="none" className="w-screen">
            <source src="./videos/coder-03.mp4" />
          </video>
        </div>

        <section className="mt-24 bg-gray-200 p-4 dark:bg-neutral-800">
          <div className="py-10 pt-0 lg:flex">
            <img
              className="exp lg:w-1/2 lg:py-8 lg:px-4"
              src="./projectImg/exp.jpg"
              alt="image"
            />
            <div className="lg:flex lg:flex-col lg:align-center lg:justify-center lg:py-8 lg:px-4">
              <h1 className="font-regular text-2xl mt-3 md:text-4xl">
                ARMED WITH ALMOST 2 YEARS OF EXPERIENCE, MY FINGER IS ON THE
                TRIGGER
              </h1>
              <p className="max-w-screen-md mx-auto mt-2 leading-7 font-light md:text-lg md:leading-8">
                Having had the privilege of working on a diverse array of
                projects, from corporate websites to e-commerce platforms and
                beyond. Each project has presented it&apos;s own set of
                challenges and opportunities for growth, allowing me to develop
                a well rounded skill and a keen understanding of what it takes
                to create exceptional user experience.
              </p>
            </div>
          </div>

          <div className="lg:flex">
            <img
              className="exp lg:w-1/2 lg:py-8 lg:px-4"
              src="./projectImg/res.jpg"
              alt="image"
            />
            <div className="lg:flex lg:flex-col lg:align-center lg:justify-center lg:py-8 lg:px-4 lg:order-first">
              <h1 className="font-regular text-2xl mt-3 md:text-4xl">
                <span className="text-xs block bg-white w-fit p-1 dark:bg-neutral-900">
                  RESPONSIVE DESIGN
                </span>
                I DELIVER EXCELLENCE ACROSS DEVICES WITH RESPONSIVE DESIGNS
              </h1>
              <p className="max-w-screen-md mx-auto mt-2 leading-7 font-light md:text-lg md:leading-8">
                A responsive website not only enhances usability but also
                fosters greater user engagement by providing a seamless
                experience regardless of the devices being used. This is where I
                craft designs that truly leave an impact. I achieve this by
                employing fluid grids, flexible images, and media queries to
                ensure that every element of a website responds gracefully to
                different screen sizes.
              </p>
            </div>
          </div>

          <div className="py-10 pb-0 lg:flex">
            <img
              className="exp lg:w-1/2 lg:py-8 lg:px-4"
              src="./projectImg/help.jpg"
              alt="image"
            />
            <div className="lg:flex lg:flex-col lg:align-center lg:justify-center lg:w-full">
              <h1 className="text-center font-regular text-2xl mt-3 md:text-4xl">
                SO, HOW CAN I HELP?
              </h1>
              <form className="text-center">
                <div>
                  <div className="my-4">
                    <input
                      className="w-full p-2"
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="my-4">
                    <input
                      className="w-full p-2"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-full p-2"
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Message"
                      required
                    />
                  </div>
                </div>
                <button
                  className="bg-white px-4 py-2 uppercase dark:bg-neutral-900"
                  type="submit"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default AboutMe;
