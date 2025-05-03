import React from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children, 
  title, 
  className = '' 
}) => {
  return (
    <section className={`section ${className}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {title && (
            <h2 className="heading-with-line text-2xl md:text-3xl font-semibold mb-8">{title}</h2>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionContainer;