import { CheckIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';

import ProgressBar2 from './Component/Progress/ProgressBar2';
import Men from './assets/MenDefault.png';
import CureenIcons from './Component/IconStates/CureenIcons';
import Line from './Component/IconStates/Line';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Circle({ employe, setemployes }) {
  const [status, setStatus] = useState(employe.Stages);
  const [progressBarValue, setprogressBarValue] = useState(0);

  useEffect(() => {
    //alter the whole array with the current stage of employee and make evry stage before that complete and after that upcoming
    var alterStatus = status;
    var currentid = alterStatus.filter((to) => to.name == employe.Stage)[0].id;
    console.log(currentid);
    alterStatus.map((stage) => {
      if (stage.id < currentid) {
        alterStatus[stage.id].status = 'complete';
      } else if (stage.id > currentid) {
        alterStatus[stage.id].status = 'upcoming';
      } else {
        console.log(status);
        alterStatus[stage.id].status = 'current';
      }
    });
    setStatus(alterStatus);
    var id = status.filter((to) => to.status == 'current')[0].id;
    console.log(id);
    setprogressBarValue((id * 100 + status.length) / status.length);
  }, []);

  const handlestatusCompletion = (id) => {
    setprogressBarValue((id * 100 + status.length) / status.length);

    setStatus((prevstatus) =>
      prevstatus.map((status) => {
        if (status.id === id) {
          return { ...status, status: 'complete' };
        } else if (status.id < id) {
          return { ...status, status: 'complete' };
        } else if (status.id === id + 1) {
          return { ...status, status: 'current' };
        } else if (status.id > id) {
          return { ...status, status: 'upcoming' };
        }
      })
    );
  };
  return (
    <tr
      role="list"
      className={`flex flex-col items-center justify-center lg:flex-row  rounded-md ${
        employe.id % 2 === 0 ? 'bg-slate-100' : 'bg-white'
      } lg:border-grey-light py-4
      ${!employe.userExsists && 'select-none pointer-events-none'}
      `}
    >
      <td className="relative px-4 py-3 w-full lg:px-6 lg:py-4 ">
        <div className="flex flex-row w-56">
          <img src={employe.userPic} />
          <div className="flex flex-col pl-2">
            <div className="font-bold text-lg text-slate-900">
              {employe.employeeName}
            </div>
            <div className="text-md text-gray-700 font-semibold">
              {employe.post}
            </div>
          </div>
        </div>
      </td>
      {status.map((step, stepIdx) => (
        <td
          key={step.name}
          className={`
            ${
              (stepIdx !== status.length - 1 ? '' : '',
              'relative px-4 py-3 w-full lg:h-0  h-32 lg:px-6 lg:py-4 lg:block ')
            }`}
        >
          {/* {' '} */}
          {/* <div className="absolute w-full  -z-10">
            <ProgressBar2
              value={progressBarValue}
              sucess={step.status === 'complete'}
              max={100}
              animationDuration={1000}
            />
          </div> */}
          <div
            onClick={() => handlestatusCompletion(stepIdx)}
            className="flex absolute z-10 inset-0"
          >
            <Line
              id={step.id}
              status={step.status}
              days={employe.daysRemaining}
              userExsists={employe.userExsists}
            />
            <CureenIcons
              employe={employe}
              step={step}
              userExsists={employe.userExsists}
            />
          </div>
        </td>
      ))}
    </tr>
  );
}
