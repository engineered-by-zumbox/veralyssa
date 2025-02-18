export const NavLinks = [
  { title: "Home", url: "/" },
  { title: "Our projects", url: "/projects" },
  { title: "Newsletters", url: "/newsletter" },
];

export const scheduleMeeting = () => {
  const message = encodeURIComponent(
    "Hello, I'd like to schedule a meeting with your company."
  );
  const whatsappURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;

  window.open(whatsappURL, "_blank");
};

export const FooterLinks = [
  { title: "Our Projects", url: "/projects" },
  { title: "Newsletters", url: "/newsletter" },
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

export const Projects = [
  {
    imageUrl: "/images/vera-hero1.jpg",
    name: "Modern Living Space",
    category: "Residential",
    description:
      "Contemporary design with premium finishes and smart home integration",
    link: "/project",
  },
  {
    imageUrl: "/images/project2.jpg",
    name: "Luxury Kitchen",
    category: "Luxury Interiors",
    description:
      "State-of-the-art kitchen with custom cabinetry and high-end appliances",
    link: "/project",
  },
  {
    imageUrl: "/images/project1.jpg",
    name: "Premium Bathroom",
    category: "Luxury Interiors",
    description:
      "Spa-inspired bathroom with marble finishes and modern fixtures",
    link: "/project",
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

export const Portfolio = [
  {
    title: "Residential Architecture",
    desc: "Discover our portfolio of luxury construction projects, where attention to detail meets uncompromising quality.",
    projects: [
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port1.jpeg",
        link: "/portfolio",
      },
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port2.jpeg",
        link: "/portfolio",
      },
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port3.jpeg",
        link: "/portfolio",
      },
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port4.jpeg",
        link: "/portfolio",
      },
    ],
  },
  {
    title: "Commercial Architecture",
    desc: "Discover our portfolio of luxury construction projects, where attention to detail meets uncompromising quality.",
    projects: [
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port1.jpeg",
        link: "/portfolio",
      },
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port2.jpeg",
        link: "/portfolio",
      },
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port3.jpeg",
        link: "/portfolio",
      },
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port4.jpeg",
        link: "/portfolio",
      },
    ],
  },
  {
    title: "Landscape Design",
    desc: "Discover our portfolio of luxury construction projects, where attention to detail meets uncompromising quality.",
    projects: [
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port1.jpeg",
        link: "/portfolio",
      },
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port2.jpeg",
        link: "/portfolio",
      },
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port3.jpeg",
        link: "/portfolio",
      },
      {
        title: "A Cozy Two-Bedroom Condo with a Stunning View",
        imageUrl: "/images/port4.jpeg",
        link: "/portfolio",
      },
    ],
  },
];

export const LatestNews = [
  {
    title: "A Studio Apartment",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer",
    imgUrl: "/images/port4.jpeg",
    date: "October 10",
  },
  {
    title: "A Studio Apartment",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer",
    imgUrl: "/images/port4.jpeg",
    date: "October 10",
  },
  {
    title: "A Studio Apartment",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer",
    imgUrl: "/images/port4.jpeg",
    date: "October 10",
  },
];

export const AllNews = [
  {
    title: "Lorem ipsum dolor sit amet consectetur. Imperdiet morbi morbi ",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer",
    imgUrl: "/images/port4.jpeg",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Imperdiet morbi morbi ",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer",
    imgUrl: "/images/port4.jpeg",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Imperdiet morbi morbi ",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer",
    imgUrl: "/images/port4.jpeg",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Imperdiet morbi morbi ",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer",
    imgUrl: "/images/port4.jpeg",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Imperdiet morbi morbi ",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer",
    imgUrl: "/images/port4.jpeg",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur. Imperdiet morbi morbi ",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer",
    imgUrl: "/images/port4.jpeg",
  },
];

export const HighLight = [
  {
    title: "A Three Bedroom Apartment",
    desc: "Lorem ipsum dolor sit amet consectetur. Potenti commodo amet cursus amet tellus sem. Cursus sit ultrices leo pretium pellentesque felis phasellus. Eu purus tempus lectus diam cras. Eget venenatis venenatis tristique feugiat duis vestibulum pharetra vestibulum. Lectus aliquet egestas porttitor velit integer pulvinar. Dignissim vitae mauris mi turpis et. Nisl nam at tempor velit aliquet posuere. Diam tristique amet orci non. Libero nulla molestie volutpat netus.",
    imgUrl: "/images/port4.jpeg",
    date: "July 29",
  },
  {
    title: "A Three Bedroom Apartment",
    desc: "Lorem ipsum dolor sit amet consectetur. Potenti commodo amet cursus amet tellus sem. Cursus sit ultrices leo pretium pellentesque felis phasellus. Eu purus tempus lectus diam cras. Eget venenatis venenatis tristique feugiat duis vestibulum pharetra vestibulum. Lectus aliquet egestas porttitor velit integer pulvinar. Dignissim vitae mauris mi turpis et. Nisl nam at tempor velit aliquet posuere. Diam tristique amet orci non. Libero nulla molestie volutpat netus.",
    imgUrl: "/images/port1.jpeg",
    date: "July 29",
  },
  {
    title: "A Three Bedroom Apartment",
    desc: "Lorem ipsum dolor sit amet consectetur. Potenti commodo amet cursus amet tellus sem. Cursus sit ultrices leo pretium pellentesque felis phasellus. Eu purus tempus lectus diam cras. Eget venenatis venenatis tristique feugiat duis vestibulum pharetra vestibulum. Lectus aliquet egestas porttitor velit integer pulvinar. Dignissim vitae mauris mi turpis et. Nisl nam at tempor velit aliquet posuere. Diam tristique amet orci non. Libero nulla molestie volutpat netus.",
    imgUrl: "/images/port2.jpeg",
    date: "July 29",
  },
  {
    title: "A Three Bedroom Apartment",
    desc: "Lorem ipsum dolor sit amet consectetur. Potenti commodo amet cursus amet tellus sem. Cursus sit ultrices leo pretium pellentesque felis phasellus. Eu purus tempus lectus diam cras. Eget venenatis venenatis tristique feugiat duis vestibulum pharetra vestibulum. Lectus aliquet egestas porttitor velit integer pulvinar. Dignissim vitae mauris mi turpis et. Nisl nam at tempor velit aliquet posuere. Diam tristique amet orci non. Libero nulla molestie volutpat netus.",
    imgUrl: "/images/port3.jpeg",
    date: "July 29",
  },
];
