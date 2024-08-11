import { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { HiTrash } from "react-icons/hi2";
import Modal from "./Modal";
import CreateFlashCard from "../features/FlashCard/CreateFlashCard";
import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
import { useLocation } from "react-router-dom";
function Flipcard({ data, index }) {
  const localpath = useLocation();

  const path = localpath.pathname.split("/")[1];
  const [flip, setFlip] = useState(false);

  return (
    <div className="mainContainer">
      <div
        className={`card ${flip === true ? "fliping" : "unfliping"}`}
        onClick={() => setFlip((p) => !p)}
      >
        <div className="front ">
          <div className="content">
            <h2>
              <span>
                <span>{index}. </span>
                <span>Question</span>
              </span>
            </h2>
            <p>{data.question}</p>
          </div>
          {path === "admin" && (
            <div className="cardOperations" onClick={(e) => e.preventDefault()}>
              <Modal>
                <Modal.Button opens="editCard">
                  <span>
                    <GrEdit />
                  </span>
                </Modal.Button>
                <Modal.Button opens="deleteCard">
                  <span>
                    <HiTrash />
                  </span>
                </Modal.Button>
                <Modal.Window name="editCard">
                  <CreateFlashCard data={data} editSession={true} />
                </Modal.Window>
                <Modal.Window name="deleteCard">
                  <ConfirmDelete id={data.id} />
                </Modal.Window>
              </Modal>
            </div>
          )}
        </div>
        <div className="back ">
          <div className="content">
            <p>{data.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flipcard;
