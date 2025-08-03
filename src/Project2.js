// Project1.js
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import LiveClock from './LiveClock';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
 gsap.registerPlugin(SplitText, ScrollTrigger);






const Project2 = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "College Website",
      description: "RMKCET official Website",
      para1: "Modernizing campus presence through seamless UI and dynamic content",
      para2: "Developed the official website for RMKCET to serve as the digital front door of the institution. The site features a clean and responsive user interface, making essential information like admissions, courses, faculty, and events easily accessible. Integrated smooth animations using GSAP and crafted the frontend with HTML, CSS, and JavaScript. Designed to be mobile-friendly, SEO-optimized, and scalable for future enhancements. This project demonstrates my ability to build production-ready websites tailored to real-world institutional needs.",
      image: "/images/IMG1.avif",
      screen: '/assets/college-website.png',
      tech: ["PHP", "CSS", "JavaScript", "GSAP"],
      type: "iOS",
      gallery: [
      "/assets/image14-5.png",
      "/assets/image14-3.png",
      "/assets/image14-2.png",
      "/assets/image14-1.png"
      ]
    },
    {
      id: 2,
      title: "RouteNow",
      description: "College Bus Tracking App",
      para1: "Modernizing campus presence through seamless UI and dynamic content",
      para2: "Developed the official website for RMKCET to serve as the digital front door of the institution. The site features a clean and responsive user interface, making essential information like admissions, courses, faculty, and events easily accessible. Integrated smooth animations using GSAP and crafted the frontend with HTML, CSS, and JavaScript. Designed to be mobile-friendly, SEO-optimized, and scalable for future enhancements. This project demonstrates my ability to build production-ready websites tailored to real-world institutional needs.",
      image: "/images/map.png",
      screen: "/assets/routeNow.png",
      tech: ["React-Native", "Node.js", "PostgreSQL"],
      type: "Web",
      gallery: [
      "/assets/image14-5.png",
      "/assets/image14-3.png",
      "/assets/image14-2.png",
      "/assets/image14-1.png"
      ]
    },
    {
      id: 3,
      title: "Food Delivery App",
      description: "Cross-platform mobile app",
      para1: "Modernizing campus presence through seamless UI and dynamic content",
      para2: "Developed the official website for RMKCET to serve as the digital front door of the institution. The site features a clean and responsive user interface, making essential information like admissions, courses, faculty, and events easily accessible. Integrated smooth animations using GSAP and crafted the frontend with HTML, CSS, and JavaScript. Designed to be mobile-friendly, SEO-optimized, and scalable for future enhancements. This project demonstrates my ability to build production-ready websites tailored to real-world institutional needs.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      screen: "/assets/college-website.png",
      tech: ["React Native", "Express.js", "Docker"],
      type: "Mobile",
        gallery: [
      "/assets/image14-5.png",
      "/assets/image14-3.png",
      "/assets/image14-2.png",
      "/assets/image14-1.png"
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Creative UI/UX design",
      para1: "Modernizing campus presence through seamless UI and dynamic content",
      para2: "Developed the official website for RMKCET to serve as the digital front door of the institution. The site features a clean and responsive user interface, making essential information like admissions, courses, faculty, and events easily accessible. Integrated smooth animations using GSAP and crafted the frontend with HTML, CSS, and JavaScript. Designed to be mobile-friendly, SEO-optimized, and scalable for future enhancements. This project demonstrates my ability to build production-ready websites tailored to real-world institutional needs.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop",
      screen: "/assets/college-website.png",
      tech: ["React", "CSS", "Figma"],
      type: "Web",
        gallery: [
      "/assets/image14-5.png",
      "/assets/image14-3.png",
      "/assets/image14-2.png",
      "/assets/image14-1.png"
      ]

    }
  ];
const frameRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      frameRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: frameRef.current,
          start: '-40% 30%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const selectedProject = projects.find(p => p.id === 2);


  const renderProjects2 = () =>
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

  return (
      <div className='projectwholecontainer'>
        <div className='projectframe1'  ref={frameRef}>
          <h3 className="project1-title">{selectedProject?.title}</h3>
          <h3 className="project1-para1">{selectedProject?.para1}</h3>
           <h3 className="project1-para2">{selectedProject?.para2}</h3>
           <div className="sep-project-tech">
            <p className='project-tech-title'>TechStack</p>
          {selectedProject?.tech.map((tech, index) => (
            <span key={index} className="sep-tech-tag">{tech}</span>
          ))}
        </div>

        <img  className="project-bg-1" src={selectedProject?.image} alt={selectedProject?.title} />
          
          <img  className="project-sc-1" src={selectedProject?.screen} alt={selectedProject?.title} />
        </div>

 <div className='projectframe2'  ref={frameRef}>
        <p className='project1-title3'>Description</p>
        <p className='project1-para3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.<br /><br />The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.<br /><br /> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).<br /><br />It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.<br /><br />Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>

      <div className='projectframe3'  ref={frameRef}>
           <h3 className="project1-title4">Screenshots</h3>

          <div className="image-gallery">
            {selectedProject?.gallery.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Project ${selectedProject?.title} - ${index}`}
                className="gallery-image"
              />
            ))}
          </div>
          <h3 className="project1-title4">Timeline</h3>
                <p className='project1-para5'>Start Date:<span>13/08/24</span>&nbsp;&nbsp;- &nbsp;&nbsp;End Date:<span>13/08/24</span></p>

   <h3 className="project1-title4">More Projects</h3>

     <div className="projects-row">
        {renderProjects2()}
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

      </div>
  );
};

export default Project2;
