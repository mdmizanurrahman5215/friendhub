function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl w-96">
        {children}
      </div>
    </div>
  );
}

Modal.Header = function ({ children }) {
  return <h2 className="text-xl font-bold mb-2">{children}</h2>;
};

Modal.Body = function ({ children }) {
  return <div className="mb-4">{children}</div>;
};

Modal.Footer = function ({ children }) {
  return <div className="flex justify-end gap-2">{children}</div>;
};

export default Modal;