import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useCallback, useEffect, useState } from "react";
// import { loadSlim } from "@tsparticles/slim";
// import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

interface PartcleProps {
  bgColor: string;
  particleColor: string | string[];
  shouldEnableLinks: boolean;
  linkColor: string;
  onHoverInteractivity: boolean;
  minParticleSize: number;
  maxParticleSize: number;
  density: number;
}

function Particle({
  bgColor,
  particleColor,
  shouldEnableLinks,
  linkColor,
  onHoverInteractivity,
  minParticleSize,
  maxParticleSize,
  density,
}: PartcleProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          //   loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: bgColor,
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: onHoverInteractivity,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 75,
                  duration: 1,
                },
              },
            },
            particles: {
              color: {
                value: particleColor,
              },
              links: {
                color: linkColor,
                distance: 80,
                enable: shouldEnableLinks,
                opacity: 0.75,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: density,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: minParticleSize, max: maxParticleSize },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}

export default Particle;
