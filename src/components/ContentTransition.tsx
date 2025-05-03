import React from 'react';
import { motion } from 'framer-motion';

interface ContentTransitionProps {
  children: React.ReactNode;
  delay?: number;
}

const ContentTransition: React.FC<ContentTransitionProps> = ({ 
  children, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default ContentTransition;