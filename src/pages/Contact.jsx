import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";

function Contact() {
  // Animation Variants
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className="container mx-auto py-20 px-4 flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <motion.h2 
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Contact
        </motion.h2>

        <p className="text-gray-600 text-center mb-8">
          Feel free to contact me through the following channels.
        </p>

        <div className="space-y-6">
          {/* Email */}
          <motion.div 
            className="flex items-center space-x-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <FaEnvelope className="text-blue-500 text-2xl w-8" />
            <p className="text-gray-800 font-medium">
              <a href="mailto:dobosalexandru2502@gmail.com" className="hover:underline">
                dobosalexandru2502@gmail.com
              </a>
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div 
            className="flex items-center space-x-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }} // Small delay for staggered effect
          >
            <FaPhone className="text-blue-500 text-2xl w-8" />
            <p className="text-gray-800 font-medium">
              <a href="tel:+40733305547" className="hover:underline">
                +40 733305547
              </a>
            </p>
          </motion.div>

          {/* Location */}
          <motion.div 
            className="flex items-center space-x-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <FaMapMarkerAlt className="text-blue-500 text-2xl w-8" />
            <p className="text-gray-800 font-medium">Bucharest, Romania</p>
          </motion.div>

          {/* Facebook */}
          <motion.div 
            className="flex items-center space-x-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <FaFacebook className="text-blue-500 text-2xl w-8" />
            <a 
              href="https://facebook.com/alexdobos1923/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-800 font-medium hover:underline"
            >
              Facebook Profile
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
