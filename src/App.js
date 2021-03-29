import { useReducer } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useReducer((number, newNumber) => number + newNumber ,0)
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  )
  return (
    <div>
      <h1 onClick={() => setNumber(1)}>{number}</h1>
      <input type="checkbox" value={checked} onChange={toggle}/>
      <p>{checked ? "checked" : "not checked"}</p>
    </div>
  )
}

export default App;
