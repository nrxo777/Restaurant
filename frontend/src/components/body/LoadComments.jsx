import React from "react";
import dateFormat from "dateformat";

const LoadComments = ({ comments }) => {
  const previewComments = comments.map((info) => {
    return (
      <div key={info.id}>
        <h5>{info.author}</h5>
        <p>{info.comment}</p>
        <p>{dateFormat(info.date, "dddd, mmmm dS, yyyy")}</p>
        <hr />
      </div>
    );
  });
  return (
    <div>
      {comments.map(() => {
        return <div>{previewComments}</div>;
      })}
    </div>
  );
};

export default LoadComments;
