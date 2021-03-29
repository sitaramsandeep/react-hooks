import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("Jan");
  
  useEffect(() => {
    document.title = `Celebrate ${name}`;
  })

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName("Will")}>Change Winner</button>
    </section>
  )
}

export default App;
