import React, { useEffect } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/30 transition-opacity"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full transform transition-all duration-300 scale-100 opacity-100"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
