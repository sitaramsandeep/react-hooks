import { useReducer, useRef, useState } from 'react';
import './App.css';
import useInput from './useInput';

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`)
    resetTitle("");
    resetColor("#000000");
  }

  return (
    <form onSubmit={submit}>
      <input type="text" 
        placeholder="Sound..."
        {...titleProps}
      />
      <input type="color"
        {...colorProps}
      />
      <button>Add</button>
    </form>
  )
}

export default App;
