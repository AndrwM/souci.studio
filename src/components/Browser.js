import PropTypes from 'prop-types';

const Browser = ({
  src,
  className,
  ...rest
}) => (
  <div className={`c-browser ${className}`} {...rest}>
    <div className="c-browser__content">
      <img src={src} />
    </div>
  </div>
);

Browser.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Browser.defaultProps = {
  className: ''
};

export default Browser;
