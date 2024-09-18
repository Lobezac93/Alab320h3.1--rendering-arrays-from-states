import React from "react";

function Score({ scores }) {
  return (
    <div>
      <h3>Scores:</h3>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            Date: {score.date} & Score: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Score;

