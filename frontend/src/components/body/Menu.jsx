import React, { useState } from "react";
import MenuItem from "./MenuItem";
import DISHES from "../../data/dishes";
import DishDetails from "./DishDetails";

const Menu = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);
  const onSelectDish = (dish) => {
    setSelectedDish(dish);
  };

  const menu = dishes.map((dish) => {
    return <MenuItem dish={dish} onSelectDish={onSelectDish} key={dish.id} />;
  });

  const dishDetail = selectedDish ? <DishDetails dish={selectedDish} /> : null;
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">{menu}</div>
        <div className="col-7">{dishDetail}</div>
      </div>
    </div>
  );
};

export default Menu;
