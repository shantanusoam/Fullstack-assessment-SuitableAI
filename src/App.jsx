import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Circle from './circle';
import Circle2 from './circle2';
import HSteppers from './Component/HSteppers/HSteppers';
import ProgressBar from './Component/Progress/progressBar';
import ProgressBar2 from './Component/Progress/ProgressBar2';
import Header from './Component/Header/Header';
import Men from './assets/MenDefault.png';
function App() {
  const [count, setCount] = useState(0);
  const [employes, setemployes] = useState([
    {
      id: 0,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 20,
      reward: 2000,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 1,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Interviewed',
      daysRemaining: 20,
      reward: 2000,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 2,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Hired',
      daysRemaining: 15,
      reward: 20000,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 3,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Interviewed',
      daysRemaining: 19,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 4,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Referred',
      daysRemaining: 18,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 5,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Reward',
      daysRemaining: 0,
      reward: 200,
      fulfilled: true,
      userExsists: true,
    },
    {
      id: 6,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Hired',
      daysRemaining: 60,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 7,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Hired',
      daysRemaining: 39,
      reward: 200,
      fulfilled: false,
      userExsists: false,
    },
    {
      id: 8,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Referred',
      daysRemaining: 28,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 9,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 34,
      reward: 2000,
      fulfilled: false,
      userExsists: true,
    },
  ]);
  return (
    <div className="App">
      {/* <Circle2 /> */}
      <ProgressBar2 value={100} max={100} animationDuration={2000} />
      <Header />
      <div className="-mt-48">
        <HSteppers employes={employes} setemployes={setemployes} />
      </div>

      {/* <ProgressBar /> */}
    </div>
  );
}

export default App;
