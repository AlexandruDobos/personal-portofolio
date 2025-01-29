import { motion } from 'framer-motion';

function ProjectCard({ project, onExpand, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="border rounded-lg shadow-lg p-6 bg-white max-w-md mx-auto flex flex-col items-center"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-bold text-center">{project.title}</h3>
      <p className="mt-2 text-gray-600 text-center">{project.shortDescription}</p>
      <button
        className="mt-4 text-blue-500 underline block mx-auto"
        onClick={() => onExpand()}
      >
        Read more
      </button>
    </motion.div>
  );
}

export default ProjectCard;
