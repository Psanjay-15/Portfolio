import { skills } from "../data/tech.jsx";

const Techstack = () => {
  return (
    <div className="order-2 my-10  md:mx-6  lg:mx-12 text-white">
      <h2 className="text-3xl font-bold pt-8 text-center lg:text-left mb-4 lg:pl-[50px]">
        Skills
      </h2>
      <div className="grid grid-cols-2 border-gradient sm:grid-cols-3 lg:grid-cols-8 gap-6 lg:p-4 p-4 animate-slideIn">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-800 lg:p-4 p-2 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300 shiny-border"
          >
            <div className="lg:text-5xl text-3xl mb-4">{skill.icon}</div>
            <p className="lg:text-lg text-base font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="relative w-full h-[1px] my-[50px]">
        <div className="absolute inset-0 z-50 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      </div>{" "}
    </div>
  );
};

export default Techstack;
