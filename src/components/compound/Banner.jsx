function Banner({ children }) {
  return (
    <div className="flex justify-center items-center flex-col p-6 rounded-xl py-20 text-center gap-4">
      {children}
    </div>
  );
}

Banner.Title = function ({ children }) {
  return <h1 className="text-5xl font-bold">{children}</h1>;
};

Banner.Description = function ({ children }) {
  return <p className="text-gray-600 text-center">{children}</p>;
};

Banner.Actions = function ({ children }) {
  return <div className="mt-4 flex gap-2">{children}</div>;
};

export default Banner;