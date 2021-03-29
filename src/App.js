import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(setData);
  },[])

  if (data) {
    return (
      <div>
        <ul>
          {data.map((user)=> (
            <li key={user.id}>{user.login}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Delete Users</button>
      </div>
    )
  }

  return <p>No Users</p>
}

export default App;
