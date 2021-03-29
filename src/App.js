import './App.css';
import {FaStar} from 'react-icons/fa';
import { useState } from 'react';

const createArray = (length) => [...Array(length)]

function Star({ selected = false, onSelect }) {
  return <FaStar 
  color={selected ? "red" : "gray"}
  onClick={onSelect}
  />
}

function StarRating({totalStars = 5}) {
  const [selectedStar, setSelectedStar] = useState(0)

 return (
    <>
      {createArray(totalStars).map((n, i) => { 
        return <Star 
        key={i} 
        selected={selectedStar > i} 
        onSelect={() => setSelectedStar(i+1)}/>
      })}
      <p>{selectedStar } of {totalStars}</p>
    </>
  )
}

function App() {
  return <StarRating totalStars={10}/>
}

export default App;
