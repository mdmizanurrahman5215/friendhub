import { NavLink } from "react-router-dom";

export default function CustomNavLink({ to, children, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 md:gap-2 px-2 md:px-3 py-1  md:py-2 rounded-md ${
          isActive ? "bg-[#244D3F] text-white" : "text-gray-600"
        }`
      }
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </NavLink>
  );
}