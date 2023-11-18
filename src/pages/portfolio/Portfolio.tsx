import PageHeader from "../../components/PageHeader";
import projectData from "./projectsData.json";
import Project from "../../components/Project";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <PageHeader title="Portfolio" description="View my work" />
      <div className="row">
        {projectData.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            technologies={project.technologies}
            image={project.image}
            color={project.bgcolor}
            github={project.github}
            deployed={project.deployed}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
