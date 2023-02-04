import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
const CureenIcons = ({ employe, status, id }) => {
  return (
    <>
      {id == 4 ? (
        <div className="text-3xl font-semibold text-slate-500">
          {employe.fulfilled ? (
            <div className="text-5xl">🎉</div>
          ) : (
            employe.reward
          )}
        </div>
      ) : (
        <div
          className={`${
            status == 'complete' ? 'bg-lime-600 hover:bg-lime-900' : ''
          } ${
            status == 'current'
              ? 'h-12 w-12 border-2 border-lime-600 bg-white'
              : 'h-8 w-8 '
          }
          ${
            status == 'upcoming'
              ? 'group border-2 border-gray-300 bg-white hover:border-gray-400'
              : ''
          }
          relative flex items-center justify-center rounded-full    cursor-pointer  `}
          aria-current="step"
        >
          {status == 'current' && (
            <span
              className="h-4   w-4 rounded-full bg-lime-600 "
              aria-hidden="true"
            />
          )}
          {status == 'upcoming' && (
            <span
              className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
              aria-hidden="true"
            />
          )}
          {status == 'current' && <img src={employe.userPic} />}
          {status == 'complete' && (
            <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
          )}

          <span className="sr-only">{employe.name}</span>
          {status == 'current' && (
            <div
              className={`absolute flex h-12 w-12 items-center justify-center rounded-full border-2 border-lime-600 ${
                status == 'current' ? 'animate-ping' : ''
              }  bg-white`}
              aria-current="step"
            ></div>
          )}
        </div>
      )}

      {/*  */}
      {/* <a
        href="#"
        className="relative flex h-8 w-8 items-center justify-center rounded-full bg-lime-600 hover:bg-lime-900"
      >
        <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
        <span className="sr-only">{step.name}</span>
      </a> */}
      {/*  */}
      {/* <a className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
        <span
          className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
          aria-hidden="true"
        />
        <span className="sr-only">{step.name}</span>
      </a> */}
    </>
  );
};

export default CureenIcons;
