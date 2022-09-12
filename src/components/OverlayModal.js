import { useMemo, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
// import queryFirstFocusable from "../util/queryFirstFocusable";
import useEscKeyListener from "../util/useEscKeyListener";

import OverlayModalNavigationLink from "./OverlayModalNavigationLink";

const closeIcon = (
  <svg width="22" height="22" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0092 4.86193C12.2695 5.12228 12.2695 5.54439 12.0092 5.80474L9.8139 8L12.0092 10.1953C12.2695 10.4556 12.2695 10.8777 12.0092 11.1381C11.7488 11.3984 11.3267 11.3984 11.0664 11.1381L8.87109 8.94281L6.67583 11.1381C6.41548 11.3984 5.99337 11.3984 5.73302 11.1381C5.47267 10.8777 5.47267 10.4556 5.73302 10.1953L7.92829 8L5.73302 5.80474C5.47267 5.54439 5.47267 5.12228 5.73302 4.86193C5.99337 4.60158 6.41548 4.60158 6.67583 4.86193L8.87109 7.05719L11.0664 4.86193C11.3267 4.60158 11.7488 4.60158 12.0092 4.86193Z" fill="#202327"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87109 0C4.45282 0 0.871094 3.58172 0.871094 8C0.871094 12.4183 4.45282 16 8.87109 16C13.2894 16 16.8711 12.4183 16.8711 8C16.8711 3.58172 13.2894 0 8.87109 0ZM2.20443 8C2.20443 4.3181 5.1892 1.33333 8.87109 1.33333C12.553 1.33333 15.5378 4.3181 15.5378 8C15.5378 11.6819 12.553 14.6667 8.87109 14.6667C5.1892 14.6667 2.20443 11.6819 2.20443 8Z" fill="#202327"/>
  </svg>
);

const expandIcon = (
  <svg width="22" height="22" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.4714 0.528594C4.21106 0.268245 3.78894 0.268245 3.5286 0.528594L0.195262 3.86193C-0.0650874 4.12228 -0.0650874 4.54439 0.195262 4.80474C0.455612 5.06509 0.877722 5.06509 1.13807 4.80474L4 1.94281L6.86193 4.80474C7.12228 5.06509 7.54439 5.06509 7.80474 4.80474C8.06509 4.54439 8.06509 4.12228 7.80474 3.86193L4.4714 0.528594Z" fill="#202327"/>
    <path d="M1.13807 9.19526C0.877722 8.93491 0.455612 8.93491 0.195262 9.19526C-0.0650874 9.45561 -0.0650874 9.87772 0.195262 10.1381L3.5286 13.4714C3.78894 13.7318 4.21106 13.7318 4.4714 13.4714L7.80474 10.1381C8.06509 9.87772 8.06509 9.45561 7.80474 9.19526C7.54439 8.93491 7.12228 8.93491 6.86193 9.19526L4 12.0572L1.13807 9.19526Z" fill="#202327"/>
  </svg>
);

const OverlayModal = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [hasHover, setHasHover] = useState(false);
  const linkTabIndex = useMemo(() => (isActive ? 0 : -1), [isActive]);
  const modalRef = useRef();

  useEscKeyListener(() => setIsActive(false), isActive);

  useEffect(() => {
    if (isActive) {
      document.body.setAttribute('js-scroll-freeze', true);
      // queryFirstFocusable(modalRef.current).focus();
    } else {
      document.body.setAttribute('js-scroll-freeze', false)
    }
  }, [isActive])

  const buttonClassNames = classnames(
    'c-overlay-modal__button',
    { 'c-overlay-modal__button--active': isActive },
  );

  const modalClassNames = classnames(
    'c-overlay-modal',
    { 'c-overlay-modal--active': isActive },
  );

  const buttonText = useMemo(() => {
    const uiName = 'Menu';
    if (isActive && hasHover) return <>
      {closeIcon}
      {`Close ${uiName}`}
    </>;

    if (!isActive && hasHover) return <>
      {expandIcon}
      {`Open ${uiName}`}
    </>;

    if (isActive) return <>
      {closeIcon}
      {`Close ${uiName}`}
    </>;

    return <>
      {expandIcon}
      {uiName}
    </>;
  }, [isActive, hasHover]);

  return (
    <>
      <button
        {...props}
        onClick={() => setIsActive(v => !v)}
        onMouseEnter={() => setHasHover(true)}
        onMouseLeave={() => setHasHover(false)}
        className={buttonClassNames}
        children={buttonText}
        tabIndex={1}
      />
      {ReactDOM.createPortal(
        <div
          className={modalClassNames}
          ref={modalRef}
          aria-hidden={!isActive}
        >
          <ul className="c-list c-list--xlarge">
            <li className="c-list__item c-list__item--wave">
              <OverlayModalNavigationLink to="/" children="About Me" tabIndex={linkTabIndex} onClick={() => setIsActive(false)} />
            </li>
            {/* <li className="c-list__item c-list__item--diamond">
              <OverlayModalNavigationLink to="/colophon" children="Colophon" tabIndex={linkTabIndex} onClick={() => setIsActive(false)} />
            </li> */}
          </ul>
          <ul className="c-list c-list--large">
            <li className="c-list__item c-list__item--remote">
              <a href="https://www.linkedin.com/in/andrewmcintee/" tabIndex={linkTabIndex} className="c-link c-link--arrow-remote" target="_blank">LinkedIn</a>
            </li>
            <li className="c-list__item c-list__item--remote">
              <a href="https://github.com/AndrwM" tabIndex={linkTabIndex} className="c-link c-link--arrow-remote" target="_blank">Github</a>
            </li>
            <li className="c-list__item c-list__item--history">
              <a href="https://2019.andrew.mn" tabIndex={linkTabIndex} className="c-link c-link--arrow-remote" target="_blank">2019 Archival Website</a>
            </li>
          </ul>
          <p className="c-paragraph c-paragraph--sans-medium u-padding-top-small u-border-top">
            Thanks for taking the time to learn about me.&nbsp;<br />
            Contact me at <a href="mailto:studio@Andrew.mn" className="c-link" tabIndex={linkTabIndex}>Studio@Andrew.mn</a> if you feel inclined.&nbsp;💌
          </p>
          <p className="c-paragraph c-paragraph--sans-smallest u-subtler">
            Your privacy is important; this site is GDPR compliant.&nbsp;<br />
            ©&nbsp;Andrew&nbsp;McIntee '08&nbsp;–&nbsp;2022.
          </p>
        </div>,
        document.body
      )}
    </>
  );
};

export default OverlayModal;
