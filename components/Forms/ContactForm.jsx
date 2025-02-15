import { useState } from "react";
import { Button } from "../ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Hello, I am ${formData.fname} ${formData.lname}.
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "2349136860915";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="md:max-w-[700px] mx-auto max-md:py-7 md:min-w-max py-10 w-full lg:mx-auto h-full">
      <form className="min-w-full" onSubmit={handleSubmit}>
        <div className="grid gap-3 mt-5">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="fname"
              className="input"
              placeholder="First name"
              value={formData.fname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lname"
              className="input"
              placeholder="Last name"
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            className="input"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            className="input"
            rows={6}
            placeholder="Tell us about your project"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            className="bg-primary text-white w-full myFlex text-center"
          >
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
