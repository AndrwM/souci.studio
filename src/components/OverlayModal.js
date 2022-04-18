import { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Link } from "react-router-dom";

const OverlayModal = () => {
  const [isActive, setIsActive] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.setAttribute('js-scroll-freeze', true)
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
        onClick={() => setIsActive(v => !v)}
        onMouseEnter={() => setHasHover(true)}
        onMouseLeave={() => setHasHover(false)}
        className={buttonClassNames}
        children={buttonText}
        tabIndex="0"
      />
      {ReactDOM.createPortal(
        <div className={modalClassNames}>
          <ul className="c-list c-list--xlarge">
            <li className="c-list__item c-list__item--wave"><a href="aa" className="c-link">About Me <span className="u-subtler">&nbsp;(&nbsp;You are here&nbsp;)</span></a></li>
            <li className="c-list__item c-list__item--remote"><a href="aa" className="c-link c-link--arrow-remote">LinkedIn</a></li>
            <li className="c-list__item c-list__item--remote"><a href="aa" className="c-link c-link--arrow-remote">Github</a></li>
            <li className="c-list__item c-list__item--diamond"><a href="aa" className="c-link">Colophon</a></li>
            <li className="c-list__item c-list__item--wave"><Link to="/wayback-machine" onClick={() => setIsActive(false)} className="c-link">Wayback: 2019</Link></li>
          </ul>
        </div>,
        document.body
      )}
    </>
  );
};

export default OverlayModal;
