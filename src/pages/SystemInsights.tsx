import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import ContentTransition from '../components/ContentTransition';

const SystemInsights: React.FC = () => {
  const leveragePoints = [
    {
      name: "Platform Design Modification",
      category: "Rules of the System",
      importance: "High",
      impact: "Changing how digital platforms are designed to reduce addictive mechanisms (e.g., removing infinite scroll, limiting notifications)"
    },
    {
      name: "Digital Literacy Education",
      category: "Information Flows",
      importance: "High",
      impact: "Creating comprehensive education about healthy technology use, implemented in school curricula nationwide"
    },
    {
      name: "Peer-Led Social Norms",
      category: "Self-Organization",
      importance: "Medium",
      impact: "Developing peer-influence programs that create new social norms around healthy digital usage"
    },
    {
      name: "Parental Education & Tools",
      category: "Information Flows",
      importance: "Medium",
      impact: "Providing parents with both knowledge and practical tools to guide healthy technology use"
    },
    {
      name: "Policy Regulation",
      category: "Rules of the System",
      importance: "High",
      impact: "Implementing regulatory frameworks that require platforms to limit features known to cause addiction in minors"
    },
    {
      name: "Alternative Engagement Opportunities",
      category: "System Structure",
      importance: "Medium",
      impact: "Creating compelling offline activities and spaces that fulfill the same psychological needs as digital platforms"
    },
    {
      name: "Mindfulness Integration",
      category: "Goals of the System",
      importance: "Low",
      impact: "Introducing mindfulness practices in schools and homes to improve self-regulation and awareness of digital usage patterns"
    }
  ];

  const archetypes = [
    {
      name: "Fixes That Fail",
      description: "Quick-fix solutions (like parental restrictions) provide temporary relief but often strengthen underlying problem dynamics, as teenagers find workarounds that may be harder to detect."
    },
    {
      name: "Shifting the Burden",
      description: "Addressing symptoms of digital addiction (e.g., through screen time limits) rather than underlying causes (psychological needs, platform design) shifts the burden to symptomatic solutions that weaken long-term capacity for fundamental solutions."
    },
    {
      name: "Success to the Successful",
      description: "Early adopters of digital platforms gain social currency and attention, which drives further engagement, creating a widening gap between those embedded in digital culture and those excluded."
    },
    {
      name: "Escalation",
      description: "As parents increase restrictions, teenagers increase concealment efforts, creating an escalating pattern where both sides develop more extreme measures."
    },
    {
      name: "Tragedy of the Commons",
      description: "Individual platform companies optimize for user engagement without consideration for the collective impact on teenage mental health and development, depleting the 'commons' of healthy attention."
    }
  ];

  const epsAnalysis = [
    {
      level: "Events",
      examples: [
        "Teenager missing sleep due to late-night gaming",
        "Conflict between parent and child over phone use",
        "Declining grades linked to social media distraction",
        "Instances of cyberbullying or online harassment"
      ],
      solutions: [
        "Screen time monitoring apps",
        "Taking devices away as punishment",
        "Therapy for individual cases of addiction",
        "Blocking specific problematic applications"
      ]
    },
    {
      level: "Patterns",
      examples: [
        "Increasing average screen time over past five years",
        "Correlation between phone use and anxiety/depression",
        "Recurring cycles of restriction and rebellion",
        "Patterns of usage spikes during exam periods"
      ],
      solutions: [
        "Digital wellness programs in schools",
        "Creating technology-free zones and times",
        "Parent education workshops",
        "Peer support groups for healthy technology use"
      ]
    },
    {
      level: "Structure",
      examples: [
        "Engagement-maximizing algorithms in platforms",
        "Social validation mechanisms built into apps",
        "Unclear boundaries around appropriate technology use",
        "High-pressure academic environment driving escape behaviors"
      ],
      solutions: [
        "Regulation of addictive design features",
        "Redesigning platforms with teenage wellbeing in mind",
        "Cultural shift in values around technology use",
        "Addressing academic pressure through educational reform"
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="System Insights" 
        subtitle="Analyzing patterns, structures, and intervention points"
      />
      
      <SectionContainer title="Leverage Points">
        <ContentTransition>
          <p className="mb-8">
            Using Donella Meadows' framework for system intervention, we identified the following leverage points where targeted changes could significantly impact the system:
          </p>
        </ContentTransition>

        <ContentTransition delay={1}>
          <div className="table-container mb-10">
            <table className="table-custom">
              <thead>
                <tr>
                  <th>Leverage Point</th>
                  <th>Meadows Category</th>
                  <th>Importance</th>
                  <th>Potential Impact</th>
                </tr>
              </thead>
              <tbody>
                {leveragePoints.map((point, index) => (
                  <tr key={index} className="border-b border-dark-lighter">
                    <td className="font-medium text-white">{point.name}</td>
                    <td>{point.category}</td>
                    <td>
                      <span className={`px-2 py-1 rounded text-xs ${
                        point.importance === "High" 
                          ? "bg-accent/20 text-accent" 
                          : point.importance === "Medium"
                            ? "bg-secondary/20 text-secondary"
                            : "bg-gray-500/20 text-gray-300"
                      }`}>
                        {point.importance}
                      </span>
                    </td>
                    <td>{point.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentTransition>
      </SectionContainer>

      <SectionContainer title="System Archetypes">
        <ContentTransition>
          <p className="mb-8">
            Our analysis identified several system archetypes—recurring patterns of system behavior that help explain why digital addiction persists despite efforts to address it:
          </p>
        </ContentTransition>

        <div className="space-y-6">
          {archetypes.map((archetype, index) => (
            <ContentTransition key={index} delay={index}>
              <div className="bg-dark-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{archetype.name}</h3>
                <p className="text-gray-300">{archetype.description}</p>
              </div>
            </ContentTransition>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Events-Patterns-Structure Analysis">
        <ContentTransition>
          <p className="mb-8">
            To understand the system at different levels of depth, we conducted an Events-Patterns-Structure (EPS) analysis:
          </p>
        </ContentTransition>

        {epsAnalysis.map((level, index) => (
          <ContentTransition key={index} delay={index}>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">{level.level} Level</h3>
              
              <div className="bg-dark-light p-6 rounded-lg mb-6">
                <h4 className="text-lg font-medium mb-3">Examples:</h4>
                <ul className="bullet-list">
                  {level.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-dark-light p-6 rounded-lg">
                <h4 className="text-lg font-medium mb-3">Potential Solutions:</h4>
                <ul className="bullet-list">
                  {level.solutions.map((solution, i) => (
                    <li key={i}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ContentTransition>
        ))}
        
        <ContentTransition delay={epsAnalysis.length}>
          <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-accent">Key Insight:</h3>
            <p>
              The most effective interventions address the structural level of the system, as these create lasting change by modifying the underlying causes rather than merely treating symptoms. However, a comprehensive approach requires interventions at all three levels to address immediate concerns while building toward systemic transformation.
            </p>
          </div>
        </ContentTransition>
      </SectionContainer>
    </>
  );
};

export default SystemInsights;