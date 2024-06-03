import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { SparklesCore } from "../components/Sparkle";
import { TextGenerateEffect } from "../components/TextGenerateEffects";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden px-4">
      <div className="absolute top-10 right-6 z-50 opacity-50">
        <BackButton handleBackClick={handleBackClick} />
      </div>
      <div className="h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 xl:h-80 xl:w-80 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-500 bg-black rounded-full xl:rounded-br-full xl:rounded-bl-none xl:rounded-tl-none xl:rounded-tr-none overflow-hidden absolute top-32 -left-12 sm:top-64 md:top-44 xl:top-0 sm:left-0">
        <SparklesCore
          id="particle-1"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full rounded-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-80 xl:w-80 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-500 bg-black rounded-full overflow-hidden absolute -right-16 bottom-48 xl:top-10 sm:right-10">
        <SparklesCore
          id="particle-2"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full rounded-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="h-40 w-40 md:h-40 md:w-80 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-500 bg-black rounded-tr-[500%] md:rounded-tr-full md:rounded-tl-full overflow-hidden absolute bottom-0 left-0 md:left-1/3 md:-translate-x-1/3">
        <SparklesCore
          id="particle-3"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full rounded-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-blue-600 to-indigo-600 opacity-50 w-full text-center pt-12 animate-appear">
        Let's Break The Ice!
      </h2>
      <div className="w-full flex items-center justify-center py-2 md:py-4 text-center">
        <TextGenerateEffect
          className="text-transparent bg-clip-text bg-gradient-to-br from-sky-700 via-indigo-600 to-sky-600 text-xs sm:text-sm md:text-base lg:text-xl font-semibold text-center"
          words=" I Enjoy Working With The Dedicated Creatives Who Makes The World
        Beautiful.."
        />
      </div>
      <div className="flex flex-col items-center w-full py-2 md:py-4 text-[12px] sm:text-sm md:text-base">
        <p className="text-indigo-600">
          If you want mail:{" "}
          <span className="text-sky-600">metilda0496@gmail.com</span>
        </p>
        <p className="text-indigo-600">
          If you want talk to me:{" "}
          <span className="text-sky-600">+91 8590981139</span>
        </p>
      </div>
      <div className="flex flex-col items-end justify-center w-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
