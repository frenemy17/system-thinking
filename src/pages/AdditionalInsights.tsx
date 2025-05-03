import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import ContentTransition from '../components/ContentTransition';

const AdditionalInsights: React.FC = () => {
  const observations = [
    {
      title: "Digital Divide Paradox",
      description: "While digital access inequality exists, our research found that both privileged and underprivileged teenagers experience digital addiction, though with different manifestations. Urban teenagers with greater access show more social media addiction, while rural teenagers with limited access show more intense gaming addiction during available time."
    },
    {
      title: "Gender Differences",
      description: "Male teenagers exhibit higher rates of gaming addiction and related problems, while female teenagers show higher social media dependency. These differences reflect both broader social norms and targeted platform design strategies."
    },
    {
      title: "Parental Technology Gap",
      description: "A significant gap exists between teenagers' digital fluency and parents' understanding. Parents often lack both technical knowledge to implement oversight and conceptual understanding of platforms, undermining effective guidance."
    },
    {
      title: "School Policy Inconsistency",
      description: "Educational institutions across India have widely varying policies on technology use, creating confusion and inconsistent messages about appropriate digital behavior. Some schools ban devices entirely while others integrate them extensively without addressing potential addiction concerns."
    },
    {
      title: "Mental Health Infrastructure Limitations",
      description: "India's mental health infrastructure is inadequately prepared to address digital addiction, with limited specialist knowledge, insufficient screening tools calibrated for the Indian context, and societal stigma preventing help-seeking."
    }
  ];

  const recommendations = [
    {
      title: "Multi-stakeholder Advisory Council",
      description: "Establish a national council comprising education experts, mental health professionals, technology industry representatives, parent groups, and youth representatives to develop comprehensive guidelines."
    },
    {
      title: "Design Standards for Digital Platforms",
      description: "Develop and enforce standards for platforms marketed to individuals under 18, requiring features that discourage addictive usage patterns and promote conscious engagement."
    },
    {
      title: "National Digital Literacy Curriculum",
      description: "Implement a standardized curriculum covering healthy technology use, critical media consumption, privacy awareness, and digital citizenship as a mandatory component in all schools."
    },
    {
      title: "Parent-School Partnership Programs",
      description: "Create structured programs that bridge home and school approaches to technology, providing parents with both technical tools and communication strategies."
    },
    {
      title: "Specialized Clinical Training",
      description: "Develop specialized training for mental health professionals in diagnosing and treating digital addiction, with cultural adaptations specific to the Indian context."
    },
    {
      title: "Youth-Led Initiative Funding",
      description: "Establish funding for youth-designed and youth-led initiatives promoting healthy digital habits, leveraging peer influence as a positive force for system change."
    }
  ];

  return (
    <>
      <PageHeader 
        title="Additional Insights" 
        subtitle="Key observations and recommendations for addressing digital addiction"
      />
      
      <SectionContainer title="Key Observations">
        <ContentTransition>
          <p className="mb-8">
            Through our research, we identified several important insights specific to the Indian context that contribute to the unique manifestation of digital addiction among teenagers:
          </p>
        </ContentTransition>

        <div className="space-y-6">
          {observations.map((observation, index) => (
            <ContentTransition key={index} delay={index}>
              <div className="bg-dark-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{observation.title}</h3>
                <p className="text-gray-300">{observation.description}</p>
              </div>
            </ContentTransition>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Recommendations for Systemic Change">
        <ContentTransition>
          <p className="mb-8">
            Based on our systems analysis, we recommend the following interventions to address digital addiction at structural, institutional, and individual levels:
          </p>
        </ContentTransition>

        <div className="space-y-6">
          {recommendations.map((recommendation, index) => (
            <ContentTransition key={index} delay={index}>
              <div className="bg-dark-light p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-semibold mb-2">{recommendation.title}</h3>
                <p className="text-gray-300">{recommendation.description}</p>
              </div>
            </ContentTransition>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer title="Implementation Challenges">
        <ContentTransition>
          <div className="bg-dark-light p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Political Challenges</h3>
            <p className="mb-4">
              Any regulatory approach to digital platforms will face resistance from industry stakeholders who profit from engagement-maximizing features. Building political will requires framing digital addiction as a public health issue with economic implications for future productivity.
            </p>
            <p>
              Policy implementation across India's diverse states with varying education systems will require careful coordination and flexibility in approaches while maintaining core principles.
            </p>
          </div>
        </ContentTransition>

        <ContentTransition delay={1}>
          <div className="bg-dark-light p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Social Challenges</h3>
            <p className="mb-4">
              Generational differences in digital understanding create barriers to effective communication and implementation of family-based strategies. Programs must address both parents' technical knowledge and teenagers' perspective.
            </p>
            <p>
              The social status associated with digital devices and activities in Indian society complicates efforts to promote moderate use, requiring approaches that acknowledge technology's importance while encouraging boundaries.
            </p>
          </div>
        </ContentTransition>

        <ContentTransition delay={2}>
          <div className="bg-dark-light p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Economic Challenges</h3>
            <p className="mb-4">
              The digital economy's growing importance in India creates competing incentives between limiting problematic usage and developing digital skills for future employment. Balance is needed rather than absolute restrictions.
            </p>
            <p>
              Resource limitations in many schools and communities necessitate low-cost intervention approaches and potential public-private partnerships to fund implementation of comprehensive programs.
            </p>
          </div>
        </ContentTransition>
      </SectionContainer>

      <SectionContainer title="Final Thoughts">
        <ContentTransition>
          <div className="bg-gradient-to-r from-dark-light to-dark-lighter p-8 rounded-lg">
            <p className="text-xl text-white mb-4">
              Digital addiction among Indian teenagers represents a complex systemic challenge requiring coordinated intervention across multiple levels of society. By viewing this issue through a systems lens, we can move beyond simplistic "screen time" debates to address the underlying structures driving problematic usage patterns.
            </p>
            <p className="text-xl text-white">
              The recommendations presented here provide a starting point for developing a comprehensive national strategy that acknowledges both the benefits of digital technology and the need for boundaries that protect teenage wellbeing and development.
            </p>
          </div>
        </ContentTransition>
      </SectionContainer>
    </>
  );
};

export default AdditionalInsights;