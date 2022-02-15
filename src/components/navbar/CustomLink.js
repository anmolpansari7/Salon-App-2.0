import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  let isactive = match;

  return (
    <Link className="self-center" to={to} {...props}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isactive }, null)
      )}
    </Link>
  );
};

export default CustomLink;
