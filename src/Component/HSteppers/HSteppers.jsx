import { CheckIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import Circle from '../../circle';

import Stepper from '../stepper/Stepper';

const HSteppers = ({ employes, setemployes }) => {
  const employeStage = [
    { id: 0, name: 'Candidate' },
    { id: 1, name: 'Referred' },

    { id: 2, name: 'Interviewed' },
    { id: 3, name: 'Hired' },
    { id: 4, name: 'Joined' },
    { id: 5, name: 'Reward' },
  ];

  return (
    <div className="flex  flex-col w-full justify-center items-center ">
      <table className="flex flex-col  bg-white justify-center  w-10/12 drop-shadow-xl px-8">
        <thead className="flex-1 overflow-y-scroll">
          <tr className=" lg:flex flex-col lg:flex-row border-b lg:border-grey-light min-w-fit hidden">
            {employeStage.map((step, stepIdx) => (
              <td
                className="relative py-3 w-1/6 flex justify-start    lg:py-4 first:pl-8 font-semibold  first:2xl:w-1/6 first:xl:w-1/4  first:lg:w-1/3 text-xl"
                key={stepIdx}
              >
                <div className="first:min-w-max 2xl:w-32 xl:w-36">
                  {step.name}
                </div>
              </td>
            ))}
          </tr>
        </thead>
        <tbody className={`flex-1  w-full  lg:pt-0 pt-8  `}>
          {employes.map((employe) => (
            <Circle
              employe={employe}
              setemployes={setemployes}
              key={employe.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HSteppers;
