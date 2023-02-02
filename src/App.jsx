import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Circle from './circle';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Circle />
    </div>
  );
}

export default App;
