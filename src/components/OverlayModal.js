import { useState } from 'react';
import classnames from 'classnames';

const OverlayModal = () => {
  const [active, setActive] = useState(false);

  const buttonClassNames = classnames(
    'c-overlay-modal__button',
    { 'c-overlay-modal__button--active': active },
  );

  const modalClassNames = classnames(
    'c-overlay-modal',
    { 'c-overlay-modal--active': active },
  );

  return (
    <>
      <button
        onClick={() => setActive(v => !v)}
        className={buttonClassNames}
        children={active ? 'Close' : 'Navigation'}
      />
      <div className={modalClassNames}>
        <ul className="c-list c-list--xlarge">
          <li className="c-list__item c-list__item--wave"><a href="aa" className="c-link">About Me <span className="u-subtler">&nbsp;(&nbsp;You are here&nbsp;)</span></a></li>
          <li className="c-list__item c-list__item--remote"><a href="aa" className="c-link c-link--arrow-remote">LinkedIn</a></li>
          <li className="c-list__item c-list__item--remote"><a href="aa" className="c-link c-link--arrow-remote">Github</a></li>
          <li className="c-list__item c-list__item--diamond"><a href="aa" className="c-link">Colophon</a></li>
          <li className="c-list__item c-list__item--rocket"><a href="aa" className="c-link">Case Studies <span className="u-subtler">&nbsp;(&nbsp;2019&nbsp;)</span></a></li>
        </ul>
      </div>
    </>
  )
};

export default OverlayModal;
