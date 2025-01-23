function ProjectCard({ title, description, link }) {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href={link} className="text-blue-500 mt-4 inline-block">View Project</a>
    </div>
  );
}
export default ProjectCard;
