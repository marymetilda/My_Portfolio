import { useNavigate } from "react-router-dom";
import { Data } from "../Data";
import codingImage from "../assets/codingWithThinking.png";
import Vortex from "../components/Vortex";
import BackButton from "../components/BackButton";
import BackgroundGradient from "../components/BackgroundGradient";
import { TextGenerateEffect } from "../components/TextGenerateEffects";

const aboutData = Data.about;

function About() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="relative w-screen h-screen bg-black">
      <div className="w-full h-full overflow-hidden">
        <div className="flex items-center flex-col justify-center w-full h-full">
          <div className="fixed top-10 w-full flex items-center justify-end pr-4 md:pr-8 z-40 opacity-50">
            <BackButton handleBackClick={handleBackClick} />
          </div>
          <div className="h-full w-full relative flex items-center justify-center md:justify-start ml-0 md:ml-48 mt-10 px-8 md:px-0">
            <div className="w-full md:w-1/2 opacity-100 z-20 backdrop-blur-[4px] transition duration-300 ease-in-out animate-flash-top">
              <BackgroundGradient className="p-4 md:p-8 w-full h-fit flex items-center justify-center">
                <Vortex
                  rangeSpeed={0.25}
                  backgroundColor="black"
                  rangeY={800}
                  particleCount={200}
                  baseHue={170}
                >
                  <div className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-medium whitespace-pre-wrap w-full">
                    <TextGenerateEffect words={aboutData.description} />
                  </div>
                </Vortex>
              </BackgroundGradient>
              <img
                className="md:hidden fixed bottom-full right-0 z-40 w-[32vw] h-auto transition duration-300 ease-in-out hover:scale-125 animate-left"
                src={codingImage}
                alt="title"
              />
            </div>

            <h1 className="text-white opacity-20 md:text-9xl text-7xl font-bold fixed z-10 top-10 lg:top-[11%] left-[5%]">
              {aboutData.title}
            </h1>
            <img
              className="hidden md:block fixed right-[5vw] top-16 md:top-32 z-40 w-[32vw] h-auto transition duration-300 ease-in-out hover:scale-125 animate-left"
              src={codingImage}
              alt="title"
            />
          </div>
          <div className="h-1/3 w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-500 via-black to-black absolute top-0 left-1/2 -translate-x-1/2 opacity-50"></div>
          <div className="h-1/3 w-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-black absolute bottom-0 opacity-50"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
