import { useMemo, useEffect, useState } from 'react';
import { useResolvedPath, useMatch, Link } from "react-router-dom";

const YouAreHere = () => <span className="u-subtler">&nbsp;(&nbsp;You are here&nbsp;)</span>;

const OverlayModalNavigationLink = ({to, className, children, ...rest}) => {
  const resolved = useResolvedPath(to);
  const isActive = useMatch({ path: resolved.pathname, end: true });

  return(
    <Link
      {...rest}
      className={`c-link ${className}`}
      to={to}
    >
      {children}
      {isActive && <YouAreHere />}
    </Link>
  );
};

export default OverlayModalNavigationLink;
