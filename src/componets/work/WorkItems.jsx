import React, { useState } from "react";
import "./work.css";
import WorkModal from "./WorkModal";

const WorkItems = ({ item }) => {
  const [modalActive, setModalActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleTab = (item) => {
    setSelectedItem(item);
    setModalActive(!modalActive);
  };

  return (
    <>
      <div className="work_card" key={item.id}>
        <img src={item.image} alt="" className="work_img" />
        <h3 className="work_title">{item.title}</h3>
        <span className="work_button" onClick={() => toggleTab(item)}>
          View More <i class="ri-arrow-right-line work_button-icon"></i>
        </span>
      </div>

      {modalActive && (
        <WorkModal
          item={selectedItem}
          closeModal={() => setModalActive(false)}
        />
      )}
    </>
  );
};

export default WorkItems;
