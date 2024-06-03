import HtmlLogo from "../assets/html.png";
import CssLogo from "../assets/cssLogo.png";
import jsLogo from "../assets/jsLogo.png";
import tsLogo from "../assets/tsLogo.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import nextLogo from "../assets/next.svg";
import reduxLogo from "../assets/redux.png";
import threeLogo from "../assets/threeLogo.png";
import bootstrapLogo from "../assets/bootstrapLogo.png";
import vsCodeLogo from "../assets/vsCodeLogo.png";
import gitLogo from "../assets/gitLogo.png";

export const Data = {
  about: {
    description:
      "I’m an experienced front-end developer proficient in optimizing web performance and ensuring cross-browser compatibility.\n\n I adore designing user-friendly websites that are both simple and elegant. I consider myself to be a lifelong learner.\n\n I consider myself fortunate to be a frontend developer because my work has a direct impact on the user’s life.\n\n I enjoy writing clean code and creating useful products.",
    title: "About",
  },
  home: {
    introStatement: "HI THERE 👋🏻, I'M",
    name: "Mary Metilda",
    designation: "Frontend Developer",
    aboutButtonLabel: "About me",
    skillsButtonLabel: "My Skills",
    projectsButtonLabel: "Projects",
    contanctButtonLabel: "Contact me",
  },
  projects: {
    title: "Projects",
    projectList: [
      {
        id: 0,
        projectUrl: "https://yummy-tasty.netlify.app",
        title: "Yummy Tasty Food App",
        description:
          "Food ordering app from scrach using react js. Technologies used are react js, tailwind css, parcel, redux toolkit etc",
        liveText: "Live URL",
        githubText: "Source code",
        githubLink: "https://github.com/marymetilda/Yummy_Tasty_Food_App",
      },
      {
        id: 1,
        projectUrl: "https://e-cart-g3xb.onrender.com/",
        title: "E-Commerce Website",
        description: "An E-Commerce Website MERN Stack",
        liveText: "Live URL",
        githubText: "Source code",
        githubLink: "https://github.com/marymetilda/E-CART-",
      },
      {
        id: 2,
        projectUrl: "https://todo-app-vue-3.netlify.app/",
        title: "TODO App",
        description: "TODO App using Vue Js",
        liveText: "Live URL",
        githubText: "Source code",
        githubLink: "https://github.com/marymetilda/vue-todos",
      },
      {
        id: 3,
        projectUrl: "https://celluloidgpt-15b7a.web.app/",
        title: "Celluloid GPT",
        description:
          "Clone of Netflix using React js. API taken from TMDB and Open AI",
        liveText: "Live URL",
        githubText: "Source code",
        githubLink: "https://github.com/marymetilda/CelluloidGPT",
      },
      {
        id: 4,
        projectUrl: "https://my-photo-book.netlify.app",
        title: "Simple Photo Book",
        description:
          "Simple Photo book using css, with beautiful book animation",
        liveText: "Live URL",
        githubText: "Source code",
        githubLink: "https://github.com/marymetilda/My-Photo-Book",
      },
      {
        id: 5,
        projectUrl: "https://doordashwebpage.netlify.app",
        title: "Doordash website clone",
        description: "Clone the Doordash website using html and css",
        liveText: "Live URL",
      },
      {
        id: 6,
        projectUrl: "https://azurewebpage.netlify.app",
        title: "Azure website clone",
        description: "Clone the Azure website using html and css",
        liveText: "Live URL",
      },
      {
        id: 7,
        projectUrl: "https://airbnb300.netlify.app",
        title: "Airbnb website clone",
        description: "Clone the Airbnb website using html and css",
        liveText: "Live URL",
      },
    ],
  },
  skills: {
    title: "Skills",
    skillList: {
      leftCard: {
        title: "I'm Good at...",
        skills: [
          {
            skill: "HTML",
            darkLine: 5,
            skillLogo: HtmlLogo,
          },
          {
            skill: "CSS",
            darkLine: 5,
            skillLogo: CssLogo,
          },
          {
            skill: "JavaScript",
            darkLine: 5,
            skillLogo: jsLogo,
          },
          {
            skill: "TypeScript",
            darkLine: 5,
            skillLogo: tsLogo,
          },
          {
            skill: "React js",
            darkLine: 5,
            skillLogo: reactLogo,
          },
          {
            skill: "React Native",
            darkLine: 5,
            skillLogo: reactLogo,
          },
          {
            skill: "Next js",
            darkLine: 3,
            skillLogo: nextLogo,
          },
          {
            skill: "Tailwind",
            darkLine: 5,
            skillLogo: tailwindLogo,
          },
        ],
      },
      rightCard: {
        title: "I love to work with...",
        skills: [
          {
            skill: "Redux",
            darkLine: 4,
            skillLogo: reduxLogo,
          },
          {
            skill: "Three Js",
            darkLine: 3,
            skillLogo: threeLogo,
          },
          {
            skill: "Bootstrap",
            darkLine: 5,
            skillLogo: bootstrapLogo,
          },
          {
            skill: "GIT",
            darkLine: 4,
            skillLogo: gitLogo,
          },
          {
            skill: "Vs code",
            darkLine: 4,
            skillLogo: vsCodeLogo,
          },
        ],
      },
    },
  },
};
