import { useMemo, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import queryFirstFocusable from "../util/queryFirstFocusable";
import useEscKeyListener from "../util/useEscKeyListener";

import OverlayModalNavigationLink from "./OverlayModalNavigationLink";

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
    if (isActive && hasHover) return `Close ${uiName}`;
    if (!isActive && hasHover) return `Open ${uiName}`;
    if (isActive) return `Close ${uiName}`;

    return `${uiName}`;
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
      />
      {ReactDOM.createPortal(
        <div
          className={modalClassNames}
          ref={modalRef}
        >
          <ul className="c-list c-list--xlarge">
            <li className="c-list__item c-list__item--wave">
              <OverlayModalNavigationLink to="/" children="About Me" tabIndex={linkTabIndex} onClick={() => setIsActive(false)} />
            </li>
            <li className="c-list__item c-list__item--diamond">
              <OverlayModalNavigationLink to="/colophon" children="Colophon" tabIndex={linkTabIndex} onClick={() => setIsActive(false)} />
            </li>
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
            Contact me at <a href="mailto:studio@Andrew.mn" className="c-link" tabIndex={linkTabIndex}>Studio@Andrew.mn</a> if you feel inclined.&nbsp;😎
          </p>
        </div>,
        document.body
      )}
    </>
  );
};

export default OverlayModal;
