import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Circle from './circle';
import Circle2 from './circle2';
import HSteppers from './Component/HSteppers/HSteppers';
import ProgressBar from './Component/Progress/progressBar';
import ProgressBar2 from './Component/Progress/ProgressBar2';
import Header from './Component/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Circle2 /> */}
      <ProgressBar2 value={100} max={100} animationDuration={2000} />
      <Header />
      <div className="-mt-48">
        <HSteppers />
      </div>

      {/* <ProgressBar /> */}
    </div>
  );
}

export default App;
