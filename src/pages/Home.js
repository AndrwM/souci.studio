import Text from "../components/Text";
import Video from "../components/Video";
import VisualTearElement from "../components/VisualTearElement";
import TestVideo from "../assets/images/media/trailer.webm";

const Home = () => (<>
  <div className="c-wrapper c-wrapper--accent u-padding-bottom-xlarge">
    <Text type="title" modifier="small" className="u-margin-top-large">Souci Studio</Text>
    <Text type="paragraph">
      We specialize in procuring the extraordinary. Our bicolor sapphires, meticulously selected from across the world, boast unparalleled elegance with their unique hues and captivating inclusions.
    </Text>
    {/* <Text type="paragraph">
    Each gem exudes opulence, promising to elevate your discerning taste and set you apart in a world where true luxury knows no bounds. Experience the epitome of refinement with our exquisite collection and adorn yourself with the essence of rarity and prestige.
    </Text> */}
    <VisualTearElement
      styleIndex={0}
      colorVar='--c-background-primary'
      style={{
        height: 16,
        bottom: 0
      }}
    />
  </div>
  <div className="c-wrapper c-wrapper--full u-padding-top-small">
    <div className="c-container-2col">
      <div className="c-container-2col__item">
        <div className="c-image-slide">
          <Video className="c-image-slide" src={TestVideo} />
          <div className="c-image-slide__container">
            <div className="c-image-slide__title">Sapphire 011</div>
            <div className="c-image-slide__weight">2.04 caret</div>
            <div className="c-image-slide__location">Australia</div>
          </div>
        </div>
      </div>
      <div className="c-container-2col__item">
        <div className="c-image-slide">
          <Video className="c-image-slide" src={TestVideo} />
            <div className="c-image-slide__sold-tag">Sold</div>
            <div className="c-image-slide__container">
            <div className="c-image-slide__title">Sapphire 012</div>
            <div className="c-image-slide__weight">2.04 caret</div>
            <div className="c-image-slide__location">Australia</div>
          </div>
        </div>
      </div>
    </div>
    <div className="c-container-2col">
      <div className="c-container-2col__item">
        <div className="c-image-slide">
          <Video className="c-image-slide" src={TestVideo} />
            <div className="c-image-slide__container">
            <div className="c-image-slide__title">Sapphire 013</div>
            <div className="c-image-slide__weight">2.04 caret</div>
            <div className="c-image-slide__location">Australia</div>
          </div>
        </div>
      </div>
      <div className="c-container-2col__item">
        <div className="c-image-slide">
          <Video className="c-image-slide" src={TestVideo} />
          <div className="c-image-slide__container">
            <div className="c-image-slide__title">Sapphire 021</div>
            <div className="c-image-slide__weight">2.04 caret</div>
            <div className="c-image-slide__location">Tanzania</div>
          </div>
        </div>
      </div>
    </div>
    <div className="c-container-2col">
      <div className="c-container-2col__item">
        <div className="c-image-slide">
          <Video className="c-image-slide" src={TestVideo} />
        <div className="c-image-slide__container">
            <div className="c-image-slide__title">Sapphire 022</div>
            <div className="c-image-slide__weight">2.04 caret</div>
            <div className="c-image-slide__location">Tanzania</div>
          </div>
        </div>
      </div>
      <div className="c-container-2col__item">
        <div className="c-image-slide">
          <Video className="c-image-slide" src={TestVideo} />
          <div className="c-image-slide__container">
            <div className="c-image-slide__title">Sapphire 023</div>
            <div className="c-image-slide__weight">2.04 caret</div>
            <div className="c-image-slide__location">Tanzania</div>
          </div>
        </div>
      </div>
    </div>
    <VisualTearElement
      styleIndex={0}
      colorVar='--c-background-accent2'
      style={{
        height: 16,
        bottom: 0
      }}
    />
  </div>
  <div className="c-wrapper c-wrapper--accent2 u-padding-bottom-xlarge">
    <Text type="paragraph">
      Souci Studio is the darling of two travelers who call San&nbsp;Souci, South&nbsp;Carolina home.<br />
      Interested in working with us to source a unique stone?
    </Text>
    <Text type="paragraph" modifier="mono-medium">
      consult@souci.studio
    </Text>
  </div>
</>);


export default Home;
