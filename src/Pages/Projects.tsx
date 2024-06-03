import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import BackButton from "../components/BackButton";
import Slider from "react-slick";
import { Data } from "../Data";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlipingCard from "../components/FlipingCard";

const projectData = Data.projects;

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "0",
      },
    },
  ],
};

const Sample = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="flex items-center justify-center gap-12 pt-20 animate-appear-slow">
        <div className="absolute top-10 right-[10vw] z-40 opacity-50">
          <BackButton handleBackClick={handleBackClick} />
        </div>
        <Slider {...settings} className="w-screen sm:block relative z-30">
          {projectData.projectList.map((project) => {
            return (
              <div
                key={project.title}
                className="relative h-fit w-fit ml-11 sm:ml-0 z-50"
              >
                <motion.div
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative rounded-xl bg-gray-950/10 transition-colors hover:bg-gray-950/50 h-fit w-fit"
                >
                  <FlipingCard {...project} />
                </motion.div>
              </div>
            );
          })}
        </Slider>
        <div className="fixed top-20 left-[10vw] text-white text-opacity-20 text-7xl md:text-9xl font-bold">
          {projectData.title}
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Sample;
