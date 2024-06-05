import { useNavigate } from "react-router-dom";
import { Data } from "../Data";
import AboutButton from "../assets/about.png";
import ProjectsIcon from "../assets/projects.svg";
import SkillsIcon from "../assets/skills.jpg";
import ContactIcon from "../assets/contact.png";
import GithubIcon from "../assets/github.png";
import ResumeIcon from "../assets/resume.png";
import LinkedIn from "../assets/linkedin.svg";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { SparklesCore } from "../components/Sparkle";
import FlipWords from "../components/FlipWords";
import Intro from "../components/Intro";

const homepageData = Data.home;

const words = [
  "I'm Mary Metilda",
  "I'm A Code Connoisseur",
  "I'm A Tech Enthusiastic",
  "I'm A UX Maestro",
  "I'm A Design Aficionado",
  "I'm A Pixel Perfectionist",
  "I'm A Perpetual Learner",
];

function Home() {
  const navigate = useNavigate();
  const [shouldShowName, setShouldShowName] = useState("");

  const handleAbout = () => {
    navigate("/about");
  };
  const handleSkill = () => {
    navigate("/skills");
  };
  const handleProject = () => {
    navigate("/projects");
  };
  const handleContact = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const shouldHideMenu = sessionStorage.getItem("shouldHideMenu");
    setShouldShowName(shouldHideMenu || "");

    const timeout = setTimeout(() => {
      if (!shouldHideMenu) {
        sessionStorage.setItem("shouldHideMenu", "yes");
        setShouldShowName("yes");
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const GradientBar = () => (
    <div className="relative z-10 h-12 w-4 block">
      <div className="absolute inset-y-2 inset-x-2 bg-linear-indigo h-3/4 w-[2px] blur-md" />
      <div className="absolute inset-y-4 inset-x-2 bg-linear-indigo h-3/4 w-px" />
      <div className="absolute inset-y-6 inset-x-2 bg-gradient-to-b from-transparent via-sky-500 to-transparent h-2/4 w-[5px] blur-md" />
      <div className="absolute inset-y-8 inset-x-2 bg-gradient-to-b from-transparent via-sky-500 to-transparent h-2/4 w-px" />
    </div>
  );

  return (
    <div className="w-screen h-screen bg-black flex overflow-hidden">
      {!shouldShowName ? (
        <Intro />
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full animate-appear overflow-hidden pb-10">
          <div className="w-[40rem] h-20 relative mt-4">
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            <SparklesCore
              id="particle-2"
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <br />
            <div className="text-[3vw] md:text-xl font-semibold h-fit flex justify-center items-center w-full">
              <FlipWords words={words} />
            </div>

            <div className="flex flex-col items-end md:gap-0 pr-0 md:pr-[4vw]">
              <div className="flex items-end justify-end gap-4 animate-appear pt-8">
                <Button
                  handleButtonClick={handleAbout}
                  buttonLabel={homepageData.aboutButtonLabel}
                />
                <div className="flex flex-col items-center justify-between">
                  <button
                    onClick={handleAbout}
                    className="w-8 h-8 p-1 bg-linear-blue rounded-full flex items-center justify-center"
                  >
                    <img
                      className="h-full w-full"
                      src={AboutButton}
                      alt="about"
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-end justify-end gap-4 animate-appear">
                <Button
                  handleButtonClick={handleSkill}
                  buttonLabel={homepageData.skillsButtonLabel}
                />
                <div className="flex flex-col items-center">
                  <GradientBar />
                  <button
                    onClick={handleSkill}
                    className="w-8 h-8 p-1 bg-linear-blue rounded-full flex items-center justify-center"
                  >
                    <img
                      className="h-full w-full rounded-full"
                      src={SkillsIcon}
                      alt="skill"
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-end justify-end gap-4 animate-appear">
                <Button
                  handleButtonClick={handleProject}
                  buttonLabel={homepageData.projectsButtonLabel}
                />
                <div className="flex flex-col items-center">
                  <GradientBar />
                  <button
                    onClick={handleProject}
                    className="w-8 h-8 p-1 bg-linear-blue rounded-full flex items-center justify-center"
                  >
                    <img
                      className="h-full w-full"
                      src={ProjectsIcon}
                      alt="projects"
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-end gap-4 animate-appear">
                <Button
                  handleButtonClick={handleContact}
                  buttonLabel={homepageData.contanctButtonLabel}
                />
                <div className="flex flex-col items-center">
                  <GradientBar />
                  <button
                    onClick={handleContact}
                    className="w-8 h-8 p-1 bg-linear-blue rounded-full flex items-center justify-center"
                  >
                    <img
                      className="h-full w-full"
                      src={ContactIcon}
                      alt="contact"
                    />
                  </button>
                  <GradientBar />
                </div>
              </div>
              <div className="flex gap-4">
                {" "}
                <div className="w-8 h-8 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
                  <a href="https://github.com/marymetilda">
                    <img
                      className="h-full w-full"
                      src={GithubIcon}
                      alt="about"
                    />
                  </a>
                </div>
                <div className="w-8 h-8 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
                  <a href="https://drive.google.com/file/d/1l5i1ToE3xU7X3W9k6YBdK9_IVTvLNRTN/view?usp=drivesdk">
                    <img
                      className="h-full w-full"
                      src={ResumeIcon}
                      alt="about"
                    />
                  </a>
                </div>
                <div className="w-8 h-8 hover:scale-150 hover:cursor-pointer p-1 bg-linear-blue rounded-full flex items-center justify-center">
                  <a href="https://www.linkedin.com/in/mary-metilda-9961aa279">
                    <img className="h-full w-full" src={LinkedIn} alt="about" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40rem] h-20 relative mt-4">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              id="particle-3"
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
      )}
    </div>
  );
}

export default Home;
