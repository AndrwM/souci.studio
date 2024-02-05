import { useEffect, useState, useMemo } from 'react';
import classnames from 'classnames';

const ThemeToggle = (props) => {
  const [hasHover, setHasHover] = useState(false);
  const [darkTheme, setDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const docEl = document.documentElement
    docEl.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  const cssClassNames = classnames(
    'c-toggle',
    { 'c-toggle--active': darkTheme },
  );

  const text = useMemo(() => {
    if (darkTheme && hasHover) {
      return 'Lighten';
    } else if (!darkTheme && hasHover) {
      return 'Darken'
    } else if (!darkTheme) {
      return 'Light'
    } else if (darkTheme) {
      return 'Dark'
    } else {
      return ''; // no-op
    }
  }, [hasHover, darkTheme]);

  return (
    <button
      {...props}
      onPointerOver={() => setHasHover(true)}
      onPointerLeave={() => setHasHover(false)}
      onClick={() => setDarkTheme(!darkTheme)}
      className={cssClassNames}
      children={text}
    />
  )
};

export default ThemeToggle;
