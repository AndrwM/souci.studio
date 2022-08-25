import Text from "../components/Text";
import VisualTearElement from "../components/VisualTearElement";

const Intro = () => (<>
  <div className="c-wrapper c-wrapper--accent u-padding-bottom-large">
    <Text type="paragraph" modifier="xlarge" className="u-margin-bottom">
      Welcome to my lil’ spot on the web <span className="c-emoji c-emoji--large u-animate-wave">👋</span>
    </Text>
    <Text type="paragraph">
      My name is Andrew&nbsp;McIntee.
    </Text>
    <Text type="paragraph">
      Professionally I’m a software&nbsp;engineer &amp; product&nbsp;designer.
      I’m pushing thirteen years building web software. Most of those years have been working client-side, I’m now focused server-side bringing my user experience &amp; design systems expertise with me.
    </Text>
    <Text type="paragraph">
      Currently I’m a software engineer at <a href="https://kajabi.com" rel="noopener noreferrer nofollow" target="_blank" className="c-link">Kajabi</a>. I build our learning management system; sellable course creators, media managers, website builders, video coaching, &amp; online community management.
    </Text>
    <Text type="paragraph" modifier="sans-medium" className="OVERRIDE-signature">
      <span className="u-subtler">&mdash;</span>&nbsp; Thanks for visiting!
      &nbsp;<span className="c-emoji">🌞</span>
    </Text>
    <VisualTearElement
      styleIndex={0}
      flipY={false}
      colorVar='--c-background-primary'
      style={{
        height: 10,
        bottom: 0
      }}
    />
  </div>
</>);


export default Intro;
