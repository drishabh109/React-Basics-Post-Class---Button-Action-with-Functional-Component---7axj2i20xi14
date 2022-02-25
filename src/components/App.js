import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [set, setPara] = useState();
  const para = () => {
    setPara((set) => (!set ? !set : set));
  };

  return (
    <div id="main">
      <button id="click" onClick={para}>
        click
      </button>
      {set && (
        <p>
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
