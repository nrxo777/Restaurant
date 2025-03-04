import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

const MenuItem = ({ dish, onSelectDish }) => {
  return (
    <div>
      <Card
        onClick={() => onSelectDish(dish)}
        inverse
        style={{
          padding: 10,
          margin: 10,
          width: 370,
          cursor: "pointer",
        }}
      >
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: 270,
            width: 350,
            opacity: 0.5,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle
            tag="h5"
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              paddingTop: 25,
            }}
          >
            {dish.name}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MenuItem;
