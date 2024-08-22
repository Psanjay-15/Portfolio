import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row h-fit lg:my-[80px]">
        <div className="text-white brder-2 border-white w-full lg:w-[70%] p-[18px] text-center lg:px-10">
          <div className="m-4 p-6">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-tr from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Sanjay Pandere
            </h1>
            <p className="text-[16px] p-[4px] md:text-xl lg:text-xl">
              I’m a passionate web developer with experience in creating dynamic
              and responsive websites. Having good experience in different
              web-development technologies and wanting to contribute to the
              betterment of society.
            </p>
            <div className="flex flex-row justify-center items-center pt-3">
              <ul className="flex flex-row ">
                <li className="px-2">
                  <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                  >
                    <FaLinkedin size={30} className="text-blue-500" />
                  </Link>
                  {/* <img src="" alt="" /> */}
                </li>
                <li className="px-2">
                  <Link
                    href="https://www.instagram.com/sanjay_pandere26/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={30} className="text-orange-600" />
                  </Link>
                  {/* <img src="" alt="" /> */}
                </li>
                <li className="px-2">
                  <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={30} className="text-blue-500" />
                  </Link>
                </li>
                <li className="px-2">
                  <Link
                    href="https://www.github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={30} className="text-white" />
                  </Link>
                </li>
                <li className="px-2">
                  <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLeetcode size={30} className="text-yellow-500" />
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="https://drive.google.com/file/d/1CxJafG6HF8D8AP--0yJrnLmuZKHojzCn/view"
              target="blank"
            >
              <button className="mt-6 bg-white text-gray-900 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition-colors">
                Download CV
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[30%] brder-2 border-white"></div>
      </div>
      {/* <div className="relative w-full h-1 mt-6">
        <div className="absolute inset-0 z-50 h-full bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
      </div> */}
    </>
  );
};

export default Home;
