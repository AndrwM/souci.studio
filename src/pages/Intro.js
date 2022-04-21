import ExperienceDesign from "./partials/ExperienceDesign";
import ExperienceEngineering from "./partials/ExperienceEngineering";
import Text from "../components/Text";
import Browser from "../components/Browser";
import VisualTearElement from "../components/VisualTearElement";

const Intro = () => (<>
  <div className="c-wrapper c-wrapper--accent u-padding-bottom-large">
    <Text type="paragraph" modifier="xlarge">
        I’m a product designer &amp; web&nbsp;engineer <br/>specializing in design systems.
      <span className="c-emoji c-emoji--large u-animate-wave">👋</span>
    </Text>
    <Text type="paragraph">
      I have over 8 years of industry experience and most recently lead design &amp; frontend engineering on a product team. I have also been a remote-worker for over 4 years.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top-large">Currently&hellip;</Text>
    <Text type="paragraph">
      I’m fascinated by the engineering that powers user interfaces and love helping product teams and startups create seamless user experiences. I’m fully capable in design and frontend engineer,
    </Text>
    <Text type="paragraph">
      My interests are climate change awareness, crypto skepticism, Rust, Javascript, eco-tourism.
    </Text>
  </div>
  <div className="c-wrapper c-wrapper--slim c-wrapper--sepia">
    <VisualTearElement
      styleIndex={2}
      colorVar='--c-background-accent'
      style={{
        height: 12,
        width: '100%',
        top: 0
      }}
    />
    <div className="c-grid c-grid--large u-margin-vertical">
      <div className="c-grid__cell u-1/2--desk">
        <Text type="title" modifier="small" className="u-margin-top-small">Design Experience</Text>
        <ExperienceDesign />
      </div>
      <div className="c-grid__cell u-1/2--desk">
        <Text type="title" modifier="small" className="u-margin-top-small">Programming Experience</Text>
        <ExperienceEngineering />
      </div>
    </div>
    <VisualTearElement
      styleIndex={0}
      flipY={false}
      colorVar='--c-background-accent'
      style={{
        height: 10,
        bottom: 0
      }}
    />
  </div>
  <div className="c-wrapper c-wrapper--accent c-wrapper--slim">
    <Text type="title" modifier="small" className="u-margin-top-small">My Work (engineering)</Text>
    <Text type="paragraph">
      From 2015-'17, I worked as a senior software designer at The Iron Yard (now sold) working on the LMS product team.
    </Text>
    <Text type="paragraph">
      {/* Prior to that, I ran a small UI design studio that designed user interfaces with product agencies &amp; startups and worked for international brands as a design engineer in a few big-name digital marketing agencies. */}
      Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
    </Text>
    <Text type="paragraph">
      List eng projects that I've worked on here!
    </Text>
  </div>
  <div className="c-wrapper  c-wrapper--accent c-wrapper--flush u-border-top">
    <div className="c-container-2col">
      <div className="c-container-2col__item">
        <Text type="title" modifier="medium" className="u-margin-bottom-none">
          Sage UX Design System
          <span className="c-title__subtle">2020 – 2021</span>
        </Text>
        <Text type="paragraph" modifier="sans-small">
          UX Developer at <strong>Kajabi</strong>
        </Text>
        <Text type="paragraph" modifier="medium">
          I worked on the product team to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.
        </Text>
        <Text type="paragraph" modifier="medium">
          From the ground-up we designed, built, and documented a CSS component system with over 50 elements. It allowed anyone on the team to quickly assemble a view. In addition to authoring the design system, I worked with the engineering team in building the frontend for an in-browser IDE and student messaging system.
        </Text>
        <Text type="title" modifier="smallest">
          I Delivered
        </Text>
        <Text type="paragraph" modifier="sans-small">
          UI Design System, Frontend Engineering, RoR Development
        </Text>
        <Browser
          src="/static/media/cover1.37e6df1b.png"
          className="u-margin-vertical"
        />
      </div>
      <div className="c-container-2col__item">
        <Text type="title" modifier="medium" className="u-margin-bottom-none">
          Newline Education Platform
          <span className="c-title__subtle">2018 – 2019</span>
        </Text>
        <Text type="paragraph" modifier="sans-small">
          Senior UI Designer, Frontend Engineer, Remote Full-Time
        </Text>
        <Text type="paragraph" modifier="medium">
          I worked on the product team to bring a fun and interactive online classroom experience to over 10,000 students with our custom CSS design system.
        </Text>
        <Text type="paragraph" modifier="medium">
          From the ground-up we designed, built, and documented a CSS component system with over 50 elements. It allowed anyone on the team to quickly assemble a view. In addition to authoring the design system, I worked with the engineering team in building the frontend for an in-browser IDE and student messaging system.
        </Text>
        <Text type="title" modifier="smallest">
          I Delivered
        </Text>
        <Text type="paragraph" modifier="sans-small">
          UI Design System, Frontend Engineering, RoR Development
        </Text>
        <Browser
          src="/static/media/cover1.37e6df1b.png"
          className="u-margin-vertical"
        />
      </div>
    </div>
    <div className="c-container-2col">
      <div className="c-container-2col__item">
        <Text type="title" modifier="medium" className="u-margin-bottom-none">
          Depends Canada Site
          <span className="c-title__subtle">2013</span>
        </Text>
        <Text type="paragraph" modifier="sans-small">
          Lead Frontend Engineer
        </Text>
        <Text type="paragraph" modifier="medium">
          While working for Organic, Inc., I had the opportunity to lead the engineering for a brand new marketing website for the Canadian division of Depends adult incontinence products. In addition, I also oversaw how American and French language translations were implemented and managed their effect on the design specifications.
        </Text>
        <Text type="title" modifier="smallest">
          I Delivered
        </Text>
        <Text type="paragraph" modifier="sans-small">
          UI Engineering on a .NET backend
        </Text>
        <Browser
          src="/static/media/cover1.37e6df1b.png"
          className="u-margin-top"
        />
      </div>
      <div className="c-container-2col__item u-border-top u-padding-bottom-large">
        <Text type="title" modifier="medium">
          More Work
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          Here are other notable works, content here
        </Text>
        <Text type="title" modifier="small">
          South Carolina Dept. of Commerce&mdash;Free Code Camp Platform
          <span className="c-title__subtle">2019</span>
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          I worked with SC Codes a program funded by the South Carolina Dept. Of Commerce. We built a free code education courses and an adjoining community platform with job-listings and statistics visualization. It was a a hit at the press conference and made state-wide news publications such as the The Post And Courier. The non-profit program grew 2,000 in the following month.
        </Text>
        <Text type="title" modifier="small">
          BMW
          <span className="c-title__subtle">2019</span>
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
        <Text type="title" modifier="small">
          Flatiron Code School
          <span className="c-title__subtle">2018</span>
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
        <Text type="title" modifier="small">
          ECHO Tools, North America
          <span className="c-title__subtle">2015</span>
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
        <Text type="title" modifier="small">
          The Outdoor Channel
          <span className="c-title__subtle">2009</span>
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
      </div>
    </div>
    <VisualTearElement
      styleIndex={0}
      colorVar='--c-background-primary'
      style={{
        height: 10,
        bottom: 0
      }}
    />
  </div>
  <div className="c-wrapper c-wrapper--sepia">
    <Text type="title" modifier="small" className="u-margin-top-large">Moving Forward (Tying it all together)</Text>
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
