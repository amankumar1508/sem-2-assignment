import React, { useState } from "react";

function App() {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggle}>
        {visible ? "Hide" : "Show"}
      </button>

      {visible && <p>This is a paragraph</p>}
    </div>
  );
}

export default App;