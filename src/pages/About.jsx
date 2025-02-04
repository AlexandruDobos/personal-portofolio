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
    I am <strong>Alexandru Dobos</strong>, a <strong>Java Software Engineer</strong> passionate about developing <strong>scalable, high-performance applications</strong>. My expertise includes <strong>RESTful API design, microservices, and database optimization</strong> using technologies like <strong>Java, Spring Boot, Hibernate/JPA, Docker, and RabbitMQ</strong>.
  </motion.p>
  <motion.p 
    className="mt-4 text-gray-700"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    My journey began with a <strong>Bachelor's Degree in Computer Science</strong> from Alexandru Ioan Cuza University, followed by a <strong>Master’s in E-Business</strong> at The Bucharest University of Economic Studies. Professionally, I work at <strong>Infosys</strong>, where I contribute to backend development, ensuring system efficiency and stability.
  </motion.p>
  <motion.p 
    className="mt-4 text-gray-700"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    My technical stack includes <strong>Spring Boot, PostgreSQL, MySQL, JUnit, Mockito, and Git</strong>. I also have experience with <strong>frontend technologies</strong> like React and Angular. My passion for innovation has led me to develop personal projects, including a <strong>football match prediction web app</strong>.
  </motion.p>
  <motion.p 
    className="mt-4 text-gray-700"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    I thrive in <strong>Agile environments</strong>, contributing to fast-paced development cycles while continuously upskilling through certifications in <strong>Java, Spring Boot, and Angular</strong>. I’m always eager to take on <strong>complex challenges and drive innovation</strong>.
  </motion.p>
</section>

    );
  }
  
  export default About;
