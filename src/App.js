import { useReducer, useRef, useState } from 'react';
import './App.css';

function App() {
  // const sound = useRef();
  // const color = useRef();

  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    // const soundVal = sound.current.value;
    // const colorVal = color.current.value;

    // alert(`${soundVal} sounds like ${colorVal}`)
    // sound.current.value = "";
    // color.current.value = "";

    alert(`${sound} sounds like ${color}`)
    setSound("");
    setColor("#000000");
  }

  return (
    <form onSubmit={submit}>
      {/* <input ref={sound} type="text" placeholder="Sound..."/>
      <input ref={color} type="color"/> */}
      <input type="text" 
        placeholder="Sound..."
        value={sound}
        onChange={(e) => setSound(e.target.value)}
      />
      <input type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button>Add</button>
    </form>
  )
}

export default App;
