import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, techIcons } from "@/utils/projects";
import { testimonials } from "@/utils/testimonials";
import { CodeBracketIcon, LinkIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";

// Main About component
export default function About() {
  const [currentText, setCurrentText] = useState(""); // Current text to display
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the current character in the text
  const [showElement, setShowElement] = useState(false); // Toggle state for the navbar
  const [isNavVisible, setIsNavVisible] = useState(true); // Navbar visibility state

  const text = ">Joseph"; // Text to animate
  const delay = 800; // Delay for each character animation

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <>
      <main className="hide-scrollbar font-gilroysemibold">
        <AnimatePresence>
          {isNavVisible && (
            <motion.header
              className="fixed inset-x-0 top-0 items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <nav
                className={`md:text-white ${showElement ? "bg-white text-black pb-3s shadow-xl" : ""}`}
              >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-5 2xl::px-0">
                  <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse font-gilroysemibold text-3xl"
                  >
                    {currentText}
                  </a>
                  <button
                    className={`inline-flex absolute top-2.5 right-3 items-center mb-0.5 w-10 h-10 justify-center text-sm ${showElement ? "text-black" : "text-white"} rounded-lg md:hidden`}
                    onClick={() => setShowElement(!showElement)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </button>

                  <div
                    className="w-full hidden md:block md:w-auto"
                    id="navbar-default"
                  >
                    <ul className="font-medium items-center text-2xl text-black md:text-white justify-center flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-1 rtl:space-x-reverse md:mt-0 md:border-0">
                      <li>
                        <a href="#Projects" className="block py-2 px-3">
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:yemi200237@gmail.com"
                          className="block py-2 px-3"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/Joseph-Adedayo">
                          <span className="sr-only">GitHub</span>
                          <svg
                            fill="#FFFFFF"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 72 72"
                            className="cursor-pointer py-2 w-8 aria-hidden"
                          >
                            <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.joeuroedits.com/">
                          <span className="sr-only">J0€ Edits</span>
                          <img
                            src={"/J0€_Edits_Logo_Transper1.png"}
                            alt="J0€ Edits Logo"
                            width={40}
                            height={50}
                            className="md:ml-3 py-2 aria-hidden"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <AnimatePresence>
                    {showElement && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full md:hidden md:w-auto"
                        id="navbar-default"
                      >
                        <ul className="font-medium items-center text-xl text-black md:text-white justify-center flex flex-col p-4 md:p-0 mt-1 rounded-lg md:flex-row md:space-x-1 rtl:space-x-reverse md:mt-0 md:border-0">
                          <li>
                            <a href="#Projects" className="block py-2 px-3">
                              Projects
                            </a>
                          </li>
                          <li>
                            <a
                              href="mailto:yemi200237@gmail.com"
                              className="block py-2 px-3"
                            >
                              Contact
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/Joseph-Adedayo">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 72 72"
                                className="cursor-pointer py-2 w-8"
                              >
                                <path
                                  fill="currentColor"
                                  d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.joeuroedits.com/">
                              <img
                                src={"/J0€_Edits_Logo_Transper1black.png"}
                                alt="J0€ Edits Logo"
                                width={50}
                                height={60}
                                className="md:ml-3 py-2"
                              />
                            </a>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
            </motion.header>
          )}
        </AnimatePresence>

        <Hero />
        <div className=" mx-auto  max-w-7xl px-5 2xl:px-0">
          <Info />
          <Testimonials />
          <Projects setIsNavVisible={setIsNavVisible} />
          <Footer />
        </div>
      </main>
    </>
  );
}

// Hero component for the top section
const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.8 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="bg-cover bg-[url('/backg.png')]"
    >
      <div className="h-screen bg-black bg-opacity-40 px-4 pt-14 lg:px-8 flex items-center justify-center text-white font-gilroyextrabold">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 3 }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-8xl xl:text-8xl">
              Building brands, businesses and software. 🚀
            </h1>
            <p className="mt-2 text-sm lg:text-lg lg:leading-8 font-gilroyregular">
              This is my personal website where I share my thoughts, ideas and
              projects.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Info component for the About section
const Info = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      id="About"
      className="pt-10 overflow-hidden bg-transparent md:pt-0 sm:pt-16 2xl:pt-16"
    >
      <div className=" mx-auto  ">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className="">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Hey 👋 I am Joseph Adedayo.
            </h2>
            <p className="max-w-2xl mt-3 text-lg md:text-4xl font-gilroyregular leading-relaxed text-gray-400 md:mt-8">
              I am a designer, developer and creative director based in Ireland.
              I love all things tech, and design. I create modern, urban UI/UX
              designs for new emerging brands and businesses 👨🏾‍💻
            </p>

            <p className="mt-4 text-xl text-white md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2"></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" /> Ask me on{" "}
              <a
                href="https://www.linkedin.com/in/joseph-adedayo-559564238/"
                title=""
                className="transition-all duration-200 text-sky-600 hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>

          <div className="justify-left py-5 ">
            <Image
              width={500}
              height={500}
              priority
              className="relative w-full xl:max-w-lg xl:ml-auto 2xl:origin-bottom rounded-xl"
              src="/joe.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Testimonials component for displaying testimonials
const Testimonials = () => {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
        duration: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="container mx-auto py-5 md:py-12 lg:pt-20" ref={inViewRef}>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 gap-8 lg:grid-cols-3"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={item}
            className="testimonial-card justify-center border-gray-300 bg-transparent border border-opacity-30 p-5 rounded-xl shadow-glow flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 96 960 960"
              className="inline-block w-6"
            >
              <path
                fill="currentColor"
                d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
              />
            </svg>
            <p className="text-white text-xs text-center mb-1 font-gilroyregular">
              {testimonial.quote}
            </p>
            {stars}
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="font-gilroyextrabold text-gray-300">
                  {testimonial.name}
                </p>
                <p className="font-gilroyregular text-gray-400">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Projects component for displaying projects
const Projects = ({ setIsNavVisible }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    setIsNavVisible(!inView);
  }, [inView, setIsNavVisible]);

  return (
    <div id="Projects" ref={ref} className="mx-auto py-4 md:py-12 md:px-0">
      <h1 className="text-5xl md:text-3xl font-gilroysemibold leading-tight text-white mt-10 sm:text-4xl lg:text-5xl">
        Projects
      </h1>
      <div className="grid gap-10 lg:gap-20 pt-8 md:pt-20">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

// ProjectCard component for displaying individual project details
const ProjectCard = ({ project }) => {
  const ref = useRef(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const shimmerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.5,
      x: ["-100%", "100%"],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      ref={inViewRef}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={imageVariants}
    >
      <a
        href={project.link}
        className="relative block overflow-hidden rounded-lg w-full"
      >
        <Image
          alt={project.title}
          src={project.src}
          width={800}
          height={500}
          className="w-full shadow-glow border-gray-200 border border-opacity-10 shadow-2xl shadow-black"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={shimmerVariants}
        />
      </a>
      <div className="pt-5 rounded-lg shadow-lg">
        <h3 className="text-4xl lg:text-5xl font-semibold text-white">
          {project.title}
        </h3>
        <div className="mt-3 gap-1 flex items-center">
          {project.tech.map((tech) => (
            <img
              key={tech}
              src={techIcons[tech]}
              alt={tech}
              className="size-5 mr-2"
            />
          ))}
        </div>
        <p className="mt-3 text-sm lg:text-xl font-gilroyregular text-gray-300">
          {project.desc}
        </p>
        <div className="mt-3 gap-4 flex items-center">
          {project.link.length > 0 && (
            <a href={project.link}>
              <span className="sr-only">Link to Project</span>
              <LinkIcon className="size-5 text-blue-400 hover:text-blue-600" />
            </a>
          )}
          {project.code.length > 0 && (
            <a href={project.code}>
              <span className="sr-only">Link to Code</span>
              <CodeBracketIcon className="size-5 text-blue-400 hover:text-blue-600" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Footer component for the website footer
const Footer = () => {
  return (
    <footer className="bg-black rounded-lg shadow ">
      <div className="w-full mx-auto max-w-screen-xl py-8 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="/" className="hover:underline">
            Joseph Adedayo™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-1.5 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#About" className="hover:underline me-4 md:me-6">
              About Me
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:underline me-4 md:me-6">
              Projects
            </a>
          </li>
          <li>
            <a href="mailto:yemi200237@gmail.com" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

// Stars component for displaying star ratings
const stars = (
  <ul className="mb-5 flex justify-center text-yellow-400">
    {Array(5)
      .fill()
      .map((_, i) => (
        <li key={i}>
          <span className="sr-only">Star</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
            className="w-5 text-warning"
          >
            <path
              fill="currentColor"
              d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
            />
          </svg>
        </li>
      ))}
  </ul>
);
