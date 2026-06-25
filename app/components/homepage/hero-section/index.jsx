// @flow strict
"use client";

import { personalData } from "../../../../utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
// import { SiLeetcode } from "react-icons/si";
import { useState, useEffect } from "react";

function HeroSection() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = [
    { text: "Software Engineer", color: "text-red-400" },
    { text: "Senior Developer", color: "text-[#16f2b3]" },
    { text: "Full Stack Developer", color: "text-yellow-400" },
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (!isDeleting && charIndex < currentRole.text.length) {
      // Typing letters
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.text.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!isDeleting && charIndex === currentRole.text.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex > 0) {
      // Deleting letters
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.text.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      // Move to next role
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-[1.2fr_1fr] gap-y-6 lg:gap-8 relative">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center px-4 py-2 lg:px-6 lg:pt-8">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.4rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className="text-pink-500">{personalData.name}</span>,
            I&apos;m a Professional {" "}<br />
            <span className={roles[roleIndex].color}>{displayedText}</span>
            <span className="border-r-2 border-white animate-blink ml-1"></span>
            .
            <style jsx>{`
              .animate-blink {
                animation: blink 1s step-start infinite;
              }
              @keyframes blink {
                50% {
                  opacity: 0;
                }
              }
            `}</style>
          </h1>

        <div className="relative lg:absolute lg:bottom-0 pt-8 lg:pt-0">
          <div className="my-8 md:my-10 flex justify-center items-center gap-6 md:gap-26 ml-auto mr-auto">
            <Link
              href={personalData.github}
              target="_blank"
              className="flex gap-1 md:gap-2 transition-all text-pink-500 hover:text-yellow-500 hover:scale-110 md:hover:scale-125 duration-300"
            >
              <BsGithub size={24} md={30} />
              <button className="text-[14px] md:text-[18px]">Github</button>
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="flex gap-1 md:gap-2 transition-all text-pink-500 hover:scale-110 md:hover:scale-125 hover:text-red-400 duration-300"
            >
              <BsLinkedin size={24} md={30} />
              <button className="text-[14px] md:text-[18px]">LinkedIn</button>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 p-2 lg:p-4">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">developer</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Ragul Suresh</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{` ['`}</span>
                <span className="text-red-400">React JS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-orange-400">React Native(Expo)</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-pink-400">Next JS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-[#16f2b3]">Express JS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Javascript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-300">Typescript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-green-300">Node JS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-blue-400">HTML5</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-500">CSS3</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-blue-500">TailwindCSS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-violet-500">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-300">PostgreSQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-violet-300">Gitlab</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  hardWorker:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
                <span className="ml-4 lg:ml-4 mr-2 text-white">
                  quickLearner:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
                <span className="ml-4 lg:ml-4 mr-2 text-white">
                  problemSolver:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div></div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  hireable:
                </span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                  return
                </span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;