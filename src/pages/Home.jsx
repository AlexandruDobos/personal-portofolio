import { motion } from "framer-motion";

const text = "Hello! I am Alexandru";

function Home() {


  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-center text-center md:text-left">
        <div className="w-full md:w-1/2 flex justify-center">
          {/* <img src="/profilePhoto.png" alt="Alexandru Dobos" className="w-[50%] h-auto md:w-[50%] md:rounded-2xl rounded-full" /> */}
          {/* <motion.img
            src="/profilePhoto.png"
            alt="Alexandru Dobos"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-[50%] h-auto md:w-[50%] md:rounded-2xl rounded-full"
          /> */}
          {/* <img
            src="/profilePhoto.png"
            alt="Alexandru Dobos"
            className="w-[50%] h-auto md:w-[50%] md:rounded-2xl rounded-full transition-opacity duration-1000 opacity-0"
            onLoad={(e) => e.target.classList.remove("opacity-0")}
          /> */}

          {/* <motion.img
            src="/profilePhoto.png"
            alt="Alexandru Dobos"
            className="w-[50%] h-auto md:w-[50%] md:rounded-2xl rounded-full"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          /> */}
          <motion.img
            src="/profilePhoto.png"
            alt="Alexandru Dobos"
            className="w-[50%] h-auto md:w-[50%] md:rounded-2xl rounded-full"
            animate={{ opacity: 1, x: [-100, 100, 0] }} // Se duce la dreapta și revine
            transition={{ duration: 1, ease: "easeInOut" }} // Face totul mai fluid
          />
        </div>
        <div className="w-full md:w-1/2 px-8">
          <motion.h1
            className="text-center text-4xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-center text-gray-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Java Software Engineer | React & Spring Boot Enthusiast | Problem Solver
          </motion.p>
          <motion.p
            className="mt-2 text-gray-600"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            I'm a passionate Java Software Engineer with a strong focus on clean code, scalable architectures, and microservices development. With hands-on experience in Java, Spring Boot, RESTful APIs, Docker, and RabbitMQ, I specialize in designing and optimizing backend systems that power high-performance applications.

            My expertise includes building robust microservices, enhancing database efficiency with Hibernate/JPA, and ensuring system stability through performance monitoring. I thrive in Agile environments, contributing to cutting-edge projects while continuously upskilling with the latest technologies.

            Let's connect and build something amazing together!
          </motion.p>
          {/* <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded ">Explore Portfolio</button> */}
        </div>
      </div>
    </section>
  );
}

export default Home;