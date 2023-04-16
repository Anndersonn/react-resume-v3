import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon } from "../../Icons";

const ContactLinks = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap">
      <motion.a
        href="/"
        target="_blank"
        className="w-6 mx-3"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <GithubIcon />
      </motion.a>
      <motion.a
        href="/"
        target="_blank"
        className="w-6 "
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <LinkedInIcon />
      </motion.a>
    </nav>
  );
};

export default ContactLinks;
