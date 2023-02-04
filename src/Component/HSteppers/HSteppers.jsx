import { CheckIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import Circle from '../../circle';
import Circle2 from '../../circle2';
import Stepper from '../stepper/Stepper';
import Men from '../../assets/MenDefault.png';

const HSteppers = () => {
  const [employes, setemployes] = useState([
    {
      id: 0,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 20,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 1,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 20,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 2,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 20,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 3,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 20,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 4,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 20,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 5,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 20,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 6,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 20,
      reward: 200,
      fulfilled: false,
      userExsists: false,
    },
    {
      id: 7,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 20,
      reward: 200,
      fulfilled: false,
      userExsists: true,
    },
    {
      id: 8,
      employeeName: 'Anmol Mahajan',
      post: 'Sr.Engineer',
      userPic: Men,
      Stage: 'Joined',
      daysRemaining: 20,
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
      daysRemaining: 20,
      reward: 2000,
      fulfilled: false,
      userExsists: true,
    },
  ]);

  const employeStage = [
    { id: 0, name: 'Candidate' },
    { id: 1, name: 'Referred' },

    { id: 2, name: 'Interviewed' },
    { id: 3, name: 'Hired' },
    { id: 4, name: 'Joined' },
    { id: 5, name: 'Reward' },
  ];
  const handleTodoCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="flex flex-col">
      {/* <nav aria-label="Progress">
        <ol role="list" className="flex relative  items-center ">
          {employees.map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== todos.length - 1 ? 'pr-8 sm:pr-20' : '',
                'relative w-full '
              )}
            >
              <div onClick={() => handleTodoCompletion(stepIdx)}>
                <a
                  href="#"
                  className="relative flex h-8 w-8 items-center text-lg justify-center "
                >
                  {step.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav> */}
      <table className="flex flex-col w-full">
        <thead className="flex-1 overflow-y-scroll">
          <tr className=" flex flex-col lg:flex-row border-b lg:border-grey-light">
            {employeStage.map((step, stepIdx) => (
              <td className="relative py-3 w-full  lg:py-4">{step.name}</td>
            ))}
          </tr>
        </thead>
        <tbody className="flex-1 overflow-y-scroll">
          {employes.map((employe) => (
            <Circle employe={employe} />
          ))}
        </tbody>
      </table>

      {/* {stepsy.map((steps, i) => {
        <div key={i}>
          <div>{steps.length}</div>
          <Stepper
            steps={steps}
            activeStep={activeStep}
            onStepChange={handleStepChange}
          />
        </div>;
      })} */}
    </div>
  );
};

export default HSteppers;
