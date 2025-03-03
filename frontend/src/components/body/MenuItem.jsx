import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

const MenuItem = ({ dish }) => {
  return (
    <div>
      <Card
        inverse
        style={{
          padding: 10,
          margin: 10,
        }}
      >
        <CardImg
          alt={dish.name}
          src={dish.image}
          style={{
            height: 270,
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
            }}
          >
            {dish.name}
          </CardTitle>
          <CardText style={{ color: "#313131", textAlign: "center" }}>
            {dish.description}
          </CardText>
          <CardText>#</CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MenuItem;
