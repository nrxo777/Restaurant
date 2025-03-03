import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const DishDetails = ({ dish }) => {
  return (
    <>
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={dish.image}
          style={{
            height: 180,
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <CardText>
            <span style={{ fontWeight: 500 }}>Price: </span>
            {dish.price} Tk
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default DishDetails;
