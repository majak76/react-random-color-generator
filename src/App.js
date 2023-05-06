import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  // first create a state variable and then define it with a default value of a random color
  const [color, setColor] = useState(randomColor);
  return (
    <div className="container">
      <div className="box" style={{ background: color }}>
        Generated Color:
        <br />
        {color}
        <br />
      </div>
      <button
        onClick={() =>
          // Generate and set a new value for the color
          setColor(randomColor)
        }
      >
        Generate
      </button>
    </div>
  );
}
