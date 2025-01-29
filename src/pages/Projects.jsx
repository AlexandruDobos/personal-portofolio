import { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: 'KickerConnect',
      shortDescription: 'A mobile app for football enthusiasts to organize and join matches.',
      longDescription: 'KickerConnect is a mobile application designed for football enthusiasts to connect, organize games, and foster a community centered around the sport. Built using modern technologies, it bridges the gap between individuals looking to play and enjoy football. Features include user registration, group event management, and a user-friendly interface. The app is developed using React Native for the frontend, Spring Boot with Java for the backend, and MySQL for data storage.',
      image: '/kickerConnectLogo.png',
      github: 'https://github.com/AlexandruDobos/kickerconnect',
      youtube: 'https://youtu.be/YurZ7IWYxs0'
    },
    {
      title: 'SQL Game',
      shortDescription: 'An interactive game for learning and practicing SQL queries.',
      longDescription: 'SQL Game is a web application designed to help users practice and improve their database query skills. It is suitable for beginners and experienced users who want to refresh their SQL knowledge. The platform includes different difficulty levels, theoretical and practical questions, and a reward-based system where users earn points for correct answers. The application is built using PHP and MySQL for the backend, with a React-based frontend.',
      image: '/sqlGameLogo.png',
      github: 'https://github.com/AlexandruDobos/SQL-Game',
      youtube: 'https://www.youtube.com/watch?v=GB0d3855X4Y'
    },
    {
      title: 'Football Matches - Prediction App',
      shortDescription: 'A web app for viewing football matches and making predictions.',
      longDescription: 'Football Matches - Prediction App is a web-based platform that allows users to view football matches, add predictions, and analyze match statistics. The app integrates data from the Football API Sports and provides features such as match viewer, custom predictions, bet ticket management, and an admin panel for result validation. The backend is powered by Node.js, while the frontend is built with React.',
      image: '/footballPredictionLogo.jpg',
      github: 'https://github.com/AlexandruDobos/football-matches',
      youtube: '#'
    }
  ];

  return (
    <section className="container mx-auto py-24 px-8">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="flex justify-center">
        {expandedProject !== null ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="border rounded-lg shadow-lg p-6 bg-white max-w-2xl w-full mx-auto text-center flex flex-col items-center relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 p-2 rounded-full bg-white shadow-lg"
              onClick={() => setExpandedProject(null)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <img src={projects[expandedProject].image} alt={projects[expandedProject].title} className="w-full h-auto max-h-96 object-contain rounded-lg mb-4" />
            <h3 className="text-lg font-bold">{projects[expandedProject].title}</h3>
            <p className="mt-2 text-gray-600">{projects[expandedProject].shortDescription}</p>
            <p className="mt-2 text-gray-700">{projects[expandedProject].longDescription}</p>
            <a href={projects[expandedProject].github} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 underline">GitHub Project</a>
            {projects[expandedProject].youtube !== '#' && (
              <a href={projects[expandedProject].youtube} target="_blank" rel="noopener noreferrer" className="mt-4 text-red-500 underline">YouTube Presentation</a>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index} // Pasăm indexul pentru întârzierea animației
                onExpand={() => setExpandedProject(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
