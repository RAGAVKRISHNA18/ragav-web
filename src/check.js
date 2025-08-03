import './App.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import LiveClock from './LiveClock';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Initial hide of the line
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Animate line drawing
gsap.to(path, {
  strokeDashoffset: 0,
  duration: 6,
  scrollTrigger: {
    trigger: ".frame4",
    start: "top 70%",
    end: "bottom 20%",       // You can tweak this
    scrub: true,             // 👈 this is the magic line
  },
  ease: "none",              // Use "none" for smooth scrubbing
});



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
      gsap.to("body", { backgroundColor: "#E2E0DA", duration: 0.5 });
      gsap.to(".experience-t", { color: "#007AFF", duration: 0.5 });
      gsap.to(".line-art-3", { stroke: "#007AFF", duration: 0.5 });
      gsap.to(".exp-title, .exp-description, .exp-date", { color: "#007AFF", duration: 0.5 });
    }
  });

  // Frame 5 background change
  ScrollTrigger.create({
    trigger: ".frame5",
    start: "top center",
    onEnter: () => {
      gsap.to("body", { backgroundColor: "#000" , duration: 0.5 });
    },
    onLeaveBack: () => {
      gsap.to("body", { backgroundColor: "#007AFF", duration: 0.5 });
    }
  });

  }, []);


  useEffect(() => {
    gsap.utils.toArray(".img").forEach((img) => {
      gsap.fromTo(
        img,
        { y: 50 },
        {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const topicRow1 = ['Swift', 'React', 'Javascript', 'ReactNative','Express.js'];
  const topicRow2 = ['Firebase', 'PostgreSQL', 'Docker', 'Typescript', 'HTML','CSS'];
  const topicRow3 = ['Core ML', 'Jenkins', 'Figma', 'MYSQL'];

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
      title: "E-Commerce iOS App",
      description: "Personalized shopping app",
      image: "/images/IMG1.avif",
      tech: ["Swift", "Core ML", "Firebase"],
      type: "iOS"
    },
    {
      id: 2,
      title: "React Dashboard",
      description: "Modern admin dashboard",
      image: "/images/map.png",
      tech: ["React", "Node.js", "PostgreSQL"],
      type: "Web"
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "Cross-platform mobile app",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      tech: ["React Native", "Express.js", "Docker"],
      type: "Mobile"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Creative UI/UX design",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      tech: ["React", "CSS", "Figma"],
      type: "Web"
    }
  ];

  const renderProjects = () =>
    projects.map((project) => (
      <div key={project.id} className="project-card">
        <div className="project-image">
          <img src={project.image} alt={project.title} />
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
      <div className='frame1'>
        <h1 className="heading1">Hey<br />there!</h1>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className='imgs'>
          <div className='img img1'></div>
          <div className='img img2'></div>
          <div className='img img3'></div>
          <div className='img img4'></div>
          <div className='img img5'></div>
        </div>
        <p className='para2'>
          Hey, I’m B.S. Ragav Krishna — a Computer Science student passionate about iOS and web development, with a sharp eye for UI/UX design.
          I love building user-focused digital products that blend clean code with thoughtful, modern design.
          I’m an explorative thinker and a self-learner, always diving into new tools, frameworks, and creative workflows to level up my craft.
        </p>
      </div>

      <div className='frame2'>
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
<svg xmlns="http://www.w3.org/2000/svg" width="max-content" height="max-content" viewBox="0 0 1974 1676" fill="none" className='line-art'>
  <path className='line-art-3' ref={pathRef} opacity="0.5" d="M1503.37 5.35327C1503.37 5.35327 1479.44 115.429 1519.87 157.693C1573.95 214.222 1650.34 67.9421 1711.31 116.146C1772.69 164.68 1670.65 264.621 1724.51 322.151C1770.21 370.968 1832.32 322.693 1887.89 358.505C1954.16 401.208 1848.28 480.378 1864.79 546.661C1881.29 612.945 1973.39 679.584 1942.35 743.05C1901.92 825.729 1741.01 837.119 1741.01 837.119C1741.01 837.119 1620.94 836.513 1589.18 927.887C1552.75 1032.7 1723.91 1071.33 1716.26 1182.04C1704.86 1346.89 1377.94 1436.19 1377.94 1436.19L1231.06 1477.45L659.692 1591.81L2.69336 1650.47" stroke="white" stroke-width="50"/>
</svg>
      </div>

<div className='frame5'>
 <h1 className="testimonials-t">Testimonials</h1>

</div>

<div className='frame6'>
                
        <p className='contact-para'>I’m open to new opportunities — let’s connect at<br /><span>ragavkrishna4535@gmail.com</span></p> 
        <h1 className='contact-t'>CONTACT</h1>
              </div>
              <div className='contact-flex'>
              <div className='contact-t-flex'>
                <p className='contact-flex-t'>Socials:</p>
                <div className='contact-p-flex'>
                  <p className='contact-flex-p'>LinkedIn</p>
                  <p className='contact-flex-p'>Medium</p>
                  <p className='contact-flex-p'>GitHub</p>
                  </div>
              </div>

              <div className='contact-t-flex'>
                  <p className='contact-flex-t'>Location:</p>
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
                  <p className='contact-flex-p'>© 2025 Ragav. All rights reserved.</p>

                  <p className='contact-flex-p'> Designed in Figma | Built with React, GSAP</p>
              </div>
</div>
  );
}

export default App;
