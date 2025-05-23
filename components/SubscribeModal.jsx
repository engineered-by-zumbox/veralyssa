"use client";

import { Send2 } from "iconsax-react";
import { Loader2, X } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";

const SubscribeModal = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [initialData, setInitialData] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);

  //  Fetch Newsletter Content with Proper async/await
  useEffect(() => {
    const fetchData = async () => {
      setDataLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletter-campaigns/active`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch newsletter content");
        }

        const data = await res.json();

        // Check if we received valid data
        if (!data || !data.imageUrl || !data.title) {
          throw new Error("Invalid newsletter data");
        }

        setInitialData(data);
        setError(false);
      } catch (error) {
        console.error("Error fetching newsletter content:", error);
        setError(true);
      } finally {
        setDataLoading(false);
      }
    };

    fetchData();
  }, []);

  //  Handle Modal Display Logic
  useEffect(() => {
    // Don't show modal if there's no data or an error
    if (dataLoading || error || !initialData) return;

    const isSubscribed =
      localStorage.getItem("newsletterSubscribed") === "true";
    if (isSubscribed) return;

    const lastShown = localStorage.getItem("newsletterLastShown");
    const shouldShow =
      !lastShown || Date.now() - parseInt(lastShown) > 60 * 60 * 1000;

    if (shouldShow) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("newsletterLastShown", Date.now().toString());
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [initialData, dataLoading, error]);

  // Prevent Background Scrolling
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showModal]);

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/newsletter/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) throw new Error("Subscription failed");

      setEmail("");
      setSuccess(true);
      localStorage.setItem("newsletterSubscribed", "true");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  //  Handle Modal Close
  const handleClose = () => {
    setShowModal(false);
  };

  //  Conditional Rendering
  if (!showModal || !initialData) return null;

  return (
    <main
      className="fixed top-0 h-dvh bottom-0 right-0 left-0 bg-black/70 z-[999999] animate-fadeIn"
      onClick={handleClose}
    >
      {success ? (
        <div
          className="bg-[#FCF8ED] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 myFlex flex-col gap-7 max-md:w-[95%] max-w-[519px] p-3 mx-auto md:px-5 md:pt-10 md:pb-5 rounded-3xl animate-scaleUp"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors duration-200"
          >
            <X size={24} />
          </button>
          <div className="min-h-[334px]">
            <Image
              width={350}
              height={450}
              src="/images/highfive.png"
              alt="high five"
              className="w-[320px] md:w-[400px]"
            />
          </div>

          <h1 className="!font-medium text-center">
            You Are Now A Subscriber! <br /> Thank You!
          </h1>
          <p className="md:text-xl text-center max-md:w-[80%]">
            You should receive our first newsletter soon!
          </p>
        </div>
      ) : (
        <div
          className="bg-[#FCF8ED] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex max-lg:flex-col lg:items-end gap-3 max-md:gap-7 max-md:w-[95%] max-w-[800px] p-3 mx-auto md:px-5 md:pt-10 md:pb-5 rounded-3xl animate-scaleUp"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 max-md:-top-16 max-md:bg-white right-2 md:right-4 p-2 rounded-full hover:bg-black/5 transition-colors duration-200"
          >
            <X size={24} />
          </button>

          <div className="bg-[#F5EAC866] p-2 md:p-3 rounded-2xl md:w-[628px] shadow flex max-md:flex-col gap-4 animate-fadeIn">
            {initialData && (
              <>
                <div className="basis-[40%] lg:basis-[60%] max-md:min-h-[220px]">
                  <Image
                    src={initialData.imageUrl}
                    width={500}
                    height={800}
                    alt="newsletter image"
                    className="rounded-2xl h-full w-full object-cover"
                  />
                </div>
                <div className="basis-1/2 h-full lg:basis-[40%] flex flex-col gap-2 justify-between">
                  <h2 className="text-xl font-semibold line-clamp-2 md:line-clamp-3">
                    {initialData.title}
                  </h2>
                  <p className="text-[#333333] line-clamp-3 md:line-clamp-[8]">
                    {initialData.message}
                  </p>
                  <p className="font-semibold text-sm">
                    Interested in more content like this? Sign up for our
                    newsletters today!
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="lg:pl-3 max-md:pr-7">
            <form onSubmit={handleSubmit}>
              <h1 className="!font-medium">
                Sign up for our <br /> Newsletter{" "}
              </h1>
              <div className="w-[300px] lg:w-[250px] border border-[#745B00] mt-4 h-[50px] pl-3 pr-1 myFlex gap-3 justify-between rounded-[14px] bg-white hover:border-black transition-colors duration-200">
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
                    <Loader2
                      size="24"
                      className="animate-spin"
                      color="#ffffff"
                    />
                  ) : (
                    <Send2 size="24" color="#ffffff" variant="Bold" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default SubscribeModal;
