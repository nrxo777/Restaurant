import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import LoadComments from "./LoadComments";

const DishDetails = (props) => {
  return (
    <>
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={props.dish.image}
          style={{
            height: "100%",
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
          <CardText>
            <span style={{ fontWeight: 500 }}>Price: </span>
            {props.dish.price} Tk
          </CardText>
          <hr />
          <h4>Comments:</h4>
          <br />
          <LoadComments comments={props.comments} />
        </CardBody>
      </Card>
    </>
  );
};

export default DishDetails;
