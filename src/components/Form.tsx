import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import axios, { AxiosError } from "axios";

const Form = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: import.meta.env.VITE_ACCESS_TOKEN,
  });

  // change type of the form data
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // const data = JSON.stringify(formData);

    try {
      const res = await axios.post(
        "https://api.web3forms.com/submit",
        formData
      );

      if (res.status === 200) {
        setSuccess(true);
        setFormData({
          ...formData,
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Unexpected API response status::", res.status);
      }
    } catch (err) {
      console.error("Error Message:: ", (err as AxiosError).message);
    }
  };

  return (
    <motion.form
      action=""
      ref={ref}
      className="contactForm"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={handleSubmit}
    >
      <h4 className="contentTitle">Message Me</h4>
      <div
        className="col-12 col-md-6 formGroup"
        style={{ display: "inline-block" }}
      >
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.name}
          id="contactName"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div
        className="col-12 col-md-6 formGroup"
        style={{ display: "inline-block" }}
      >
        <input
          type="email"
          className="formControl"
          onChange={handleChange}
          value={formData.email}
          id="contactEmail"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows={5}
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn">
          {success ? "Message Sent" : "Send Message"}
        </button>
      </div>
    </motion.form>
  );
};

export default Form;
