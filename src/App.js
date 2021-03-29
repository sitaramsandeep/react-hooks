import { useState } from 'react';
import './App.css';

function App() {
  // const [status, setStatus] = useState("Not Delivered")
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      {/* <h1>The package is:{status}</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button> */}
      <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)}/>
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  );
}

export default App;
