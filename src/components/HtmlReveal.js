import { useRef, useState, createElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import useIntersection from "../util/useIntersection";

const HtmlReveal = ({
  tag,
  className,
  ...rest
  }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();
  useIntersection(ref, setIsInView);

  const compiledClassNames = classnames(
    'u-reveal',
    { 'u-reveal--active': isInView },
    className
  );

  return createElement(
    tag,
    {
      ...rest,
      className: compiledClassNames,
      ref,
    }
  )
};

HtmlReveal.propTypes = {
  tag: PropTypes.string.isRequired,
  className: PropTypes.string,
};

HtmlReveal.defaultProps = {
  className: '',
};

export default HtmlReveal;
