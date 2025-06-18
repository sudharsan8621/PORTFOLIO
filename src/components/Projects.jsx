import websiteImg1 from "../assets/Screenshot (20).png";
import websiteImg2 from "../assets/Screenshot (22).png";
import websiteImg3 from "../assets/Screenshot (21).png";

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: "A Mine E-commerce Website.",
        link: "https://megamart-4870f8.netlify.app/",
      },
      {
        image: websiteImg2,
        description: "A simple image search app using the Unsplash API",
        link: "https://image-search-engin-pixie-800930.netlify.app/",
      },
      {
        image: websiteImg3,
        description: "landing page with login form using HTML & CSS.",
        link: "https://resilient-starship-eb36d5.netlify.app/",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex  flex-col py-20 px-5 justify-center bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best frontend projects, built using React,
            HTML, CSS, and JavaScript. Check them out!
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project) => (
            <div className="relative">
              <img className="h-[200px] w-[500px]" src={project.image} />
              <div className="project-desc">
                <p className="text-center px-5 py-5">{project.description}</p>
                <div className="flex justify-center">
                  <a className="btn" target="_blank" href={project.link}>
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
