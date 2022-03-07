import ExperienceDesign from "./partials/ExperienceDesign";
import ExperienceEngineering from "./partials/ExperienceEngineering";
import Text from "../components/Text";

const Intro = () => (<>
  <div className="c-wrapper c-wrapper--sepia u-padding-bottom">
    <Text type="paragraph" modifier="xlarge">
      I’m a product designer &amp; web&nbsp;engineer<br/>specializing in design systems.
      <span className="c-emoji c-emoji--large u-animate-wave">👋</span>
    </Text>
    <Text type="paragraph">
    I have over 8 years of industry experience and most recently lead design &amp; frontend engineering on a product team. I have also been a remote-worker for over 4 years.
    </Text>
    <Text type="paragraph">
      I’m fascinated by the engineering that powers user interfaces and love helping product teams and startups create seamless user experiences. I’m fully capable in design and frontend engineer, but I can also dive into the server-side to build out modeling or functionality related to interface needs.
    </Text>
    <Text type="paragraph">
      I can play many roles, but I’m most effective bridging the gap between engineering and design. I’m valuable both as a designer on an engineering team and as an engineer on a design team, both core assets of any software company.
    </Text>
    <Text type="paragraph">
      At the moment, I am based between the Atlanta and Mexico City while I focus my efforts towards studying Spanish.
    </Text>
  </div>
  <div className="c-wrapper c-wrapper--slim c-wrapper--accent">
    <div className="c-grid c-grid--large">
      <div className="c-grid__cell u-1/2--desk">
        <Text type="title" modifier="small" className="u-margin-top-small">Design Experience</Text>
        <ExperienceDesign />
      </div>
      <div className="c-grid__cell u-1/2--desk">
        <Text type="title" modifier="small" className="u-margin-top-small">Programming Experience</Text>
        <ExperienceEngineering />
      </div>
    </div>
  </div>
  <div className="c-wrapper c-wrapper--sepia">
    <Text type="title" modifier="small" className="u-margin-top-small">Experience</Text>
    <Text type="paragraph">
      {/* Most recently, I lead the creation and execution of design systems at Division Of Labor, a digital product development agency. There we partnered with alpha-stage startups to design and build their MVP products. */}
      Most recently, I led design, frontend and user experience at a venture backed startup called OffSite. OffSite was spun out of Division of Labor, a digital product development agency where I led creation and execution of design systems for a variety of software products.
    </Text>
    <Text type="paragraph">
      {/* Previous to this, I served as the co-founder and director of product design at Coindex Labs.I oversaw all user interface design, marketing visual design, and engineered prototypes of our crypotocurrency trading platform interface. */}
      Prior to this, I served as the co-founder and director of product design at Coindex Labs. I oversaw all user interface design, marketing visual design, and engineered prototypes of our crypotocurrency trading platform interface. We made it to the final round of selection in a recent Tech Stars New York cohort.
    </Text>
    <Text type="paragraph">
      From 2015-'17, I worked as a senior software designer at The Iron Yard (now sold) working on the LMS product team.
    </Text>
    <Text type="paragraph">
      {/* Prior to that, I ran a small UI design studio that designed user interfaces with product agencies &amp; startups and worked for international brands as a design engineer in a few big-name digital marketing agencies. */}
      Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top-large">Moving Forward</Text>
    <Text type="paragraph">
      {/* I am looking to join a medium-sized startup company. To continue nurturing an excellent software experiences, connecting: UI connecting, usability testing, engineering execution, design documentation, and company processes to create a culture of user experience excellence. In the interim, I am available for UI design or frontend engineering consulting engagements. */}
      I am looking to join a medium-sized startup company. I want to continue nurturing excellent software experiences for users, connecting: UI, usability testing, engineering execution, design documentation, and company processes to create a culture of user experience excellence. In the interim, I am available for UI design or frontend engineering consulting engagements.
    </Text>
    <Text type="paragraph">
      Due to privacy restrictions, some of my work is not available publicly. If you would like to see engineering samples: <a href="mailto:studio@Andrew.mn" className="c-link">Studio@Andrew.mn</a>.
    </Text>
    <Text type="paragraph">
      Thanks for visiting!
    </Text>
    <Text type="paragraph" modifier="sans-medium" className="OVERRIDE-signature">
      <span className="u-subtler">&mdash;</span>&nbsp; Andrew McIntee
    </Text>
  </div>
</>);


export default Intro;
