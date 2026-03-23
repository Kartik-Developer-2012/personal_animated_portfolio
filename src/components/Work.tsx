import { useRef, useLayoutEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "QuickXPos Salon",
    category: "Salon Management [Web & App]",
    tools: "React JS, Flutter, node js, firebase",
    image: "/images/placeholder.webp",
  },
  {
    title: "QuickXPos Restaurant",
    category: "Restaurant Management [Web]",
    tools: "React JS, node js, express, postgres",
    image: "/images/placeholder.webp",
  },
  {
    title: "QuickXPos Admin",
    category: "Super Admin Dashboard",
    tools: "React JS, Data Analytics, Roles",
    image: "/images/placeholder.webp",
  },
  {
    title: "Focus",
    category: "Productivity App",
    tools: "Flutter, SQLite, Notes + Todo",
    image: "/images/placeholder.webp",
  },
  {
    title: "Atmos",
    category: "360° Weather App",
    tools: "Flutter, OpenWeather API, 3D Assets",
    image: "/images/placeholder.webp",
  },
  {
    title: "DocuFlow",
    category: "PDF Utility App",
    tools: "Flutter, PDF Manipulation, In-Progress",
    image: "/images/placeholder.webp",
  },
  {
    title: "Face2Face",
    category: "Indian Matrimony App",
    tools: "Flutter, Real-time Chat, User Profiles",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.innerWidth <= 1024) return;

    const track = trackRef.current;
    if (!track) return;

    const totalSlides = projects.length;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -((totalSlides - 1) * 100),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${window.innerWidth * (totalSlides - 1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="work-pin-container">
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>

          <div className="carousel-wrapper">
            <div className="carousel-track-container">
              <div className="carousel-track" ref={trackRef}>
                {projects.map((project, index) => (
                  <div className="carousel-slide" key={index}>
                    <div className="carousel-content">
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>0{index + 1}</h3>
                        </div>
                        <div className="carousel-details">
                          <h4>{project.title}</h4>
                          <p className="carousel-category">{project.category}</p>
                          <div className="carousel-tools">
                            <span className="tools-label">Tools & Features</span>
                            <p>{project.tools}</p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-image-wrapper">
                        <WorkImage image={project.image} alt={project.title} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
