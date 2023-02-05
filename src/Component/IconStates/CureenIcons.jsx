import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
const CureenIcons = ({ employe, status, id, userExsists }) => {
  return (
    <>
      {id == 4 ? (
        <div className="text-3xl font-semibold flex flex-row text-slate-500">
          ${employe.reward}{' '}
          {employe.fulfilled && <div className="text-5xl">🎉</div>}
        </div>
      ) : (
        <div
          className={`${
            status == 'complete'
              ? ` ${
                  userExsists ? 'bg-lime-600' : 'bg-slate-500'
                }  hover:bg-lime-900`
              : ''
          } ${
            status == 'current'
              ? `h-12 w-12 border-2 ${
                  userExsists ? 'border-lime-600' : 'border-slate-500'
                }  bg-white`
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
              className={`h-4   w-4 rounded-full  ${
                userExsists ? 'bg-lime-600' : 'bg-slate-500'
              }`}
              aria-hidden="true"
            />
          )}
          {status == 'upcoming' && (
            <span
              className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
              aria-hidden="true"
            />
          )}
          {status == 'current' && (
            <img
              src={employe.userPic}
              className={`${!userExsists && 'grayscale'}`}
            />
          )}
          {status == 'complete' && (
            <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
          )}

          <span className="sr-only">{employe.name}</span>
          {status == 'current' && userExsists && (
            <div
              className={`absolute flex h-12 w-12 items-center justify-center rounded-full border-2  ${
                userExsists ? 'border-lime-600' : 'border-slate-500'
              }  ${status == 'current' ? 'animate-ping' : ''}  bg-white`}
              aria-current="step"
            ></div>
          )}
        </div>
      )}
    </>
  );
};

export default CureenIcons;
