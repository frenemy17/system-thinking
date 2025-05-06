import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import ContentTransition from '../components/ContentTransition';

const CLDNarrative: React.FC = () => {
  const variables = [
    {
      name: "Screen Time",
      definition: "Total hours spent on digital devices daily, including smartphones, computers, and gaming consoles.",
      role: "Primary indicator of digital behavior patterns"
    },
    {
      name: "Academic Performance",
      definition: "Measured through grades, test scores, and teacher assessments.",
      role: "Key outcome variable affected by digital usage"
    },
    {
      name: "Parental Oversight",
      definition: "Degree of monitoring and regulation of technology use by parents/guardians.",
      role: "External control mechanism within the system"
    },
    {
      name: "Peer Influence",
      definition: "Pressure from and desire to conform with social groups regarding technology use.",
      role: "Social reinforcement mechanism"
    },
    {
      name: "Digital Reward Mechanisms",
      definition: "Features designed into platforms that provide psychological rewards (likes, notifications, etc.).",
      role: "Primary reinforcing driver of continued usage"
    },
    {
      name: "Sleep Quality",
      definition: "Duration and quality of nightly rest, affected by evening screen exposure.",
      role: "Mediating variable between screen time and wellbeing outcomes"
    },
    {
      name: "Psychological Wellbeing",
      definition: "Mental health indicators including anxiety, depression, and life satisfaction measures.",
      role: "Key outcome variable affected by digital usage patterns"
    },
    {
      name: "FOMO (Fear of Missing Out)",
      definition: "Anxiety about missing social interactions, experiences, or content online.",
      role: "Psychological driver of checking behavior"
    }
  ];

  const feedbackLoops = [
    {
      name: "Digital Escape Cycle (R1)",
      type: "Reinforcing",
      description: "As psychological stress increases, teenagers turn to digital platforms as an escape mechanism. The temporary relief this provides reinforces the behavior, but extended screen time often leads to academic decline, which creates more stress, completing the cycle."
    },
    {
      name: "Social Validation Loop (R2)",
      type: "Reinforcing",
      description: "Social interactions online provide validation and dopamine hits, encouraging more frequent platform checking, which increases overall screen time and dependency on digital validation."
    },
    {
      name: "Parental Intervention Loop (B1)",
      type: "Balancing",
      description: "As signs of addiction appear (falling grades, behavior changes), parental oversight typically increases, temporarily reducing screen time. However, this intervention often lacks sustainability without addressing underlying causes."
    },
    {
      name: "Sleep Disruption Cycle (R3)",
      type: "Reinforcing",
      description: "Evening screen time disrupts melatonin production, reducing sleep quality. Poor sleep affects cognitive function and emotional regulation, increasing stress and the desire for digital escape, creating a destructive cycle."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Causal Loop Diagram & Narrative" 
        subtitle="Understanding the interconnected factors driving digital addiction"
      />
      
      <SectionContainer title="System Variables">
        <ContentTransition>
          <p className="mb-8">
            Our causal loop diagram is built around the following key variables that interact to create the dynamics of digital addiction among Indian teenagers:
          </p>
        </ContentTransition>

        <div className="table-container mb-10">
          <table className="table-custom">
            <thead>
              <tr>
                <th>Variable Name</th>
                <th>Definition</th>
                <th>Role in System</th>
              </tr>
            </thead>
            <tbody>
              {variables.map((variable, index) => (
                <tr key={index} className="border-b border-dark-lighter">
                  <td className="font-medium text-white">{variable.name}</td>
                  <td>{variable.definition}</td>
                  <td>{variable.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionContainer>

      <SectionContainer title="Causal Loop Diagram">
        <ContentTransition>
          <div className="w-full bg-dark-lighter p-8 rounded-lg border border-dark-light mb-8 flex items-center justify-center">
            <div className="text-center">
              <img src="src/videos/Screenshot 2025-05-06 at 11.29.20 AM.png" alt="Causal Loop Diagram" className="w-full h-auto" />
             
            </div>
          </div>
        </ContentTransition>

        <ContentTransition delay={1}>
          <p className="mb-8">
            The causal loop diagram above illustrates the complex relationships between factors that contribute to digital addiction among Indian teenagers. Arrows indicate causal relationships, with "+" signifying that variables change in the same direction and "-" indicating that they change in opposite directions.
          </p>
        </ContentTransition>
      </SectionContainer>

      <SectionContainer title="Key Feedback Loops">
        <ContentTransition>
          <p className="mb-8">
            Our analysis identified several critical feedback loops that drive system behavior:
          </p>
        </ContentTransition>

        <div className="space-y-6">
          {feedbackLoops.map((loop, index) => (
            <ContentTransition key={index} delay={index}>
              <div className="bg-dark-light p-6 rounded-lg border-l-4 border-secondary">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {loop.name}
                  <span className={`ml-3 text-sm px-2 py-1 rounded ${loop.type === "Reinforcing" ? "bg-accent/20 text-accent" : "bg-secondary/20 text-secondary"}`}>
                    {loop.type}
                  </span>
                </h3>
                <p className="text-gray-300">{loop.description}</p>
              </div>
            </ContentTransition>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="System Narrative">
        <ContentTransition>
          <div className="bg-dark-light p-6 rounded-lg">
            <p className="mb-4">
              The system of digital addiction among Indian teenagers operates through a complex interplay of social, psychological, technological, and cultural factors. Our causal loop analysis reveals that this is not simply a matter of individual choice or willpower but rather a structured system with powerful reinforcing mechanisms.
            </p>
            <p className="mb-4">
              The core dynamics begin with initial exposure to digital platforms, typically through smartphones or computers. The design of these platforms—with features such as infinite scrolling, variable reward mechanisms, and social validation—creates powerful neurological rewards that encourage continued use. This initial engagement is further reinforced by peer influence, as social status increasingly depends on digital presence and participation.
            </p>
            <p className="mb-4">
              As usage increases, several reinforcing loops accelerate the pattern. Academic pressures—particularly intense in the Indian educational context—create stress that many teenagers escape through digital entertainment. This escape provides temporary relief but ultimately leads to decreased academic performance as screen time displaces study time, creating more stress and strengthening the cycle.
            </p>
            <p>
              Attempts to control this pattern through external means (parental restrictions, school policies) often trigger resistance or workarounds rather than sustainable changes in behavior. This is because these interventions typically address symptoms rather than underlying structural causes. Until the fundamental reward structures, social validation mechanisms, and stress factors are addressed, the system will continue to produce problematic digital usage patterns.
            </p>
          </div>
        </ContentTransition>
      </SectionContainer>
    </>
  );
};

export default CLDNarrative;