export const NavLinks = [
  { title: "Home", url: "/" },
  { title: "About us", url: "/about" },
  { title: "Our projects", url: "/projects" },
];

export const scheduleMeeting = () => {
  const message = encodeURIComponent(
    "Hello, I'd like to schedule a meeting with your company."
  );
  const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;

  window.open(whatsappURL, "_blank");
};

export const FooterLinks = [
  { title: "About Us", url: "/about" },
  { title: "Our Projects", url: "/projects" },
  {
    title: "Schedule a meeting with us",
    url:
      `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=` +
      encodeURIComponent(
        "Hello, I'd like to schedule a meeting with your company."
      ),
    external: true,
  },
];

export const HomeFAQs = [
  {
    question: "Are the frames customizable?",
    answer:
      "A desktop frame is a stylish and functional way to display your favorite photos or artwork. It enhances your workspace while keeping your memories in view. Our frames come in various sizes and designs to fit any decor.",
  },
  {
    question: "What is a desktop frame?",
    answer:
      "A desktop frame is a stylish and functional way to display your favorite photos or artwork. It enhances your workspace while keeping your memories in view. Our frames come in various sizes and designs to fit any decor.",
  },
  {
    question: "How to choose a frame?",
    answer:
      "Consider the size of your space and the style of your decor. Choose a frame that complements your existing furniture and color scheme. Our selection includes modern, classic, and eclectic designs to suit every taste.",
  },
];
