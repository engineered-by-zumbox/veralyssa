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

export const faqCategories = [
  {
    category: "About Veralyssa",
    faqs: [
      {
        question: "Who is Veralyssa?",
        answer:
          "Veralyssa is a premium construction, interior finishing, and beautification company specializing in luxury spaces, high-end finishing, and large-scale urban development. With over a decade of experience, we deliver bespoke construction solutions for corporate, residential, and government projects.",
      },
      {
        question: "What services does Veralyssa offer?",
        answer: (
          <>
            <p>We provide a wide range of services, including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                ✔ <span>Luxury Construction & Finishing </span>– High-end
                residential, corporate, and commercial building projects.
              </li>
              <li>
                ✔ <span>Interior Fit-Out & Renovations</span> – Bespoke interior
                designs, premium materials, and expert finishing.
              </li>
              <li>
                ✔ <span>Landscaping & Beautification</span> – Eco-friendly
                gardens, parks, and outdoor aesthetics.
              </li>
              <li>
                ✔ <span>Facility Management</span> – Professional maintenance
                for commercial and residential properties.
              </li>
              <li>
                ✔ <span>CSR & Public Sector Projects</span> – Government-backed
                construction, beautification, and infrastructure development.
              </li>
            </ul>
            <a
              href="/about"
              className="text-blue-600 hover:underline block mt-3"
            >
              Learn More About Our Services Here
            </a>
          </>
        ),
      },
      {
        question: "Who are Veralyssa's clients?",
        answer: (
          <div>
            <p>Our clients include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li> ✔ Government agencies & institutions</li>
              <li> ✔ High-net-worth individuals (HNWIs)</li>
              <li> ✔ Corporate organizations & commercial property owners</li>
              <li> ✔ Real estate developers & construction firms</li>
              <li> ✔ Luxury homeowners & hospitality brands</li>
            </ul>
            <a
              href="/projects"
              className="text-blue-600 hover:underline block mt-3"
            >
              Explore Our Portfolio
            </a>
          </div>
        ),
      },
    ],
  },
  {
    category: "Luxury Construction & Finishing",
    faqs: [
      {
        question:
          "What makes Veralyssa different from other construction companies in Nigeria?",
        answer: (
          <div>
            <ul className="list-disc pl-5 space-y-1">
              <li> ✔ Expertise in high-end, premium finishing.</li>
              <li> ✔ Use of world-class materials & techniques.</li>
              <li>
                {" "}
                ✔ Custom-tailored designs that match global luxury standards.
              </li>
              <li> ✔ Fast, efficient, and high-quality execution.</li>
            </ul>
          </div>
        ),
      },
      {
        question: "Do you handle both residential and commercial construction?",
        answer: (
          <div>
            <p>Yes! Veralyssa specializes in:</p>
            <ul className="pl-5 mt-2 space-y-1">
              <li> ✔ 🏠 Luxury homes, apartments, and estates</li>
              <li>
                {" "}
                ✔ 🏢 Office buildings, commercial hubs, and corporate
                headquarters
              </li>
              <li> ✔ 🏨 Hotels, resorts, and high-end retail spaces</li>
            </ul>
          </div>
        ),
      },
      {
        question: "Can Veralyssa work on renovation projects?",
        answer: (
          <div>
            <p>
              Absolutely! We offer remodeling, refurbishing, and complete
              interior transformation for both residential and commercial
              properties.
            </p>
            <a
              href="/projects"
              className="text-blue-600 hover:underline block mt-3"
            >
              See Our Renovation Projects
            </a>
          </div>
        ),
      },
    ],
  },
  {
    category: "Interior Fit-Out & Premium Finishing",
    faqs: [
      {
        question: "What is an interior fit-out?",
        answer: (
          <div>
            <p>
              An interior fit-out involves customizing and finishing a space to
              meet a client's specific needs. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li> ✔ Flooring, ceilings, and partitioning</li>
              <li> ✔ Luxury wall finishes & 3D panels</li>
              <li> ✔ Custom furniture & high-end decor</li>
            </ul>
          </div>
        ),
      },
      {
        question: "What type of materials does Veralyssa use for finishing?",
        answer: (
          <div>
            <p>We use only premium materials, including:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li> ✔ Marble, granite, and high-quality tiles</li>
              <li> ✔ Imported wood & custom joinery</li>
              <li> ✔ Luxury wall panels & exclusive finishes</li>
            </ul>
            <a
              href="#contact"
              className="text-blue-600 hover:underline block mt-3"
            >
              Get a Quote for Your Fit-Out Project
            </a>
          </div>
        ),
      },
    ],
  },
  {
    category: "Landscaping & Beautification",
    faqs: [
      {
        question: "Does Veralyssa offer landscaping services?",
        answer: (
          <div>
            <p>
              Yes! We provide professional landscaping and outdoor
              beautification, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li> ✔ Garden design & maintenance</li>
              <li> ✔ Water features, fountains, and ponds</li>
              <li> ✔ Eco-friendly and sustainable green spaces</li>
            </ul>
          </div>
        ),
      },
      {
        question: "Can you handle large-scale beautification projects?",
        answer: (
          <div>
            <p>
              Yes! Veralyssa has worked on government beautification projects,
              corporate landscaping, and estate-wide green spaces.
            </p>
            <a
              href="/projects"
              className="text-blue-600 hover:underline block mt-3"
            >
              Explore Our Landscaping Services
            </a>
          </div>
        ),
      },
    ],
  },
  {
    category: "Facility Management & Maintenance",
    faqs: [
      {
        question: "What is facility management?",
        answer: (
          <div>
            <p>
              Facility management ensures the smooth operation and maintenance
              of buildings and properties. Our services include:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li> ✔ HVAC, plumbing, and electrical maintenance</li>
              <li> ✔ Security and cleaning services</li>
              <li> ✔ 24/7 support for commercial and residential clients</li>
            </ul>
            <a
              href="/about"
              className="text-blue-600 hover:underline block mt-3"
            >
              Learn More About Our Facility Management
            </a>
          </div>
        ),
      },
    ],
  },
  {
    category: "Corporate Social Responsibility (CSR) & Government Projects",
    faqs: [
      {
        question: "Does Veralyssa work with government agencies?",
        answer: (
          <div>
            <p>
              Yes! We partner with government organizations, ministries, and
              public institutions on:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li> ✔ Urban renewal & beautification</li>
              <li> ✔ Public infrastructure & facility upgrades</li>
              <li> ✔ Park construction & environmental projects</li>
            </ul>
            <a
              href="/projects"
              className="text-blue-600 hover:underline block mt-3"
            >
              See Our Public Sector Projects
            </a>
          </div>
        ),
      },
    ],
  },
  {
    category: "Pricing & Project Timelines",
    faqs: [
      {
        question: "How much does a Veralyssa project cost?",
        answer: (
          <div>
            <p>
              Pricing depends on project size, complexity, and material
              selection. Contact us for a detailed project estimate.
            </p>
            <a
              href="#contact"
              className="text-blue-600 hover:underline block mt-3"
            >
              Request a Quote
            </a>
          </div>
        ),
      },
      {
        question: "How long does a typical project take?",
        answer: (
          <div>
            <p>
              Project timelines vary based on scope and customization. However,
              we prioritize efficiency without compromising quality.
            </p>
            <a
              href="#contact"
              className="text-blue-600 hover:underline block mt-3"
            >
              Discuss Your Project Timeline
            </a>
          </div>
        ),
      },
    ],
  },
  {
    category: "Contact & Consultations",
    faqs: [
      {
        question: "How can I contact Veralyssa for a consultation?",
        answer: (
          <div>
            <div className="space-y-3">
              <p>
                <span className="font-medium">📍 Visit Our Office:</span>
                <br />
                Plot 16B, Omorinre Johnson Street, Lekki Phase 1, Lagos, Nigeria
              </p>
              <p>
                <span className="font-medium">📧 Email:</span>
                <br />
                enquiries@veralyssa.com
              </p>
              <p>
                <span className="font-medium">📞 Call Us:</span>
                <br />
                +234 1 293 3866
              </p>
            </div>
            <a
              href="#contact"
              className="text-blue-600 hover:underline block mt-3"
            >
              Book a Consultation
            </a>
          </div>
        ),
      },
    ],
  },
];
