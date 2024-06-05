import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const nameValue = nameRef.current ? nameRef.current.value : "";
  const emailValue = emailRef.current ? emailRef.current.value : "";
  const subjectValue = subjectRef.current ? subjectRef.current.value : "";
  const messageValue = messageRef.current ? messageRef.current.value : "";

  const validMessage =
    nameValue !== "" &&
    emailValue !== "" &&
    subjectValue !== "" &&
    messageValue !== "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendEmail = (e: any) => {
    e.preventDefault();
    console.log("hello");

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
        {
          to_name: "Metilda",
          name,
          email,
          subject,
          message,
        },
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...");
        }
      );
  };

  const handleName = () => {
    setName(nameRef.current?.value || "");
  };
  const handleEmail = () => {
    setEmail(emailRef.current?.value || "");
  };
  const handleSubject = () => {
    setSubject(subjectRef.current?.value || "");
  };
  const handleMessage = () => {
    setMessage(messageRef.current?.value || "");
  };

  return (
    <div className="w-full flex items-center justify-center py-10">
      <form
        onSubmit={sendEmail}
        className="text-gray-400 bg-gray-700 p-8 rounded-lg opacity-60 flex flex-col items-start gap-4 animate-appear"
      >
        <div className="flex items-center justify-between w-full">
          <label htmlFor="name" className="pr-4">
            Name
          </label>
          <input
            value={name}
            onChange={handleName}
            ref={nameRef}
            type="name"
            name="name"
            className="bg-black p-2 rounded-md opacity-40 text-white w-[70%]"
            id="name"
          />
        </div>

        {/* <!-- email --> */}
        <div className="flex items-center justify-between w-full">
          <label htmlFor="email" className="pr-4">
            Email
          </label>
          <input
            value={email}
            onChange={handleEmail}
            className="bg-black p-2 rounded-md opacity-40 text-white w-[70%]"
            ref={emailRef}
            type="email"
            name="email"
            id="email"
          />
        </div>

        {/* <!-- subject --> */}
        <div className="flex items-center justify-between w-full">
          <label htmlFor="subject" className="pr-4">
            Subject
          </label>
          <input
            value={subject}
            onChange={handleSubject}
            ref={subjectRef}
            type="text"
            name="subject"
            className="bg-black p-2 rounded-md opacity-40 text-white w-[70%]"
            id="subject"
          />
        </div>

        <div className="flex items-center justify-between w-full">
          <label htmlFor="message" className="pr-4">
            Message
          </label>
          <textarea
            value={message}
            onChange={handleMessage}
            ref={messageRef}
            className="bg-black p-2 rounded-md opacity-40 text-white w-[70%]"
            id="message"
          ></textarea>
        </div>

        <button
          disabled={!validMessage}
          type="submit"
          className="bg-gray-900 p-2 rounded-md w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
