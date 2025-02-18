"use client";
import { Send2 } from "iconsax-react";
import { Loader2, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const SubscribeModal = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if 24 hours have passed since the last display
    const lastShown = localStorage.getItem("newsletterLastShown");
    const shouldShow =
      !lastShown || Date.now() - parseInt(lastShown) > 24 * 60 * 60 * 1000;

    if (shouldShow) {
      // Add a slight delay before showing the modal
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("newsletterLastShown", Date.now().toString());
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletter/subscribe`,
        {
          method: "POST",
          body: JSON.stringify({ email }),
        }
      );
      if (!response.ok) {
        throw new Error("Subscription failed");
      }
      setEmail("");
      toast.success("Thanks for subscribing! Stay tuned for updates. 🚀");
      setShowModal(false);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <main
      className="fixed top-0 h-dvh bottom-0 right-0 left-0 bg-black/20 z-[999999] animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="bg-[#FCF8ED] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex max-lg:flex-col lg:items-end gap-7 max-md:w-[95%] max-w-[1167px] p-3 mx-auto md:px-5 md:pt-10 md:pb-5 rounded-3xl animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 max-md:hidden right-4 p-2 rounded-full hover:bg-black/5 transition-colors duration-200"
        >
          <X size={24} />
        </button>

        <div className="bg-[#F5EAC866] p-2 md:p-3 rounded-2xl md:h-[400px] lg:h-[580px] md:w-[628px] shadow flex max-md:flex-col gap-4 animate-fadeIn">
          <div className="basis-1/2 lg:basis-[60%]">
            <img
              src="/images/port1.jpeg"
              alt="newsletter image"
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
          <div className="basis-1/2 lg:basis-[40%] flex flex-col justify-between">
            <p className="text-[#333333] line-clamp-5 md:line-clamp-[10] lg:line-clamp-[16]">
              Lorem ipsum dolor sit amet consectetur. Tellus nibh mattis
              volutpat tincidunt faucibus mi interdum integer est. Arcu amet
              ligula vulputate adipiscing ac quis. Tellus ornare lectus risus
              tincidunt turpis id nunc proin. Euismod ornare ullamcorper eget mi
              egestas venenatis vel eget.
              <br />
              Aliquam amet vitae phasellus nisl adipiscing. Egestas in nullam eu
              id sed egestas ante ultricies. Metus et maecenas augue nibh vel
              proin pretium integer.
            </p>
            <br />
            <p className="font-semibold">
              Interested in more contents like this? Sign up for our newsletters
              today!
            </p>
          </div>
        </div>
        <div className="lg:pl-3 pr-7">
          <form onSubmit={handleSubmit}>
            <h1 className="!font-medium">
              Sign up for our <br /> Newsletter{" "}
            </h1>
            <div className="w-[300px] border border-[#745B00] mt-4 h-[50px] pl-3 pr-1 myFlex gap-3 justify-between rounded-[14px] bg-white hover:border-black transition-colors duration-200">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email address"
                className="w-full focus:outline-none placeholder:max-md:text-sm placeholder:text-black placeholder:font-medium"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-black p-2 rounded-xl myFlex justify-between hover:bg-black/80 transition-colors duration-200"
              >
                {loading ? (
                  <Loader2 size="24" className="animate-spin" color="#ffffff" />
                ) : (
                  <Send2 size="24" color="#ffffff" variant="Bold" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SubscribeModal;
