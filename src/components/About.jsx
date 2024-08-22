// import React from "react";

const About = () => {
  return (
    <div className="boder-2 px-6 md:px-12 text-white">
      <h2 className="text-3xl font-bold  lg:text-right text-center mb-4 lg:pr-[70px]">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-[30%] flex justify-center lg:justify-start">
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="w-[143px] h-[150px] md:w-48 md:h-48 lg:w-[350px] lg:h-[360px] py- rounded-full object-cover"
          />
        </div>
        <div className="text-white lg:w-[70%] mt lg:mt-0 lg:ml-8">
          <div className="mx-auto shadow-lg rounded-lg ">
            <div className="p-8 md:p-12">
              <p className="pb-4 text-[16px] text-center lg:text-[18px]">
                I am a dedicated student with a strong passion for coding and
                software development. I am currently studying at{" "}
                <span className="font-semibold bg-gradient-to-tr from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Pillai College of Engineering, New Panvel{" "}
                </span>
                in my final year. Over the years, I have honed my skills in
                various programming languages and technologies, allowing me to
                tackle complex problems and develop efficient solutions.
              </p>
              <p className="pb-4 text-[16px] text-center lg:text-[18px]">
                My experience spans across web development, data structures, and
                algorithms, enabling me to build responsive and dynamic
                applications with clean and maintainable code.
              </p>
              <p className="text-[16px] text-center lg:text-[18px]">
                I am always eager to learn new technologies and take on
                challenging projects that push the boundaries of my knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[1px] my-[50px]">
        <div className="absolute inset-0 z-50 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      </div>{" "}
    </div>
  );
};

export default About;
