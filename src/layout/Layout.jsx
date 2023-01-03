import { useState } from "react";
import { ReactComponent as IconBlack } from "../assets/IconBlack.svg";
import { ReactComponent as Github } from "../assets/GithubIcon.svg";
import { ReactComponent as Linkedin } from "../assets/LinkedinIcon.svg";
import { ReactComponent as Twitter } from "../assets/TwitterIcon.svg";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Layout(props) {
  return (
    <div className="Layout h-screen flex flex-col justify-between bg-spring-leaves-50 p-16">
      <div className="navbar flex items-center justify-between">
        <div className="icon">
          <IconBlack />
        </div>
        <div className="flex gap-4">
          <h2>Home</h2>
          <h2>Skills</h2>
          <h2>Projects</h2>
          <h2>Contact</h2>
          <h2>Blog</h2>
        </div>
      </div>
      <div>{props.children}</div>
      <div className="footer flex items-center justify-between">
        <div className="socialIcons flex items-center gap-5">
            <Github/>
            <Linkedin/>
            <Twitter/>
        </div>
        <h2>montoyar32@gmail.com</h2>
      </div>
    </div>
  );
}

export default Layout;
