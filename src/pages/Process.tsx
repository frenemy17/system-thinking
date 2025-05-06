import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import ContentTransition from '../components/ContentTransition';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Problem Identification & Boundary Setting",
      description: "We began by clearly defining digital addiction among Indian teenagers and establishing the boundary of our system. This included determining which factors would be considered endogenous (within the system) versus exogenous (outside the system)."
    },
    {
      number: "02",
      title: "Stakeholder Analysis",
      description: "We identified key stakeholders including teenagers, parents, educational institutions, technology companies, and policymakers. Understanding their perspectives and influences was critical to mapping the complete system."
    },
    {
      number: "03",
      title: "Variable Identification",
      description: "Through literature review and expert interviews, we identified key variables within the system such as screen time, academic performance, peer influence, parental oversight, and mental health indicators."
    },
    {
      number: "04",
      title: "Causal Loop Diagram Creation",
      description: "We mapped relationships between variables, identifying reinforcing loops (that amplify changes) and balancing loops (that counteract changes) to understand the system's behavior over time."
    },
    {
      number: "05",
      title: "System Archetype Analysis",
      description: "We identified common system archetypes present in our CLD, such as 'fixes that fail' and 'shifting the burden', which helped us understand recurring patterns of system behavior."
    },
    {
      number: "06",
      title: "Events-Patterns-Structure Analysis",
      description: "We analyzed the system at multiple levels: visible events, underlying patterns, and deep structural causes to develop a comprehensive understanding of the issue."
    },
    {
      number: "07",
      title: "Leverage Point Identification",
      description: "Using Donella Meadows' framework, we identified points in the system where relatively small changes could lead to significant improvements in the system's behavior."
    }
  ];

  const tools = [
    {
      name: "Systems Mapping Software",
      description: "Vensim was used to create interactive causal loop diagrams."
    },
    {
      name: "Qualitative Analysis Tools",
      description: "Perplexity and ChatGPT was used for coding and analyzing interview transcripts with experts and stakeholders."
    },
    {
      name: "Statistical Analysis Software",
      description: "Google Notebook LM was used to analyze survey data on technology usage patterns among Indian teenagers."
    },
    {
      name: "Literature Review Databases",
      description: "Academic databases including PubMed, JSTOR, and Google Scholar through Perplexity was used to access existing research."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Research Process" 
        subtitle="Our systematic approach to understanding digital addiction through systems thinking"
      />
      
      <SectionContainer title="Methodology">
        <ContentTransition>
          <p className="mb-8">
            Our research employed a mixed-methods approach combining qualitative and quantitative data to build a comprehensive systems model. The process followed these key steps:
          </p>
        </ContentTransition>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <ContentTransition key={index} delay={index}>
              <div className="bg-dark-light p-6 rounded-lg border-l-4 border-accent">
                <div className="flex items-start">
                  <span className="text-3xl font-bold text-accent mr-4">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            </ContentTransition>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Research Tools">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <ContentTransition key={index} delay={index}>
              <div className="bg-dark-light p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-300">{tool.description}</p>
              </div>
            </ContentTransition>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Data Collection">
        {/* <ContentTransition> */}
          {/* <div className="bg-dark-light p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Primary Research</h3>
            <ul className="bullet-list">
              <li>Surveys of 500+ teenagers (13-19 years) across urban and rural India</li>
              <li>In-depth interviews with 50 teenagers identified as having problematic digital usage</li>
              <li>Focus groups with parents and educators</li>
              <li>Expert interviews with psychologists, technology addiction specialists, and educational consultants</li>
            </ul>
          </div> */}
        {/* </ContentTransition> */}

        <ContentTransition delay={1}>
          <div className="bg-dark-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Secondary Research</h3>
            <ul className="bullet-list">
              <li>Analysis of national survey data on technology usage</li>
              <li>Review of clinical cases related to technology addiction</li>
              <li>Examination of school policies regarding technology use</li>
              <li>Analysis of digital platform engagement metrics</li>
            </ul>
          </div>
        </ContentTransition>
      </SectionContainer>
    </>
  );
};

export default Process;