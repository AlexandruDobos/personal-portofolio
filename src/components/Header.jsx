import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkVariants = (colors) => ({
    animate: {
      color: colors,
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  });

  const textAnimationVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <header className="bg-gray-800 text-white fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <motion.div variants={linkVariants(["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD700"])} animate="animate">
          <Link to="/" className="text-xl font-bold">Alexandru Dobos</Link>
        </motion.div>
        <div className="md:hidden ml-auto" onClick={toggleMenu}>
          <Bars3Icon className="h-6 w-6 text-white" />
        </div>
        <nav className="hidden md:flex space-x-8">
          <motion.div variants={linkVariants(["#33FF57", "#FF5733", "#FFBD33"])} animate="animate">
            <Link to="/" className="text-large">Home</Link>
          </motion.div>
          <motion.div variants={linkVariants(["#3357FF", "#33FF57", "#FF33A1"])} animate="animate">
            <Link to="/about" className="text-large">About Me</Link>
          </motion.div>
          <motion.div variants={linkVariants(["#FFBD33", "#3357FF", "#FF5733"])} animate="animate">
            <Link to="/projects" className="text-large">Projects</Link>
          </motion.div>
          <motion.div variants={linkVariants(["#33FF57", "#FF33A1", "#3357FF"])} animate="animate">
            <Link to="/contact" className="text-large">Contact</Link>
          </motion.div>
        </nav>
      </div>
      {isOpen && (
        <nav className="absolute top-0 left-0 w-full h-full bg-gray-800 flex justify-center items-center">
          <div className="flex space-x-8">
            <motion.div variants={linkVariants(["#33FF57", "#FF5733", "#FFBD33"])} animate="animate">
              <Link to="/" className="text-large" onClick={toggleMenu}>Home</Link>
            </motion.div>
            <motion.div variants={linkVariants(["#3357FF", "#33FF57", "#FF33A1"])} animate="animate">
              <Link to="/about" className="text-large" onClick={toggleMenu}>About Me</Link>
            </motion.div>
            <motion.div variants={linkVariants(["#FFBD33", "#3357FF", "#FF5733"])} animate="animate">
              <Link to="/projects" className="text-large" onClick={toggleMenu}>Projects</Link>
            </motion.div>
            <motion.div variants={linkVariants(["#33FF57", "#FF33A1", "#3357FF"])} animate="animate">
              <Link to="/contact" className="text-large" onClick={toggleMenu}>Contact</Link>
            </motion.div>
            <div className="md:hidden ml-auto flex justify-center items-center" onClick={toggleMenu}>
              <XMarkIcon className="h-5 w-5 text-white" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
