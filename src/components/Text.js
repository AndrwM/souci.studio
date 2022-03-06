import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import useIntersection from "../util/useIntersection";

const Text = ({
  tag,
  type,
  modifier,
  className,
  ...rest
}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();
  useIntersection(ref, setIsInView);

  const bemBase = `c-${type}`;
  const bemModifiers = (entry) => {
    if (!entry) return null;
    if (Array.isArray(entry)) return modifier.map(m => `${bemBase}--${m}`);
    return `${bemBase}--${modifier}`;
  };
  const compiledClassNames = classnames(
    bemBase,
    bemModifiers(modifier),
    'u-reveal',
    { 'u-reveal--active': isInView },
    className
  );

  let HtmlTag;
  switch (type) {
    case tag !== undefined:
      HtmlTag = tag;
      break;
    case 'title':
      HtmlTag = 'h2';
      break;
    case 'paragraph':
      HtmlTag = 'p';
      break;
    case 'heading':
      HtmlTag = 'h1';
      break;
    default:
      HtmlTag = 'p';
  }

  return (
    <HtmlTag
      ref={ref}
      className={compiledClassNames}
      {...rest}
    />
  )
};

Text.propTypes = {
  type: PropTypes.string.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
  modifier: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

Text.defaultProps = {
  tag: undefined,
  modifier: undefined,
};

export default Text;
