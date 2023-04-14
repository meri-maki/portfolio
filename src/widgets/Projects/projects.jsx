import Todo from "~/shared/assets/todo.png"
import TodoDark from "~/shared/assets/todo-dark.png"
import Ingrad from "~/shared/assets/ingrad.png"
import IngradDark from "~/shared/assets/ingrad-dark.png"
import Portfolio from "~/shared/assets/portfolio.png"
import PortfolioDark from "~/shared/assets/portfolio-dark.png"
/* import Spacex from '~/shared/assets/spacex.png'
import SpacexDark from '~/shared/assets/spacex-dark.png' */
import Weather from "~/shared/assets/weather.png"
import WeatherDark from "~/shared/assets/weather-dark.png"
import Metaverse from "~/shared/assets/metaverse.svg"
import MetaverseDark from "~/shared/assets/metaverse-dark.svg"
import Mern from "~/shared/assets/mern.svg"
import MernDark from "~/shared/assets/mern-dark.svg"
import Toon from "~/shared/assets/toon.png"
import ToonDark from "~/shared/assets/toon-dark.png"

export const projects = (mode) => {
	const projectsData = [
		{
			name: "ToON.ORG",
			title: "ToON.ORG website [IN DEVELOPMENT]",
			description: "Web3.0 responsive website build with Webpack5. The project was successfully presented on Crypto Expo Dubai 2023.",
			descriptionRu: "Адаптивный сайт с технологией Web3.0, собранный с помощью Webpack5. Проект был успешно представлен на Crypto Expo Dubai 2023.",
			stack: "HTML, Javascript, SCSS, Webpack, Gulp, Web3, Locomotive Scroll, jQuery",
			img: <img src={!mode ? Toon : ToonDark} alt="App view on different devices" />,
			mainLink: "",
			gitLink: "",
		},
		{
			name: "MERN",
			title: "MERN Stack Social App [LIMITED FUNCTIONALITY]",
			description: "Responsive MERN Stack Social network app with authorization and state management using React, MongoDB and Meterial UI",
			descriptionRu:
				"Приложение выполненное на MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS) с функцией авторизации пользователя, размещением постов и state менеджментом с помощью Redux Toolkit.",
			stack: "MERN: NodeJS, MongoDB, Mongoose, JsonWebToken, Multer, Yup, React, Redux Toolkit, React Persist, React Router, Formik, React Dropzone, MUI ",
			img: <img src={!mode ? Mern : MernDark} alt="Social app view on different devices" />,
			mainLink: "",
			gitLink: "https://github.com/meri-maki/MERN-social-FRONT",
		},
		{
			name: "Metaverse",
			title: "Metaversus Landing Page",
			description: "Metaversus landing page built with Next.js, React and animated with Framer Motion.",
			descriptionRu: "Адаптивная верстка сайта на Next.JS и React, анимации выполнены с помощью библиотеки Framer Motion.",
			stack: "React, Next.js, Tailwind CSS, Framer Motion",
			img: <img src={!mode ? Metaverse : MetaverseDark} alt="Metaverse landing view on different devices" />,
			mainLink: "https://metaversus-lilac-six.vercel.app/",
			gitLink: "https://github.com/meri-maki/metaversus",
		},
		{
			name: "Weather",
			title: "Typescript Weather Forecast App",
			description: "Weather Forecast app made with React and Typescript. Includes integration with OpenWeatherAPI and additional dependencies such as Tailwind CSS, Tailwind CSS Scrollbar.",
			descriptionRu:
				"Приложение имеет интеграцию с OpenWeatherAPI, красивый и простой дизайн, с возможностью удобного поиска местоположения, В приложении можно узнать информации о текущем прогнозе погоды, а так же сведения об осадках, давлении, скорости ветра и тд.",
			stack: "React, Typescript, OpenWeather API, Vite",
			img: <img src={!mode ? Weather : WeatherDark} alt="Todo app view on different devices" />,
			mainLink: "https://ts-weather-app.vercel.app/",
			gitLink: "https://github.com/meri-maki/ts-weather-app",
		},
		{
			name: "Todo",
			title: "React Todo App",
			description:
				"Todo list app with drag and drop feature and local storage, made with React JS (ver.18). Includes integration with Bored API and additional dependencies such as dnd-kit, react-icons, react-confetti, react-textarea-autosize, react-use, react-tooltip.",
			descriptionRu:
				"Приложение списка дел с функцией drag-n-drop, local storage и интеграцией с Bored API (выполняет функцию подсказки), выполнено в интересном дизайне с приятными анимациями.",

			stack: "React, Javascript, CSS modules, Bored API, Create React App",
			img: <img src={!mode ? Todo : TodoDark} alt="Todo app view on different devices" />,
			mainLink: "https://react-todo-app-livid.vercel.app/",
			gitLink: "https://github.com/meri-maki/react-todo-app",
		},
		{
			name: "Ingrad",
			title: "Ingrad Landing Page",
			description:
				"Responsive landing page made for Ingrad company as part of digital advertising agency Digitas team. The design and functionality was later used as a base for the main company website.",
			descriptionRu:
				"Адаптивная верстка landing page для компании Иград в команде разработки digital-агентства Digitas. Дизайн и функционал использован впоследствии для главного сайта компании.",
			stack: "HTML, CSS, Javascript",
			img: <img src={!mode ? Ingrad : IngradDark} alt="Ingrad website view on different devices" />,
			mainLink: "https://meri-maki.github.io/new-ingrad/",
			gitLink: "https://github.com/meri-maki/new-ingrad",
		},
		{
			name: "Portfolio",
			title: "Personal Portfolio Website",
			description:
				"React based portfolio website made with Vite build tool. Includes Lazy loading, light/dark theme switcher, internationalization and additional dependencies such as react-scroll, react-icons, and integration with EmailJs. App architecture is based on Feature-Sliced Design",
			descriptionRu:
				"Персональное портфолио разработчика с функциями переключения светлой/темной темы и ее автоматического обнаружение, интернационализацией, lazy-loading и формой обратной связи (в интеграции с сервисом EmailJs). Архитектура приложения выстроена на основе Feature-Sliced Design.",
			stack: "React, Javascript, CSS modules, Vite, FSD, i18n",
			img: <img src={!mode ? Portfolio : PortfolioDark} alt="Portfolio website view on different devices" />,
			mainLink: "https://ana-zhuravleva-portfolio.vercel.app/",
			gitLink: "https://github.com/meri-maki/portfolio",
		},
		/*         {
            name: 'SpaceX',
            title: 'SpaceX Dashboard App [IN PROGRESS]',
            description:
                'React based SpaceX dashboard app made with Vite build tool and SpaceX API.',
            stack: 'React, Redux, Javascript, CSS modules, styled-components, Vite, SpaceX API, Axios',
            img: (
                <img
                    src={!mode ? Spacex : SpacexDark}
                    alt="SpaceX webapp view on different devices"
                />
            ),
            mainLink: '',
            gitLink: '',
        }, */
	]

	return projectsData
}
