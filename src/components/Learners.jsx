import React from "react";

function Learners({ name, bio }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default Learners;

