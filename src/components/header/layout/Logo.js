import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <MotionLink
        href="/"
        className="w-16 h-16 flex items-center justify-center bg-dark text-light rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        CB
      </MotionLink>
    </div>
  );
};

export default Logo;
