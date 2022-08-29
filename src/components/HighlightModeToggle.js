import { useEffect, useState, useMemo } from 'react';
import classnames from 'classnames';

const HighlightModeToggle = (props) => {
  const [hasHover, setHasHover] = useState(false);
  const [highlightMode, setHighlightMode] = useState(false);

  useEffect(() => {
    const documentClassList = document.documentElement.classList
    documentClassList.add('u-highlight-parent')
  }, []);

  useEffect(() => {
    const documentClassList = document.documentElement.classList
    highlightMode
    ? documentClassList.add('u-highlight-parent--active')
    : documentClassList.remove("u-highlight-parent--active");
  }, [highlightMode]);

  const cssClassNames = classnames(
    'c-toggle',
    { 'c-toggle--active': highlightMode },
  );

  const text = useMemo(() => {
    if (highlightMode && hasHover) {
      return 'Expound';
    } else if (!highlightMode && hasHover) {
      return 'Summarize'
    } else if (!highlightMode) {
      return 'Full Text'
    } else if (highlightMode) {
      return 'Summary'
    } else {
      return ''; // no-op
    }
  }, [hasHover, highlightMode]);

  return (
    <button
      {...props}
      onMouseOver={() => setHasHover(true)}
      onMouseLeave={() => setHasHover(false)}
      onClick={() => setHighlightMode(!highlightMode)}
      className={cssClassNames}
      children={text}
    />
  )
};

export default HighlightModeToggle;
