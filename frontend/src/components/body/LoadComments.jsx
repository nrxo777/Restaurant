import React from "react";
import dateFormat from "dateformat";

const LoadComments = ({ comments = [] }) => {
  return (
    <div>
      {comments.map((info) => (
        <div key={info.id}>
          <h5>{info.author}</h5>
          <p>{info.comment}</p>
          <p>{dateFormat(info.date, "dddd,mmmm dS, yyyy")}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default LoadComments;
