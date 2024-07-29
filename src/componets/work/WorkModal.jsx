import React from "react";
import "./work.css";

const WorkModal = ({ item, closeModal }) => {
  return (
    <div className="work_modal active-modal">
      <div className="work_modal-content">
        <i className="ri-close-line work_modal-close" onClick={closeModal}></i>
        <h3 className="work_modal-title">{item.title}</h3>
        <p className="work_modal-desc">{item.info}</p>
      </div>
    </div>
  );
};

export default WorkModal;
