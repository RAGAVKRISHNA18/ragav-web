import './App.css?v=5';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import LiveClock from './LiveClock';
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useNavigate } from 'react-router-dom';

import Slideshow from './Slideshow';
import Slideshow2 from './Slideshow2';

function App() {

console.log("Trigger deploy v5");


  useEffect(() => {
  
    // Background color change on frame4 enter
   ScrollTrigger.create({
    trigger: ".frame4",
    start: "top center",
    onEnter: () => {
      gsap.to("body", { backgroundColor: "#007AFF", duration: 0.5 });
      gsap.to(".experience-t", { color: "#FFF", duration: 0.5 });
      gsap.to(".line-art-3", { stroke: "#FFF", duration: 0.5 });
      gsap.to(".exp-title, .exp-description, .exp-date", { color: "#FFF", duration: 0.5 });
    },
    onLeaveBack: () => {
      gsap.to("body", { backgroundColor: "#FFF", duration: 0.5 });
      gsap.to(".experience-t", { color: "#007AFF", duration: 0.5 });
      gsap.to(".line-art-3", { stroke: "#007AFF", duration: 0.5 });
      gsap.to(".exp-title, .exp-description, .exp-date", { color: "#007AFF", duration: 0.5 });
    }
  });

  // Frame 5 background change
  ScrollTrigger.create({
    trigger: ".frame6",
    start: "10% center",
    onEnter: () => {
      gsap.to("body", { backgroundColor: "#000" , duration: 0.5 });
    },
    onLeaveBack: () => {
      gsap.to("body", { backgroundColor: "#007AFF", duration: 0.5 });
    }
  });

  }, []);



 const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
      },
      {
        scale:1.5,
        opacity: 1,
        duration: 1,
        ease: "back.out(1)",
        repeat: -1,
      yoyo: true,
      }
    );
  }, []);




  const topicRow1 = ['Swift', 'React', 'Javascript', 'ReactNative'];
  const topicRow2 = ['Firebase', 'PostgreSQL', 'Docker', 'Typescript'];
  const topicRow3 = ['Core ML', 'Jenkins', 'Figma', 'MYSQL'];
  const topicRow4 = ['Express.js','HTML','CSS'];
  const renderTopics = (topics) =>
    topics.map((topic, index) => (
      <div key={index} className="topic-box">{topic}</div>
    ));
  const experience = [
    {
      id: 1,
      title: "Official RMKCET College Website",
      description: "Developed and deployed the official website for RMKCET as a solo project. Designed and built the site architecture, user interface, and backend workflows. The website is currently live and actively used by faculty and students.",
      Role: "Frontend Developer",
      date: "22/12/24 - 22/4/25"
    },
    {
      id: 2,
      title: "MSME Hackathon – Winner & Developer",
      description: "Developed a [brief solution description, e.g., “smart inventory management system for micro-enterprises”] that won the national MSME hackathon. Led development and UI/UX while working in a team of 3. Recognized for innovation and practical impact.",
      Role: "Frontend Developer",
      date: "22/05/25 - present"
    },
    {
      id: 3,
      title: "Artificial Intelligence Intern – [ToolAhead]",
      description: "Contributed to AI model training, data preprocessing, and prototype building for internal tools. Gained hands-on experience with supervised learning, basic NLP, and Python-based ML workflows.",
      Role: "Artificial Intelligence Intern",
      date: "22/12/24 - 22/4/25"
    },
    {
      id: 4,
      title: "WageTracker – iOS App for Civil Labour Management",
      description: "Currently building a real-world SwiftUI app for a civil engineering firm to track daily labour attendance and weekly wages across multiple sites. Features include site management, wage logs, and analytics dashboard.",
      Role: "iOS Developer",
      date: "22/12/24 - present"
    }
  ];


  const projects = [
    {
      id: 1,
      title: "College Website",
      description: "RMKCET official Website",
      image: "/images/IMG1.avif",
      screen: "./assets/college-website.png",
      tech: ["PHP", "CSS", "JavaScript", "GSAP"],
      type: "iOS"
    },
    {
      id: 2,
      title: "RouteNow",
      description: "College Bus Tracking App",
      image: "/images/map.png",
       screen: "./assets/routeNow.png",
      tech: ["React-Native", "Node.js", "PostgreSQL"],
      type: "Web"
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "Cross-platform mobile app",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
       screen: "./assets/college-website.png",
      tech: ["React Native", "Express.js", "Docker"],
      type: "Mobile"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Creative UI/UX design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
       screen: "./assets/college-website.png",
      tech: ["React", "CSS", "Figma"],
      type: "Web"
    }
  ];

const navigate = useNavigate();

  const renderProjects = () =>
    projects.map((project) => (
      <div
        key={project.id}
        className="project-card"
        onClick={() => navigate(`/project/${project.id}`)}
        style={{ cursor: 'pointer' }}
      >
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="project-screen">
          <img src={project.screen} alt={project.title} />
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    ));

    const renderExperience = () =>
       experience.map((experience) => (
        <div>
        <div className='exp-cont'>
            <div className='flex-1'>
                  <h3 className="exp-title">{experience.title}</h3>
                  {/*<p className="exp-description">{experience.description}</p>*/}
              </div>
              <div className='flex-3'>
                <p className="exp-description">{experience.Role}</p>
              </div>
              <div className='flex-2'>
                  <p className='exp-date'>{experience.date}</p>
            </div>
        </div>
        </div>
    ));


  return (
    <div className="whole-container">
          <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      <div className='frame1'>

      <div className='flex-1-frame1'>
            <img className='pf-img' src='/gallery/img3.jpg' alt='pf-img'></img>
            <h1 className='heading1'>Hi, I am Ragav -<br />
            Web & iOS Developer • UI/UX Designer</h1>

            <h3 className='heading-2'>Transforming ideas into elegant, functional apps with compelling user experiences.</h3>
        </div>

      {/* <div className='flex-2-frame1'>
          <div ></div>

            <div className='img-gallery-card'>
              <Slideshow/>
            </div>

             <div className='map'>
                <img className='map-img' src="./assets/map.png" alt="location" />
                <svg className='pin' xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <g filter="url(#filter0_d_348_35)">
                      <circle cx="10.4359" cy="8.06915" r="5.79718" fill="white"/>
                    </g>
                    <circle cx="10.4359" cy="8.06915" r="4.18195" fill="#3D77EB"/>
                    <defs>
                      <filter id="filter0_d_348_35" x="0.638672" y="0.271973" width="19.5938" height="19.5944" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_348_35"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_348_35" result="shape"/>
                      </filter>
                    </defs>
                  </svg>

                <svg className="map-zoom-crcl" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <circle cx="10.5625" cy="10.9153" r="10" fill="#4F8AFF" fill-opacity="0.46"/>
                </svg>

                <p className='crnt-text'>📍Currently At</p>
              </div>

          <div className='proj-gallery-card'>
              <Slideshow2/>
            </div>

      </div> */}
      </div>

      <div className='frame2'>
        <p className='para2'>
         Transforming ideas into elegant, functional apps with compelling user experiences.
          I design and build modern, user-first apps and websites. With a passion for clean code and thoughtful design, I turn ideas into intuitive digital experiences through continuous learning, creative exploration, and a deep focus on detail. 
          <br /><br />
          I love experimenting with new tools and frameworks to push boundaries, improve usability, and craft solutions that not only look great — but feel right to use.
</p>
        <div className='topicslist'>
          <ul>
            <li><a href="#home">Web development</a></li>
            <li><a href="#about">iOS Development</a></li>
            <li><a href="#projects">UI/UX designing</a></li>
          </ul>
        </div>
        <div className="topicsbox">
          <div className="topic-row">{renderTopics(topicRow1)}</div>
          <div className="topic-row">{renderTopics(topicRow2)}</div>
          <div className="topic-row">{renderTopics(topicRow3)}</div>
          <div className="topic-row">{renderTopics(topicRow4)}</div>
        </div>
      </div>

      <div className='frame3'>
        <div className="projects-container">
          <div className="projects-row">
            {renderProjects()}
          </div>
        </div>
      </div>

      <div className='frame4'>
             <h1 className="experience-t">
          Experience
        </h1>

       <div className='experience-container'>
           {renderExperience()}
        </div>

      </div>
    

          <img className='tape-img' src="./assets/Group 29.svg" alt="location" />

<div className='frame5'>
 <h1 className="testimonials-t">Testimonials</h1>

</div>

<div className='frame6'>
                
        <p className='contact-para'>I’m open to new opportunities — let’s connect at<br /><span>ragavkrishna4535@gmail.com</span></p> 
        <h1 className='contact-t'>CONTACT</h1>

         <div className='contact-flex'>
              <div className='contact-t-flex' >
                <p className='contact-flex-t'>Socials: <span>&nbsp;&nbsp;&nbsp;</span> </p>
                <div className='contact-p-flex'>
                  <p className='contact-flex-p'>LinkedIn</p>
                  <p className='contact-flex-p'>Medium</p>
                  <p className='contact-flex-p'>GitHub</p>
                  </div>
              </div>

              <div className='contact-t-flex' >
                  <p className='contact-flex-t'>Location:&nbsp;</p>
                  <div className='contact-p-flex'>
                  <p className='contact-flex-p'>Chennai, IND</p>
                  <LiveClock className="contact-flex-p"  />
                  </div>
              </div>
              <div className='contact-t-flex'>
                <p className='contact-flex-t'>Expertise:</p>
                <div className='contact-p-flex'>
                  <p className='contact-flex-p'>web development</p>
                  <p className='contact-flex-p'>Ui/Ux</p>
                  <p className='contact-flex-p'>Instagram</p>
                  </div>
              </div>
              </div>
              <div className='contact-flex-bottom'>
                  <p className='contact-flex-p-2'>© 2025 Ragav. All rights reserved.</p>

                  <p className='contact-flex-p-2'> Designed in Figma | Built with React, GSAP</p>
              </div>

              </div>
</div>
  );
}

export default App;
