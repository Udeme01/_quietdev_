import { useState } from "react";

export const SendMe = () => {
  const [inputValues, setInputValues] = useState({
    firstname: "",
    email: "",
    message: "",
  });

  //   send whatsapp
  const sendFormToWhatsApp = () => {
    let phoneNumber = "+2347036055083";

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

  return (
    <>
      <form className="mt-10 text-center" onSubmit={handleSubmitForm}>
        <div>
          <div className="my-4">
            <input
              className="w-full p-2"
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
              className="w-full p-2"
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
              className="w-full p-2"
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              required
              value={inputValues.message}
              onChange={(event) => handleInputChange("message", event)}
            />
          </div>
        </div>
        <button
          className="bg-white px-4 py-2 mt-4 text-xl uppercase dark:bg-neutral-900"
          type="submit"
        >
          submit
        </button>
      </form>
    </>
  );
};
