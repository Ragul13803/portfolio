// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Top Gradient Divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Skills Marquee */}
      <div className="w-full my-12 overflow-hidden">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData?.map((skill, id) => (
            <div
              key={id}
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] active:scale-[1.1] cursor-pointer"
            >
              <div className="relative h-full w-full rounded-lg border border-[#1f223c] bg-[#0D1224] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">

                {/* Top gradient line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

                {/* Left gradient line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3/4 w-[2px] bg-gradient-to-b from-transparent via-violet-500 to-transparent"></div>

                {/* Right gradient line */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3/4 w-[2px] bg-gradient-to-b from-transparent via-violet-500 to-transparent"></div>

                {/* Skill Content */}
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>

                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;