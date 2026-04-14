function Footer({ children }) {
  return <footer className="bg-gray-100 p-6">{children}</footer>;
}

Footer.Section = function ({ title, children }) {
  return (
    <div>
      <h4 className="font-bold">{title}</h4>
      <div>{children}</div>
    </div>
  );
};

Footer.Bottom = function ({ children }) {
  return <div className="text-center mt-4 text-sm">{children}</div>;
};

export default Footer;