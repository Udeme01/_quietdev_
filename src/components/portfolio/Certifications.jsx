import { CERTIFICATIONS } from "../../data";

const Certificates = () => {
  return (
    <>
      <section className="lg:container lg:mx-auto mt-12 font-winkySans">
        <h1 className="text-3xl text-left font-medium m-4 mt-8 text-red-400 tracking-wide">
          Certifications
        </h1>
        <div className="tracking-wide lg:grid lg:grid-cols-3">
          {CERTIFICATIONS.map((certificates) => {
            const { id, href, certImg, title, description } = certificates;
            return (
              <a key={id} href={href} target="_blank">
                <div className="m-4 p-2 flex justify-start gap-4 bg-gray-100 text-black shadow-md dark:bg-neutral-800 dark:text-neutral-100">
                  <img
                    src={certImg}
                    alt="logo"
                    className="rounded-full w-24 border p-px bg-white border-black"
                  />
                  <div className="flex justify-center align-center flex-col w-full">
                    <h2 className="font-regular text-lg">{title}</h2>
                    <p className="font-light text-md">{description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Certificates;
