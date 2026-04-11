import { useState } from "react";

export const SendMe = () => {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    email: "",
    message: "",
  });

  //   send whatsapp
  const sendFormToWhatsApp = () => {
    let phoneNumber = "+2348055742292";

    let firstname = inputValues.firstname;
    let email = inputValues.email;
    let message = inputValues.message;

    let url =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      "*Name :* " +
      firstname +
      "%0a" +
      "*Email :* " +
      email +
      "%0a" +
      "*Message :* " +
      message +
      "%0a%0a";

    window.open(url, "_blank").focus();
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    // reset input values after form submission...
    setInputValues({
      firstname: "",
      email: "",
      message: "",
    });
    sendFormToWhatsApp();
    // alert("Message Successfully Sent");
  };

  const handleInputChange = (identifier, event) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
  };

  const inputStyles = `
    w-full 
    p-4 
    rounded-xl 
    border-none
    outline-none
    border-gray-200 
    dark:border-gray-700
    bg-white
    dark:bg-black/30
    backdrop-blur-sm
    text-gray-900 
    dark:text-white
    placeholder-black/50
    dark:placeholder-white/30
    focus:outline-none 
    focus:border-black
    dark:focus:border-white
    focus:ring
    focus:ring-black/30
    dark:focus:ring-white/30
    transition-all
    duration-300
    hover:border-gray-300
    dark:hover:border-gray-600
  `;

  return (
    <>
      <form className="mt-10 text-center" onSubmit={handleSubmitForm}>
        <section>
          <div className="my-4">
            <input
              className={inputStyles}
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First name"
              required
              value={inputValues.firstname}
              onChange={(event) => handleInputChange("firstname", event)}
            />
          </div>

          <div className="my-4">
            <input
              className={inputStyles}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              value={inputValues.email}
              onChange={(event) => handleInputChange("email", event)}
            />
          </div>

          <div>
            <textarea
              className={inputStyles}
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              required
              value={inputValues.message}
              onChange={(event) => handleInputChange("message", event)}
            />
          </div>
        </section>
        <button
          className="bg-white px-4 py-2 rounded-xl mt-4 text-md capitalize tracking-wide dark:bg-neutral-900 cursor-pointer"
          type="submit"
        >
          submit
        </button>
      </form>
    </>
  );
};
