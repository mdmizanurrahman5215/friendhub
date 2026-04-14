export default function Button({
  children,
  icon,
  variant = "primary",
  onClick,
}) {
  const base =
    "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200";

  const styles = {
    primary: "bg-[#244D3F] text-white hover:bg-[#1a3a2d]",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline:
      "border border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}