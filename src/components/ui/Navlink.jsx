import { NavLink } from "react-router-dom";

export default function CustomNavLink({ to, children, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md ${
          isActive ? "bg-blue-500 text-white" : "text-gray-600"
        }`
      }
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </NavLink>
  );
}