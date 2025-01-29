import { motion } from "framer-motion";

function About() {
    return (
      <section className="container mx-auto py-20 w-full md:w-1/2 px-8 border rounded-lg shadow-lg mt-20 mb-5">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <motion.p 
          className="mt-4 text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          I am a <strong>Junior Backend Developer</strong> with experience in <strong>Java, Spring Boot, Express.js</strong>, and database management using <strong>MySQL and PostgreSQL</strong>.
          My journey started with a <strong>Bachelor's Degree in Computer Science</strong> from Alexandru Ioan Cuza University, followed by a <strong>Master's Degree in E-Business</strong> at The Bucharest University of Economic Studies.
        </motion.p>
        <motion.p 
          className="mt-4 text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          My expertise includes <strong>API development, unit testing with JUnit</strong>, and version control using <strong>Git</strong>. I am also familiar with frontend frameworks such as <strong>React</strong> and <strong>Angular</strong>.
        </motion.p>
        <motion.p 
          className="mt-4 text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Professionally, I have been working at <strong>Infosys</strong>, where I contributed to backend implementation and testing in an internal project.
          Additionally, I developed multiple personal projects, including a <strong>football match prediction web app</strong> and a <strong>job search platform backend</strong>.
        </motion.p>
        <motion.p 
          className="mt-4 text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          I am eager to learn and grow in the tech industry, continuously improving my skills and collaborating on <strong>innovative projects</strong>.
        </motion.p>
      </section>
    );
  }
  
  export default About;
