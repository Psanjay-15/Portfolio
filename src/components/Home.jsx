import { Link } from "react-router-dom";
import NavBar from "./NavBar";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row h-fit lg:my-[80px]">
        <div className="text-white brder-2 border-white w-full lg:w-[100%] p-[18px] text-center lg:px-10">
          <div className="m-4 p-6">
            <h1 className="text-3xl md:text-4xl lg:text-8xl font-bold bg-gradient-to-tr from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Sanjay Pandere
            </h1>
            <p className="text-[16px] p-[4px] md:text-xl lg:text-xl">
              I’m a passionate web developer with experience in creating dynamic
              and responsive websites. Having good experience in different
              web-development technologies and wanting to contribute to the
              betterment of society.
            </p>

            <Link
              to="https://drive.google.com/file/d/1zPyjR1tY1eia6jbACtecx8tpNzBK8Zvx/view"
              target="blank"
            >
              <button className="mt-6 bg-white text-gray-900 font-semibold lg:font-extrabold lg:text-xl lg:py-3 py-2 px-4 lg:px-8 rounded-md hover:bg-gray-200 transition-colors">
                Download CV
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="w-full lg:w-[30%] brder-2 border-white"></div> */}
      </div>
      {/* <div className="relative w-full h-1 mt-6">
        <div className="absolute inset-0 z-50 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      </div> */}
    </>
  );
};

export default Home;
