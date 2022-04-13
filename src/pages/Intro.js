import ExperienceDesign from "./partials/ExperienceDesign";
import ExperienceEngineering from "./partials/ExperienceEngineering";
import Text from "../components/Text";
import Browser from "../components/Browser";
import VisualTearElement from "../components/VisualTearElement";

const Intro = () => (<>
  <div className="c-wrapper c-wrapper--sepia u-padding-bottom-large">
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
  </div>
  <div className="c-wrapper c-wrapper--slim c-wrapper--accent">
    <VisualTearElement
      styleIndex={2}
      colorVar='--c-background-primary'
      style={{
        height: 12,
        width: '100%',
        top: '0px'
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
  </div>
  <div className="c-wrapper c-wrapper--sepia">
    <VisualTearElement
      styleIndex={0}
      flipY={true}
      colorVar='--c-background-accent'
      style={{
        height: 10,
        width: '80%',
        top: '0px'
      }}
    />
    <Text type="title" modifier="small" className="u-margin-top-small">Experience (Engineering)</Text>
    <Text type="paragraph">
      {/* Most recently, I lead the creation and execution of design systems at Division Of Labor, a digital product development agency. There we partnered with alpha-stage startups to design and build their MVP products. */}
      Most recently, I led design, frontend and user experience at a venture backed startup called OffSite. OffSite was spun out of Division of Labor, a digital product development agency where I led creation and execution of design systems for a variety of software products.
    </Text>
    <Text type="paragraph">
      {/* Previous to this, I served as the co-founder and director of product design at Coindex Labs.I oversaw all user interface design, marketing visual design, and engineered prototypes of our crypotocurrency trading platform interface. */}
      Prior to this, I served as the co-founder and director of product design at Coindex Labs. I oversaw all user interface design, marketing visual design, and engineered prototypes of our crypotocurrency trading platform interface. We made it to the final round of selection in a recent Tech Stars New York cohort.
    </Text>
    <VisualTearElement
      styleIndex={1}
      flipY={true}
      colorVar='--c-background-accent'
      style={{
        height: 12,
        width: '95%',
        bottom: 0
      }}
    />
  </div>
  <div className="c-wrapper c-wrapper--slim c-wrapper--accent">
    <Text type="title" modifier="small" className="u-margin-top-small">My Work (Design)</Text>
    <Text type="paragraph">
      From 2015-'17, I worked as a senior software designer at The Iron Yard (now sold) working on the LMS product team.
    </Text>
    <Text type="paragraph">
      {/* Prior to that, I ran a small UI design studio that designed user interfaces with product agencies &amp; startups and worked for international brands as a design engineer in a few big-name digital marketing agencies. */}
      Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
    </Text>
  </div>
  <div className="c-wrapper c-wrapper--accent c-wrapper--flush u-border-top">
    <div className="c-container-2col">
      <div className="c-container-2col__item">
        <Text type="title" modifier="medium" className="u-margin-bottom-none">
          My Work (Design)
          <span className="c-title__subtle">2018 – 2019</span>
        </Text>
        <Text type="paragraph" modifier="sans-small">
          Earlier in my career, I ran a small UI design studio
        </Text>
        <Text type="paragraph" modifier="medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
        <Text type="title" modifier="smallest">
          I Delivered
        </Text>
        <Text type="paragraph" modifier="sans-small">
          Design System, React Engineering, RoR Development
        </Text>
        <Browser
          src="/static/media/cover1.37e6df1b.png"
          className="u-margin-vertical"
        />
      </div>
      <div className="c-container-2col__item">
        <Text type="title" modifier="medium" className="u-margin-bottom-none">
          My Work (Design)
          <span className="c-title__subtle">2018 – 2019</span>
        </Text>
        <Text type="paragraph" modifier="sans-small">
          Earlier in my career, I ran a small UI design studio
        </Text>
        <Text type="paragraph" modifier="medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
        <Text type="title" modifier="smallest">
          I Delivered
        </Text>
        <Text type="paragraph" modifier="sans-small">
          Design System, React Engineering, RoR Development
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
          My Work (Design)
          <span className="c-title__subtle">2018 – 2019</span>
        </Text>
        <Text type="paragraph" modifier="sans-small">
          Earlier in my career, I ran a small UI design studio
        </Text>
        <Text type="paragraph" modifier="medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
        <Text type="title" modifier="smallest">
          I Delivered
        </Text>
        <Text type="paragraph" modifier="sans-small">
          Design System, React Engineering, RoR Development
        </Text>
        <Browser
          src="/static/media/cover1.37e6df1b.png"
          className="u-margin-top"
        />
      </div>
      <div className="c-container-2col__item u-border-top">
        <Text type="title" modifier="medium">
          More Work
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          Due to privacy restrictions, some of my work is not available publicly. If you would like to see engineering or marketing samples, email me at
        </Text>
        <Text type="title" modifier="small">
          BMW
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
        <Text type="title" modifier="small">
          Flatiron Code School
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
        <Text type="title" modifier="small">
          ECHO Tools, North America
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
        <Text type="title" modifier="small">
          The Outdoor Channel
        </Text>
        <Text type="paragraph" modifier="sans-medium">
          Earlier in my career, I ran a small UI design studio that created user interfaces for product agencies & startups and worked for international brands as a design engineer in a few big-name digital marketing agencies.
        </Text>
      </div>
    </div>
  </div>
  <div className="c-wrapper c-wrapper--slim c-wrapper--accent">
    <VisualTearElement
      styleIndex={0}
      colorVar='--c-background-primary'
      style={{
        height: 10,
        width: '80%',
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
