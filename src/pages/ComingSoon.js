import Text from "../components/Text";
import HtmlReveal from "../components/HtmlReveal";
import VisualTearElement from "../components/VisualTearElement";

const Intro = () => (<>
  <div className="c-wrapper c-wrapper--accent u-padding-bottom-xlarge">
    <Text type="title" modifier="medium" className="u-margin-bottom-xtiny">
      Andrew McIntee <span className="u-subtler" style={{whiteSpace: 'nowrap', marginLeft: 5}}>( mac∙ent∙tee )</span>
    </Text>
    <Text type="paragraph" modifier="xlarge">
      Thanks for stopping by, <br/>welcome to&nbsp;my&nbsp;website&nbsp;<span className="c-emoji c-emoji--large u-animate-wave">👋</span>
      {/* Welcome to my lil’&nbsp;spot&nbsp;on&nbsp;the&nbsp;web&nbsp;<span className="c-emoji c-emoji--large u-animate-wave">👋</span> */}
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">Professionally</Text>
    <Text type="paragraph">
      <span className="u-highlight">I’m a software engineer and product designer</span>, pushing <span className="u-highlight">thirteen years</span> of <span className="u-highlight">building web software</span>.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">Expertise</Text>
    <Text type="paragraph">
      For 10 years I specialized on the client&#8209;side. I designed and built software user interfaces for many organizations: from scrappy startups, to large SAAS softwares, and even larger entities like BMW, Outdoor Channel, and Home&nbsp;Depot. I’m now <span className="u-highlight">focused server&#8209;side</span>&ndash; building, maintaining, and measuring features for a multi&#8209;billion GMV software product with Ruby, Javascript, and Go.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">For whom</Text>
    <Text type="paragraph">
      Currently, I’m a <span className="u-highlight">software engineer at</span> <a href="https://kajabi.com" rel="noopener noreferrer nofollow" target="_blank" className="c-link">Kajabi</a>. I build the learning management system and features like online course builders, media managers, website builders, video coaching, & online communities.
    </Text>
    <Text type="title" modifier="small" className="u-margin-top">Location</Text>
    <Text type="paragraph">
      I'm a long-time traveling remote worker, <span className="u-highlight">from the southeast US.</span> Now post‑pandemic, I am once again living from locations unknown with my remote-working partner and friends. I call Atlanta home.
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
  <div className="c-wrapper u-padding-top-large">
    <Text type="title" modifier="medium" className="u-margin-top">Experience</Text>
    <HtmlReveal tag="table" className="u-margin-bottom">
      <thead>
        <tr>
          <th scope="col">Since</th>
          <th scope="col">&nbsp;</th>
          <th scope="col">Position</th>
          <th scope="col"/>
          <th scope="col">Doing&hellip;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">2020</th>
          <td><span className="c-emoji">🛠</span></td>
          <td className="no-wrap">Software engineer</td>
          <td />
          <td>Working within a large Rails monolith in Ruby, Javascript, and Go</td>
        </tr>
        <tr>
          <th scope="row">2016</th>
          <td><span className="c-emoji">🔩</span></td>
          <td className="no-wrap">Design systems engineer (Sr.)</td>
          <td />
          <td>Defining and nurturing the first design system, delivered through a collection of frontend packages and ruby gem</td>
        </tr>
        <tr>
          <th scope="row">2014</th>
          <td><span className="c-emoji">🎛</span></td>
          <td className="no-wrap">Frontend engineer</td>
          <td />
          <td>Frontend subject matter expert ith emphasis on UI engineering and design systems for web software</td>
        </tr>
        <tr>
          <th scope="row">2012</th>
          <td><span className="c-emoji">🍒</span></td>
          <td className="no-wrap">User interface designer</td>
          <td />
          <td>Frontend subject matter expert ith emphasis on UI engineering and design systems for web software</td>
        </tr>
        <tr>
          <th scope="row">2009</th>
          <td><span className="c-emoji">🛀</span></td>
          <td className="no-wrap">Web developer &amp; Designer in Advertising</td>
          <td />
          <td>Advertising</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row"></th>
          <td><span className="c-emoji">🔗</span></td>
          <td>
            <a href="https://2019.andrew.mn/#/case-studies" rel="noopener noreferrer nofollow" target="_blank" className="c-link">LinkedIn</a>
          </td>
          <td><span className="c-emoji">🔗</span></td>
          <td>
            <a href="https://2019.andrew.mn/#/case-studies" rel="noopener noreferrer nofollow" target="_blank" className="c-link">Case studies (2019 archive)</a>
          </td>
        </tr>
      </tfoot>
    </HtmlReveal>
    <Text type="paragraph">
      I identify as a software engineer and product designer switch&#8209;hitter.
      Throughout my career, I have continued to move further down the techstack.
      I'm most at home in cross&#8209;functional engineering teams, where each member wears multiple hats.
    </Text>
    <Text type="paragraph" className="u-margin-top">
      Thanks for visting. <span className="u-highlight">Have a great day</span>. <span className="c-emoji">🌿</span>
    </Text>
  </div>
</>);


export default Intro;
