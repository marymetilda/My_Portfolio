import { SparklesCore } from "./Sparkle";
import { Data } from "../Data";

const homepageData = Data.home;

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen animate-appear bg-black overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <p className="text-indigo-400 text-xl animate-appear pb-4">
          {homepageData.introStatement}
        </p>
        <div className="relative flex items-center justify-center">
          <h1 className="md:text-6xl text-3xl font-bold text-center text-transparent z-20 bg-clip-text bg-indigo-600 blur-md animate-appear">
            {homepageData.name}
          </h1>
          <h1 className="absolute inset-0 md:text-6xl text-3xl font-bold text-center text-transparent z-20 bg-clip-text bg-slate-600 blur-sm animate-appear">
            {homepageData.name}
          </h1>
          <h1 className="absolute inset-0 md:text-6xl text-3xl font-bold text-center text-transparent z-20 bg-clip-text bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 via-teal-500 to-slate-500 animate-appear">
            {homepageData.name}
          </h1>
        </div>
        <p className="text-sky-500 text-[3vw] md:text-xl font-semibold animate-appear pt-4">
          {homepageData.designation}
        </p>
      </div>
      <div className="w-[40rem] h-40 relative mt-4">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          id="particle-1"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default Intro;
