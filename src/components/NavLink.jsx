import { Link, useLocation } from "react-router-dom";

function NavLink({ children, href, className, activeClasses }) {
  const { pathname } = useLocation();

  const active = !!(pathname == href);
  {
    active && (className += " " + activeClasses);
  }

  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
}

export default NavLink;
