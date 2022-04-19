import ExperienceDesign from "./partials/ExperienceDesign";
import ExperienceEngineering from "./partials/ExperienceEngineering";
import Text from "../components/Text";
import Browser from "../components/Browser";
import VisualTearElement from "../components/VisualTearElement";

const Intro = () => (<>
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
