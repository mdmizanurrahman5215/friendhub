function ModalFooter({ children }) {
  return <footer className="bg-[#244D3F] container mx-auto p-6 text-white flex flex-col justify-center items-center text-center ">{children}</footer>;
}

ModalFooter.Section = function ({ title, children }) {
  return (
    <div className="mb-4">
      <h4 className="text-4xl font-bold mb-4">{title}</h4>
      <div>{children}</div>
    </div>
  );
};

ModalFooter.Bottom = function ({ children }) {
  return <div className="text-center mt-4 text-sm w-full">{children}</div>;
};

export default ModalFooter;