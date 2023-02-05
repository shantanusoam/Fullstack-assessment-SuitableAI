import { useEffect, useState } from 'react';
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
      Stages: [
        { id: 0, name: 'Referred', status: 'complete', date: '12/10/2020' },
        { id: 1, name: 'Interviewed', status: 'complete', date: '12/11/2020' },
        { id: 2, name: 'Hired', status: 'complete', date: '8/11/2020' },
        { id: 3, name: 'Joined', status: 'current', date: '12/12/2020' },
        { id: 4, name: 'Reward', status: 'upcoming', date: '12/12/2020' },
      ],
      daysRemaining: 20,
      reward: 2000,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 1,
      employeeName: 'Subham Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Interviewed',
      Stages: [
        { id: 0, name: 'Referred', status: 'complete', date: '12/12/2020' },
        { id: 1, name: 'Interviewed', status: 'current', date: '12/12/2020' },
        { id: 2, name: 'Hired', status: 'upcoming', date: '12/12/2020' },
        { id: 3, name: 'Joined', status: 'upcoming', date: '12/12/2020' },
        { id: 4, name: 'Reward', status: 'upcoming', date: '12/12/2020' },
      ],
      daysRemaining: 20,
      reward: 2000,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 2,
      employeeName: 'shantanu Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Hired',
      Stages: [
        { id: 0, name: 'Referred', status: 'complete', date: '12/12/2020' },
        { id: 1, name: 'Interviewed', status: 'complete', date: '12/12/2020' },
        { id: 2, name: 'Hired', status: 'current', date: '12/12/2020' },
        { id: 3, name: 'Joined', status: 'upcoming', date: '12/12/2020' },
        { id: 4, name: 'Reward', status: 'upcoming', date: '12/12/2020' },
      ],

      daysRemaining: 15,
      reward: 20000,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 3,
      employeeName: 'sivam Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Interviewed',
      Stages: [
        { id: 0, name: 'Referred', status: 'complete', date: '12/12/2020' },
        { id: 1, name: 'Interviewed', status: 'current', date: '12/12/2020' },
        { id: 2, name: 'Hired', status: 'upcoming', date: '12/12/2020' },
        { id: 3, name: 'Joined', status: 'upcoming', date: '12/12/2020' },
        { id: 4, name: 'Reward', status: 'upcoming', date: '12/12/2020' },
      ],
      daysRemaining: 19,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 4,
      employeeName: 'rupa gori',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Referred',

      Stages: [
        { id: 0, name: 'Referred', status: 'current', date: '12/12/2020' },
        { id: 1, name: 'Interviewed', status: 'upcoming', date: '12/12/2020' },
        { id: 2, name: 'Hired', status: 'upcoming', date: '12/12/2020' },
        { id: 3, name: 'Joined', status: 'upcoming', date: '12/12/2020' },
        { id: 4, name: 'Reward', status: 'upcoming', date: '12/12/2020' },
      ],
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
      Stages: [
        { id: 0, name: 'Referred', status: 'complete', date: '12/12/2020' },
        { id: 1, name: 'Interviewed', status: 'complete', date: '12/12/2020' },
        { id: 2, name: 'Hired', status: 'complete', date: '12/12/2020' },
        { id: 3, name: 'Joined', status: 'complete', date: '12/12/2020' },
        { id: 4, name: 'Reward', status: 'current', date: '12/12/2020' },
      ],
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

      Stages: [
        { id: 0, name: 'Referred', status: 'complete', date: '12/12/2020' },
        { id: 1, name: 'Interviewed', status: 'complete', date: '12/12/2020' },
        { id: 2, name: 'Hired', status: 'current', date: '12/12/2020' },
        { id: 3, name: 'Joined', status: 'upcoming', date: '12/12/2020' },
        { id: 4, name: 'Reward', status: 'upcoming', date: '12/12/2020' },
      ],
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
      Stages: [
        { id: 0, name: 'Referred', status: 'complete', date: '12/12/2020' },
        { id: 1, name: 'Interviewed', status: 'complete', date: '12/12/2020' },
        { id: 2, name: 'Hired', status: 'current', date: '12/12/2020' },
        { id: 3, name: 'Joined', status: 'upcoming', date: '12/12/2020' },
        { id: 4, name: 'Reward', status: 'upcoming', date: '12/12/2020' },
      ],
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
      Stages: [
        { id: 0, name: 'Referred', status: 'current', date: '12/12/2020' },
        { id: 1, name: 'Interviewed', status: 'upcoming', date: '12/12/2020' },
        { id: 2, name: 'Hired', status: 'upcoming', date: '12/12/2020' },
        { id: 3, name: 'Joined', status: 'upcoming', date: '12/12/2020' },
        { id: 4, name: 'Reward', status: 'upcoming', date: '12/12/2020' },
      ],
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
      Stages: [
        { id: 0, name: 'Referred', status: 'complete', date: '12/12/2020' },
        { id: 1, name: 'Interviewed', status: 'complete', date: '12/12/2020' },
        { id: 2, name: 'Hired', status: 'complete', date: '12/12/2020' },
        { id: 3, name: 'Joined', status: 'current', date: '12/12/2020' },
        { id: 4, name: 'Reward', status: 'upcoming', date: '12/12/2020' },
      ],
      daysRemaining: 34,
      reward: 2000,
      fulfilled: false,
      userExsists: true,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(employes);

  useEffect(() => {
    const results = employes.filter((item) =>
      item.employeeName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      {/* <Circle2 /> */}
      <ProgressBar2 value={100} max={100} animationDuration={2000} />
      <Header setSearchTerm={setSearchTerm} />
      <div className="-mt-48">
        <HSteppers employes={results} setemployes={setemployes} />
      </div>

      {/* <ProgressBar /> */}
    </div>
  );
}

export default App;
