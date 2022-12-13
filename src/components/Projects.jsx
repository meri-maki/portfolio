import ProjectCard from "./UI/ProjectCard"
import Todo from "../assets/todo.png"
import TodoDark from "../assets/todo-dark.png"
import Ingrad from "../assets/ingrad.png"
import IngradDark from "../assets/ingrad-dark.png"
import Portfolio from "../assets/portfolio.png"
import PortfolioDark from "../assets/portfolio-dark.png"
import Spacex from "../assets/spacex.png"
import SpacexDark from "../assets/spacex-dark.png"

const Projects = ({ mode }) => {
  const projects = [
    {
      name: "Todo",
      title: "React Todo App",
      description:
        "Todo list app with drag and drop feature and local storage, made with React JS (ver.18). Includes integration with Bored API and additional dependencies such as dnd-kit, react-icons, react-confetti, react-textarea-autosize, react-use, react-tooltip.",
      stack: "React, Javascript, CSS modules, Bored API, Create React App",
      img: (
        <img
          src={!mode ? Todo : TodoDark}
          alt="Todo app view on different devices"
        />
      ),
      mainLink: "https://react-todo-app-livid.vercel.app/",
      gitLink: "https://github.com/meri-maki/react-todo-app",
    },
    {
      name: "Ingrad",
      title: "Ingrad Landing Page",
      description:
        "Responsive landing page made for Ingrad company as part of digital advertising agency Digitas team. The design and functionality was later used as a base for the main company website.",
      stack: "HTML, CSS, Javascript",
      img: (
        <img
          src={!mode ? Ingrad : IngradDark}
          alt="Ingrad website view on different devices"
        />
      ),
      mainLink: "https://meri-maki.github.io/new-ingrad/",
      gitLink: "https://github.com/meri-maki/new-ingrad",
    },
    {
      name: "Portfolio",
      title: "Personal Portfolio Website",
      description:
        "React based portfolio website made with Vite build tool. Includes Lazy loading, light/dark theme switcher and additional dependencies such as react-scroll, react-icons, and integration with EmailJs.",
      stack: "React, Javascript, CSS modules, Vite",
      img: (
        <img
          src={!mode ? Portfolio : PortfolioDark}
          alt="Portfolio website view on different devices"
        />
      ),
      mainLink: "https://ana-zhuravleva-portfolio.vercel.app/",
      gitLink: "https://github.com/meri-maki/portfolio",
    },
    {
      name: "SpaceX",
      title: "SpaceX Dashboard App [IN PROGRESS]",
      description:
        "React based SpaceX dashboard app made with Vite build tool and SpaceX API.",
      stack: "React, Redux, Javascript, CSS modules, Vite, SpaceX API",
      img: (
        <img
          src={!mode ? Spacex : SpacexDark}
          alt="SpaceX webapp view on different devices"
        />
      ),
      mainLink: "",
      gitLink: "",
    },
  ]
  return projects.map((project) => {
    return (
      <ProjectCard
        key={project.name}
        name={project.name}
        title={project.title}
        description={project.description}
        stack={project.stack}
        img={project.img}
        mainLink={project.mainLink}
        gitLink={project.gitLink}
      />
    )
  })
}

export default Projects
