import { useState } from "react";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLaoding] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLaoding(true);

    try {
      // Send Email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      // Clear form after submission
      setFormData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send the message. Try WhatsApp instead!");

      // Optional: Fallback to WhatsApp
      const message = `Hello, I am ${formData.fname} ${formData.lname}.
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");
    } finally {
      setIsLaoding(false);
    }
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
            disabled={isLoading}
            className="bg-primary text-white w-full myFlex text-center"
          >
            {isLoading ? "Sending..." : "Send message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
