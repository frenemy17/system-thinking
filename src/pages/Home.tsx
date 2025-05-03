import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import ContentTransition from '../components/ContentTransition';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section with Placeholder */}
      <div className="min-h-screen flex items-center justify-center pt-20 pb-10 bg-gradient-to-b from-dark to-dark-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Digital Addiction Among Teenagers in India
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12"
            >
              A System Thinking Approach
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full max-w-4xl h-80 md:h-[500px] rounded-lg bg-dark-lighter flex items-center justify-center border border-dark-lighter"
            >
              <p className="text-gray-400 text-lg">[Insert 3D Brain Model Here]</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <SectionContainer title="Introduction to the Problem">
        <ContentTransition delay={0}>
          <p className="mb-6">
            <strong className="text-accent">Digital addiction</strong> among teenagers has emerged as a significant concern worldwide, but particularly in India where rapid technological adoption has outpaced the development of healthy usage guidelines. This research examines the systemic factors contributing to this growing phenomenon through the lens of systems thinking.
          </p>
        </ContentTransition>

        <ContentTransition delay={1}>
          <p className="mb-6">
            India represents a unique case study with its combination of a young population, increasing internet accessibility, and cultural factors that influence technology use. <strong className="text-white">Over 500 million internet users</strong> in India are between the ages of 13-19, with smartphone penetration continuing to rise dramatically in recent years.
          </p>
        </ContentTransition>

        <ContentTransition delay={2}>
          <p className="mb-6">
            The <strong className="text-white">systemic nature</strong> of digital addiction cannot be understood through linear cause-and-effect relationships. Instead, this research employs <strong className="text-accent">causal loop diagrams (CLDs)</strong>, systems archetypes, and structural analysis to reveal the underlying patterns and feedback mechanisms that perpetuate problematic digital behaviors.
          </p>
        </ContentTransition>

        <ContentTransition delay={3}>
          <p className="mb-6">
            By identifying the <strong className="text-white">leverage points</strong> within this system, we aim to propose interventions that address root causes rather than symptoms, ultimately creating more effective strategies for cultivating healthy digital habits among Indian teenagers.
          </p>
        </ContentTransition>

        <ContentTransition delay={4}>
          <div className="mt-10">
            <Link to="/process" className="inline-flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors group">
              <span>Explore our research process</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ContentTransition>
      </SectionContainer>
    </>
  );
};

export default Home;