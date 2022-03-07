import { useEffect, useState } from 'react';
import classnames from 'classnames';

const ThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const docEl = document.documentElement
    docEl.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
  }, [darkTheme]);

  const cssClassNames = classnames(
    'c-toggle',
    { 'c-toggle--active': darkTheme },
  );

  return (
    <button
      onClick={() => setDarkTheme(!darkTheme)}
      className={cssClassNames}
      children={darkTheme ? 'Dark' : 'Light'}
    />
  )
};

export default ThemeToggle;
