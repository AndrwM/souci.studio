import Text from "../components/Text";
import VisualTearElement from "../components/VisualTearElement";

const Intro = () => (<>
  <div className="c-wrapper c-wrapper--accent u-padding-bottom-large">
    <Text type="paragraph" modifier="xlarge">
      I’m a web&nbsp;engineer &amp; product designer
      <span className="c-emoji c-emoji--large u-animate-wave">👋</span>
    </Text>
    <Text type="paragraph">
      My name is Andrew and I'm pushing 12 years working with the web.
    </Text>
    <Text type="paragraph">
      I’m currently a fullstack web engineer at Kajabi.
    </Text>
  </div>
  <div className="c-wrapper c-wrapper--sepia">
    <VisualTearElement
      styleIndex={2}
      colorVar='--c-background-accent'
      style={{
        height: 12,
        width: '100%',
        top: 0
      }}
    />
    <Text type="paragraph" modifier="medium">
    This site is just an intermediary presence while I flesh out the next version. – Thanks for visiting!
    </Text>
    <Text type="paragraph" modifier="sans-medium" className="OVERRIDE-signature">
      <span className="u-subtler">&mdash;</span>&nbsp; Andrew McIntee
    </Text>
  </div>
</>);


export default Intro;
