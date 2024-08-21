const About = () => {
  return (
    <>
      <div className="brder-2  px-6 md:px-12  text-white">
        <h2 className="text-3xl font-bold pt-8 text-center mb-4">About Me</h2>
        <div className="text-white lg:w-[70%]">
          <div className="mx-auto  shadow-lg rounded-lg overflow-hidden">
            <div className="p-8 md:p-12">
              <p className=" pb-4 text-[16px] lg:text-[18px]">
                I am a dedicated student with a strong passion for coding and
                software development. I am currently studying in{" "}
                <span className="font-semibold">
                  Pillai College of Engineering, New Panvel{" "}
                </span>
                in final year. Over the years, I've honed my skills in various
                programming languages and technologies, allowing me to tackle
                complex problems and develop efficient solutions.
              </p>
              <p className=" pb-4 text-[16px] lg:text-[18px]">
                My experience spans across web development, data structures, and
                algorithms, enabling me to build responsive and dynamic
                applications with clean and maintainable code.
              </p>
              <p className="text-[16px] lg:text-[18px]">
                I'm always eager to learn new technologies and take on
                challenging projects that push the boundaries of my knowledge.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
