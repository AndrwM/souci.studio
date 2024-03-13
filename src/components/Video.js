import { useRef } from 'react';
import PropTypes from 'prop-types';

// const testing = (ev) => {
//   console.log('!!!!!!!!!!!', ev)
//   // debugger;
// }

const Video = ({
  src,
}) => {
  const videoRef = useRef();

  return (
    <video
      className="c-inline-video"
      muted={true}
      controls={true}
      loop={true}
      playsInline={true}
      onMouseOver={ev => ev.target.play()}
      onMouseOut={ev => ev.target.pause()}
      // onLoad={testing}
      ref={videoRef}
    >
      <source src={src} type="video/mp4" />
      <p>Your user agent does not support the HTML5 Video element.</p>
    </video>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
};

Video.defaultProps = {
};

export default Video;
