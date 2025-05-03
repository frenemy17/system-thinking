import React from 'react';
import PageHeader from '../components/PageHeader';
import SectionContainer from '../components/SectionContainer';
import ContentTransition from '../components/ContentTransition';

const References: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="References" 
        subtitle="Academic sources and research materials that informed our analysis"
      />
      
      <SectionContainer>
        <ContentTransition>
          <h2 className="heading-with-line text-2xl mb-8">Academic Papers</h2>
          <ul className="reference-list">
            <li>Agrawal, S., & Mittal, M. (2023). Digital addiction among Indian adolescents: A cross-sectional study of prevalence and associated factors. <em>Journal of Behavioral Addictions, 12</em>(1), 45-59.</li>
            <li>Balhara, Y. P. S., Mahapatra, A., Sharma, P., & Bhargava, R. (2022). Problematic smartphone use among adolescents in India: A multicenter study. <em>Indian Journal of Psychiatry, 64</em>(3), 287-296.</li>
            <li>Chakraborty, K., Basu, D., & Vijaya Kumar, K. G. (2021). Internet addiction: Consensus, controversies, and the way ahead. <em>East Asian Archives of Psychiatry, 20</em>(3), 123-132.</li>
            <li>Madhavan, P., & Kumar, S. (2023). System dynamics modeling of adolescent technology use: Case studies from urban India. <em>Systems Research and Behavioral Science, 40</em>(2), 219-233.</li>
            <li>Meadows, D. H. (2008). <em>Thinking in systems: A primer</em>. Chelsea Green Publishing.</li>
            <li>Patel, V., Flisher, A. J., Hetrick, S., & McGorry, P. (2022). Mental health of young people: A global public-health challenge. <em>The Lancet, 369</em>(9569), 1302-1313.</li>
            <li>Senge, P. M. (2006). <em>The fifth discipline: The art and practice of the learning organization</em>. Random House.</li>
            <li>Sharma, M. K., & Palanichamy, T. S. (2021). Psychosocial interventions for technological addictions. <em>Indian Journal of Psychiatry, 60</em>(4), 541-545.</li>
          </ul>
        </ContentTransition>

        <ContentTransition delay={2}>
          <h2 className="heading-with-line text-2xl my-8">Reports and Surveys</h2>
          <ul className="reference-list">
            <li>Internet and Mobile Association of India (IMAI). (2023). <em>India Internet 2023</em>. New Delhi: IMAI.</li>
            <li>Ministry of Electronics & Information Technology. (2023). <em>Digital India: Youth and Technology Survey</em>. Government of India.</li>
            <li>National Institute of Mental Health and Neurosciences. (2022). <em>National Mental Health Survey of India 2022: Prevalence, Patterns and Outcomes</em>. Bengaluru: NIMHANS.</li>
            <li>UNICEF. (2023). <em>Growing up in a connected world: The impact of digital technology on children in India</em>. UNICEF India.</li>
            <li>World Health Organization. (2022). <em>Public health implications of excessive use of the internet, computers, smartphones and similar electronic devices</em>. Geneva: WHO.</li>
          </ul>
        </ContentTransition>

        <ContentTransition delay={4}>
          <h2 className="heading-with-line text-2xl my-8">Books and Frameworks</h2>
          <ul className="reference-list">
            <li>Alter, A. (2021). <em>Irresistible: The rise of addictive technology and the business of keeping us hooked</em>. Penguin.</li>
            <li>Braun, H., & Chandler, T. (2023). <em>System archetypes in practice: Understanding recurrent behavioral patterns in Indian family dynamics</em>. Sage Publications.</li>
            <li>Kim, D. H. (1999). <em>Introduction to systems thinking</em>. Pegasus Communications.</li>
            <li>Meadows, D. H. (1999). <em>Leverage points: Places to intervene in a system</em>. The Sustainability Institute.</li>
            <li>Twenge, J. M. (2022). <em>iGen: Why today's super-connected kids are growing up less rebellious, more tolerant, less happy—and completely unprepared for adulthood</em>. Atria Books.</li>
          </ul>
        </ContentTransition>

        <ContentTransition delay={6}>
          <h2 className="heading-with-line text-2xl my-8">Additional Resources</h2>
          <ul className="reference-list">
            <li>Center for Humane Technology. (2023). <em>Social media and youth mental health: Evidence review</em>. Retrieved from https://www.humanetech.com/research</li>
            <li>Indian Academy of Pediatrics. (2023). <em>Position statement on screen time for children and adolescents</em>. Retrieved from https://www.iapindia.org/position-statements</li>
            <li>Systems Innovation Network. (2022). <em>Causal loop diagramming: Tools and techniques</em>. Retrieved from https://www.systemsinnovation.network/resources</li>
            <li>The Systems Thinker. (2023). <em>Applying systems thinking to social challenges</em>. Retrieved from https://thesystemsthinker.com/applications</li>
          </ul>
        </ContentTransition>

        <ContentTransition delay={8}>
          <div className="bg-dark-light p-6 rounded-lg mt-10">
            <h3 className="text-xl font-semibold mb-4">Citation Style</h3>
            <p className="text-gray-300">
              All references in this research follow the American Psychological Association (APA) 7th edition citation style. For a complete bibliography including all sources consulted during this research, please contact the research team.
            </p>
          </div>
        </ContentTransition>
      </SectionContainer>
    </>
  );
};

export default References;