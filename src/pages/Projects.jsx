import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = [
    { title: 'E-commerce Site', description: 'A modern e-commerce platform.', link: '#' },
    { title: 'Weather App', description: 'An application for weather forecasting.', link: '#' },
  ];

  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
