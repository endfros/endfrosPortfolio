import { useState } from "react";
import { ReactComponent as IconBlack } from "./assets/IconBlack.svg";
import { ReactComponent as Github } from "./assets/GithubIcon.svg";
import { ReactComponent as Linkedin } from "./assets/LinkedinIcon.svg";
import { ReactComponent as Twitter } from "./assets/TwitterIcon.svg";
import { ReactComponent as Aws } from "./assets/AwsIcon.svg";
import { ReactComponent as Bootstrap } from "./assets/BootstrapIcon.svg";
import { ReactComponent as Cloud } from "./assets/CloudIcon.svg";
import { ReactComponent as Express } from "./assets/ExpressIcon.svg";
import { ReactComponent as Javascript } from "./assets/JavascriptIcon.svg";
import { ReactComponent as Mongo } from "./assets/MongoIcon.svg";
import { ReactComponent as Next } from "./assets/NextIcon.svg";
import { ReactComponent as Node } from "./assets/NodeIcon.svg";
import { ReactComponent as ReactIcon } from "./assets/ReactIcon.svg";
import { ReactComponent as Sass } from "./assets/SassIcon.svg";
import { ReactComponent as Tailwind } from "./assets/TailwindIcon.svg";
import { ReactComponent as Vercel } from "./assets/VercelIcon.svg";

import FitbuddyImage from "./assets/FitbuddyImage.png";

import { CardImage } from "./components/CardImage";

import { Link, Element, Events, animateScroll as scroll } from "react-scroll";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="navbar z-50 fixed flex items-center justify-between w-screen pt-16 px-16 pb-4 bg-gradient-to-b from-spring-leaves-50 via-spring-leaves-50">
        <div className="icon">
          <IconBlack />
        </div>
        <div className="flex gap-4">
          <Link
            activeClass="active"
            className="home cursor-pointer"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="skills cursor-pointer"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            className="projects cursor-pointer"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            className="contact cursor-pointer"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          <h2>Blog</h2>
        </div>
      </div>
      <div className="Layout flex flex-col w-screen justify-between bg-spring-leaves-50 px-16">
        <div className="my-12">
          <div>
            <Element
              name="home"
              className="element flex flex-col h-screen justify-center"
            >
              <h2 className="font-bold text-3xl my-4">I'm Rodrigo Montoya</h2>
              <p className="my-4">
                I'm an enthusiastic mechatronics engineer and frontend developer
                based in Peru.
              </p>
              <p className="my-4">
                I'm passionate about coding, music and design, and I'm
                constantly striving to improve my work. Building new projects is
                something that I love to do, and I'm eager to discover more of
                what I can create. At the moment, I'm working on a few personal
                projects, but I am open to new opportunities.
              </p>
            </Element>
          </div>
          <div>
            <Element
              name="skills"
              className="element flex flex-col h-screen justify-center"
            >
              <h2 className="font-bold text-3xl my-4">Skills</h2>
              <section className="flex flex-row flex-wrap justify-center">
                <div className="m-8 flex flex-row items-center">
                  <ReactIcon className="scale-250" />
                  <h2 className="mx-8">React</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Next className="scale-250" />
                  <h2 className="mx-8">Next JS</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Tailwind className="scale-250" />
                  <h2 className="mx-8">Tailwind</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Bootstrap className="scale-250" />
                  <h2 className="mx-8">Bootstrap</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Javascript className="scale-250" />
                  <h2 className="mx-8">Javascript</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Sass className="scale-250" />
                  <h2 className="mx-8">Sass</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Aws className="scale-250" />
                  <h2 className="mx-8">Amazon Web Services</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Cloud className="scale-250" />
                  <h2 className="mx-8">Google Cloud</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Express className="scale-250" />
                  <h2 className="mx-8">Express</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Node className="scale-250" />
                  <h2 className="mx-8">Node JS</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Mongo className="scale-250" />
                  <h2 className="mx-8">Mongo DB</h2>
                </div>
                <div className="m-8 flex flex-row items-center">
                  <Vercel className="scale-250" />
                  <h2 className="mx-8">Vercel</h2>
                </div>
              </section>
            </Element>
          </div>
          <div>
            <Element
              name="projects"
              className="element flex flex-col h-screen justify-center"
            >
              <h2 className="font-bold text-3xl my-4">Projects</h2>
              <p className="my-4">
                During the last few years I have been developing several
                personal projects. In June 2022 I started a bootcamp in web
                programming where I developed a big project called Fitbuddy,
                making use of all the tools I have learned. Currently I am
                developing a platform for nutritionists in Mexico and a landing
                page for a pastry store in Peru.
              </p>
              <div className="flex flex-row gap-6">
                <CardImage
                  title={"Fitbuddy"}
                  description={
                    "A web app created to find people to practice excercice with in yout local area. I developed all the frontend as well as the API's integration with the UI."
                  }
                  link={"https://github.com/Fit-Buddy-RH/frontend-fitbuddy"}
                  image={FitbuddyImage}
                />
                <div className="flex flex-col justify-evenly">
                  <CardImage
                    className="shrink"
                    title={"Dev.to clone"}
                    description={
                      "Realized during the bootcamp. A dev.to clone integrated with firestore."
                    }
                    link={"https://github.com/endfros/reto-react-devto"}
                  />
                  <CardImage
                    className="shrink"
                    title={"FANPED"}
                    description={
                      "A platform designed to keep a patient registry for nutritionists. Currently in development"
                    }
                    link={"https://github.com/endfros/reto-react-devto"}
                  />
                </div>
              </div>
            </Element>
          </div>
          <div>
            <Element
              name="contact"
              className="element flex flex-col h-screen justify-center"
            >
              <h2 className="font-bold text-3xl my-4">Contact</h2>
              <p className="my-4">
                Do you want to contact me? You can always reach me on Twitter or
                LinkedIn, or if you want you can send me an email to
                montoyar32@gmail.com. You also have my Github if you want to see
                the projects I'm working on.
              </p>
            </Element>
          </div>
        </div>
        <div className="footer sticky flex bottom-0 items-center justify-between pb-16 pt-4 bg-gradient-to-t from-spring-leaves-50 via-spring-leaves-50">
          <div className="socialIcons flex items-center gap-5">
            <a href="https://github.com/endfros" target="_blank">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/rodrigomontvill/" target="_blank">
              <Linkedin />
            </a>
            <a href="https://twitter.com/ENDfros" target="_blank">
              <Twitter />
            </a>
          </div>
          <h2>montoyar32@gmail.com</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
