import Button from "../Button";

const ContactForm = () => {
  return (
    <div className="md:max-w-[700px] max-md:py-7 md:min-w-max py-10 w-full lg:mx-auto h-full">
      <form className="min-w-full">
        <div className="grid gap-3 mt-5">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              name="fname"
              className="input"
              placeholder="First name"
            />
            <input
              type="text"
              name="lname"
              className="input"
              placeholder="Last name"
            />
          </div>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email address"
          />
          <input
            type="text"
            name="phone"
            className="input"
            placeholder="Phone number"
          />
          <textarea
            className="input"
            rows={6}
            placeholder="Tell us about your project"
            name="message"
          />
          <Button
            cta="Send message"
            className="bg-primary-100 text-white w-full myFlex text-center"
            link="/"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
