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
      name: "Addiction Intensity",
      definition: "Degree of dependency on digital platforms, measured by the intensity of cravings and the amount of time spent on digital devices.",
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
      name: "Physical Activity Time",
      definition: "Time spent on physical activities such as sports, games, and outdoor play.",
      role: "Mediating variable between screen time and wellbeing outcomes"
    },
    {
      name: "Sleep Duration",
      definition: "Duration of sleep, affected by evening screen exposure.",
      role: "Key outcome variable affected by digital usage patterns"
    },
    {
      name: "Academic Performance",
      definition: "Academic performance, measured by grades, test scores, and teacher assessments.",
      role: "Psychological driver of checking behavior"
    },
    {
      name: "Dopamine Feedback from Apps",
      definition: "The psychological rewards provided by digital platforms, such as likes, notifications, and social validation.",
      role: "Primary reinforcing driver of continued usage"
    },
    {
      name: "Boredom/Idle Time",
      definition: "Time spent when there is no specific activity to engage in.",
      role: "Potential driver of seeking digital distractions"
    },
    {
      name: "Offline Hobby Time",
      definition: "Time spent on offline hobbies and activities.",
      role: "Potential source of boredom and seeking digital distractions"
    },
    {
      name: "Platform Engagement Algorithm",
      definition: "The algorithm that determines which content to show to the user based on their behavior and preferences.",
      role: "Key driver of continued usage"
    },
    {
      name: "Content Recommendation Algorithm",
      definition: "The algorithm that recommends content to the user based on their behavior and preferences.",
      role: "Key driver of continued usage"
    },
    {
      name: "Mental Health Score",
      definition: "Mental health score, measured by anxiety, depression, and life satisfaction measures.",
      role: "Key driver of continued usage"
    },
    {
      name: "Awareness of Digital Harm",
      definition: "Awareness of the negative effects of digital addiction on mental health, physical health, and social relationships.",
      role: "Key driver of continued usage"
    },
    {
      name: "School Digital Hygiene Programs",
      definition: "Programs implemented by schools to promote digital hygiene and responsible technology use.",
      role: "Key driver of continued usage"
    },
    {
      name: "Access to Digital Devices",
      definition: "Access to digital devices, including smartphones, computers, and gaming consoles.",
      role: "Key driver of continued usage"
    },
    {
      name: "Usage of Productivity Tools",
      definition: "Usage of productivity tools such as Google Docs, Microsoft Office, and Evernote.",
      role: "Key driver of continued usage"
    },
    
    
    
    
    
    
    

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
      name: "Sleep Disruption Cycle (R3)",
      type: "Reinforcing",
      description: "Evening screen time disrupts melatonin production, reducing sleep quality. Poor sleep affects cognitive function and emotional regulation, increasing stress and the desire for digital escape, creating a destructive cycle."
    },
    {
      name: "Peer Influence Amplifier (R4)",
      type: "Reinforcing",
      description: "As peers spend more time on screens, the social pressure to stay digitally connected increases. This leads to more personal screen time and growing dependency, which in turn heightens the influence of peers and reinforces the cycle."
    },
    {
      name: "Platform Algorithm Hook (R5)",
      type: "Reinforcing",
      description: "Algorithm-driven content keeps users engaged by personalizing what they see, which increases time spent online. This boosts dopamine-driven responses and addiction intensity, encouraging even more screen time and deeper engagement with the platform."
    },
    {
      name: "Mental Health Deterioration (R6)",
      type: "Reinforcing",
      description: "Increased screen time contributes to declining mental health, leading to higher addiction intensity. As emotional well-being deteriorates, users turn to screens for relief, further escalating screen time and completing the loop."
    },
    {
      name: "Parental Intervention Loop (B1)",
      type: "Balancing",
      description: "As signs of addiction appear (falling grades, behavior changes), parental oversight typically increases, temporarily reducing screen time. However, this intervention often lacks sustainability without addressing underlying causes."
    },
    {
      name: "Offline Hobby Displacement (B2)",
      type: "Balancing",
      description: "When teenagers engage more in physical or creative hobbies, their boredom decreases, reducing the impulse to seek stimulation through screens. This shift helps to balance screen time and mitigate addictive behaviors."
    },
    {
      name: "Digital Awareness Effect (B3)",
      type: "Balancing",
      description: "As awareness of digital harm grows, teenagers are more likely to adopt screen-limiting tools. This conscious effort to manage screen usage reduces overexposure and helps regulate digital consumption."
    },
    {
      name: "School Programs Feedback (B4)",
      type: "Balancing",
      description: "Digital hygiene programs in schools raise awareness and promote healthier tech habits. This strengthens parental monitoring and self-regulation, leading to a gradual decline in screen time among students."
    },
    {
      name: "Sleep Improvement Intervention (B5)",
      type: "Balancing",
      description: "Reducing evening screen time leads to better sleep quality, which improves mental health and academic focus. These positive outcomes lower the tendency to overuse digital devices, stabilizing the system."
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
                {/* <th>Role in System</th> */}
              </tr>
            </thead>
            <tbody>
              {variables.map((variable, index) => (
                <tr key={index} className="border-b border-dark-lighter">
                  <td className="font-medium text-white">{variable.name}</td>
                  <td>{variable.definition}</td>
                  {/* <td>{variable.role}</td> */}
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
              <img src="/image.png" alt="Causal Loop Diagram" className="w-full h-auto" />
             
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