import PropTypes from 'prop-types';

const Video = ({
  src,
}) => (
  <video
    muted="true"
    preload="auto"
    loop="true"
    onMouseOver={ev => ev.target.play()}
    onMouseOut={ev => ev.target.pause()}
  >
    <source src={src} type="video/webm" />
    <p>Your user agent does not support the HTML5 Video element.</p>
  </video>
);

Video.propTypes = {
  src: PropTypes.string.isRequired,
};

Video.defaultProps = {
};

export default Video;
