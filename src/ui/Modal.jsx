import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";
import useDetectClickOutside from "../hooks/useDetectClickOutside";

const modal = createContext();

function Modal({ children }) {
  const [open, setOpen] = useState(null);

  const closeModal = () => setOpen(null);
  const openModal = setOpen;
  return (
    <modal.Provider value={{ open, closeModal, openModal }}>
      <div className="modal">{children}</div>
    </modal.Provider>
  );
}

function Button({ opens, children }) {
  const { openModal } = useContext(modal);

  return cloneElement(children, { onClick: () => openModal(opens) });
}

function Window({ name, children }) {
  const { open, closeModal } = useContext(modal);
  const { ref } = useDetectClickOutside(closeModal);
  if (!open || open !== name) return null;

  return createPortal(
    <div className="overlay">
      <div ref={ref} className="window">
        <div>
          <span onClick={closeModal}>
            <RxCross1 />
          </span>
        </div>
        <div>{cloneElement(children, { onClick: closeModal })}</div>
      </div>
    </div>,
    document.body
  );
}
Modal.Button = Button;
Modal.Window = Window;

export default Modal;
