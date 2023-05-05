import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  // first create a state variable and then define it with a default value of a random color
  const [color, setColor] = useState(randomColor().color);
  const [colorName, setColorName] = useState('');
  return (
    <div className="App" style={{ background: color }}>
      {/*display the color on the screen*/}
      {color}
      <br />
      <button
        onClick={() => {
          // Generate and set a new value for the color
          const newColor = randomColor().color;
          setColor(newColor);
        }}
      >
        Generate
      </button>
    </div>
  );
}
