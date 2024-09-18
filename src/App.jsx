import { useState } from "react";
import data from "./Data"; // Assuming the data is coming from this file
import Learners from "./components/Learners";
import Score from "./components/Score";


function App() {
  const [learners, setLearners] = useState(data);

  return (
    <div>
      <form>
        <label htmlFor="name"></label>
        <input type="text" />
      </form>
      <h1>Learners</h1>
      {learners.map((learner, index) => (
        <div key={index}>
          <Learners name={learner.name} bio={learner.bio} />
          <Score scores={learner.scores} />
        </div>
      ))}
      
    </div>
  );
}

export default App;
