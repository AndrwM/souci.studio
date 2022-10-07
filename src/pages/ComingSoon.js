import Text from "../components/Text";
import VisualTearElement from "../components/VisualTearElement";

const Intro = () => (<>
  <div className="c-wrapper c-wrapper--noise">
    <Text type="title" modifier="medium" className="u-margin-bottom-xtiny">
      Andrew McIntee <span className="u-subtler" style={{whiteSpace: 'nowrap', marginLeft: 5}}>( mac∙ent∙tee )</span>
    </Text>
    <Text type="paragraph" modifier="xlarge">
      Thanks for stopping by, <br/>welcome to&nbsp;my&nbsp;website&nbsp;<span className="c-emoji c-emoji--large u-animate-wave">👋</span>
      {/* Welcome to my lil’&nbsp;spot&nbsp;on&nbsp;the&nbsp;web&nbsp;<span className="c-emoji c-emoji--large u-animate-wave">👋</span> */}
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">Professionally</Text>
    <Text type="paragraph">
      <span className="u-highlight">I’m a software engineer & product designer</span>, pushing <span className="u-highlight">thirteen years</span> of <span className="u-highlight">building web software</span>. For most of those years, I specialized on the client-side. I’m now <span className="u-highlight">focused server-side</span>, bringing my <span className="u-highlight">user experience engineering & design systems expertise</span> with me.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">For whom</Text>
    <Text type="paragraph">
      Currently, I’m a <span className="u-highlight">software engineer at</span> <a href="https://kajabi.com" rel="noopener noreferrer nofollow" target="_blank" className="c-link">Kajabi</a>. I build the learning management system and features like online course builders, media managers, website builders, video coaching, & online communities.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">Location</Text>
    <Text type="paragraph">
      I'm a long-time traveling remote worker, <span className="u-highlight">based from Atlanta.</span> Now post‑pandemic, I am once again living from locations unknown with my remote-working partner and friends.
    </Text>
    <Text type="paragraph" className="u-margin-top">
      Thanks for visting. <span className="u-highlight">Have a great day</span>. <span className="c-emoji">🌿</span>
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
  <div className="c-wrapper u-margin-bottom-large">
    <Text type="title" modifier="medium" className="u-margin-top">Expertise overview</Text>
    <Text type="paragraph">
    I identify as a software engineer & product design switch-hitter.
    Throughout my career, I have continued to move further down the techstack.
    This has left me with a well-rounded set of skills especially suited for cross-functional engineering teams, where each member wears multiple hats.
    </Text>
    <table>
      <thead>
        <tr>
          <th scope="col">Since</th>
          <th scope="col">&nbsp;</th>
          <th scope="col">Position</th>
          <th scope="col">Doing&hellip;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">2021</th>
          <td><span className="c-emoji">🧘</span></td>
          <td className="no-wrap">Software engineering</td>
          <td>Working within a Rails monolith of over 700 models in Ruby, Javascript, and Go</td>
        </tr>
        <tr>
          <th scope="row">2016</th>
          <td><span className="c-emoji">🔩</span></td>
          <td className="no-wrap">Design systems engineering</td>
          <td>Defining and nurturing the first design system, delivered through a collection of frontend packages and ruby gem</td>
        </tr>
        <tr>
          <th scope="row">2012</th>
          <td><span className="c-emoji">🎛</span></td>
          <td className="no-wrap">User interface design &amp; engineering</td>
          <td>Frontend subject matter expert ith emphasis on UI engineering and design systems for web software</td>
        </tr>
        <tr>
          <th scope="row">2009</th>
          <td><span className="c-emoji">🛀</span></td>
          <td className="no-wrap">Advertising design &amp; web development</td>
          <td>Advertising</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <a href="https://2019.andrew.mn/#/case-studies" rel="noopener noreferrer nofollow" target="_blank" className="c-link">Case studies (2019) →</a>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</>);


export default Intro;
