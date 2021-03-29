import { useReducer } from 'react';
import './App.css';

const initialState = {
  message: "Hi"
}

function reducer(state, action) {
  switch(action.type) {
    case "yell":
      return {
        message: `HEY!`
      }
    case "whisper":
      return {
        message: `excuse me`
      }
  }

}

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  )
  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({type:"yell"})}>YELL</button>
      <button onClick={() => dispatch({type:"whisper"})}>Whisper</button>
    </>
  )
}

export default App;
