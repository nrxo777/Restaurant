import React, { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import DishDetails from "./DishDetails";
import { CardColumns, Modal, ModalFooter } from "reactstrap";

const Menu = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  let [modalOpen, setModalOpen] = useState(false);
  const onSelectDish = (dish) => {
    setSelectedDish(dish);
    setModalOpen(true);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const menu = dishes.map((dish) => {
    return <MenuItem dish={dish} onSelectDish={onSelectDish} key={dish.id} />;
  });

  const dishDetail = selectedDish ? <DishDetails dish={selectedDish} /> : null;
  return (
    <div className="container">
      <div className="row">
        <CardColumns>{menu}</CardColumns>
        <Modal isOpen={modalOpen} onClick={toggleModal}>
          {dishDetail}
          <ModalFooter>
            <button className="btn btn-secondary" onClick={toggleModal}>
              Close
            </button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default Menu;
