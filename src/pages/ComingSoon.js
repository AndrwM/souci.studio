import Text from "../components/Text";
import VisualTearElement from "../components/VisualTearElement";

const Intro = () => (<>
  <div className="c-wrapper c-wrapper--accent u-margin-bottom-large">
    <Text type="paragraph" modifier="sans-medium" className="u-margin-none">
      Andrew McIntee <span className="u-subtler" style={{whiteSpace: 'nowrap', marginLeft: 5}}>( mac∙ent∙tee )</span>
    </Text>
    <Text type="paragraph" modifier="xlarge">
      Welcome to my lil’&nbsp;spot&nbsp;on&nbsp;the&nbsp;web&nbsp;<span className="c-emoji c-emoji--large u-animate-wave">👋</span>
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">What</Text>
    <Text type="paragraph">
      I’m a professional software engineer & product designer, pushing thirteen years building web software. For most of those years, I specialized on the client-side. I’m now focused server-side, bringing my user experience engineering & design systems expertise with me.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">For whom</Text>
    <Text type="paragraph">
      Currently I’m a software engineer at <a href="https://kajabi.com" rel="noopener noreferrer nofollow" target="_blank" className="c-link">Kajabi</a>. I build the learning management system and features like online course builders, media managers, website builders, video coaching, & online communities.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">Where</Text>
    <Text type="paragraph">
      As a long-time (pre-covid) remote worker, I call Atlanta home but find myself traveling 9 months out of the year with my remote-working partner and friends.
    </Text>
    <Text type="paragraph">
      Thanks for visting. Have a great day. <span className="c-emoji">🌿</span>
    </Text>
    {/* <Text type="paragraph" modifier="sans-medium" className="OVERRIDE-signature">
      <span className="u-subtler">&mdash;</span>&nbsp;Andrew McIntee <span className="u-subtler" style={{whiteSpace: 'nowrap', marginLeft: 5}}>( mac∙ent∙tee )</span>
    </Text> */}
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
