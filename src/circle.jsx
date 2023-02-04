import { CheckIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import ProgressBar from './Component/Progress/progressBar';
import ProgressBar2 from './Component/Progress/ProgressBar2';
import Men from './assets/MenDefault.png';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Circle({ employe }) {
  const [todos, setTodos] = useState([
    { id: 0, name: 'Assistand', href: '#', status: 'current' },
    { id: 1, name: 'lol', href: '#', status: 'upcoming' },
    { id: 2, name: 'lala', href: '#', status: 'upcoming' },
    { id: 3, name: 'popo', href: '#', status: 'upcoming' },
    { id: 4, name: 'kaka', href: '#', status: 'upcoming' },
  ]);
  const [progressBarValue, setprogressBarValue] = useState(0);
  useEffect(() => {
    var id = todos.filter((to) => to.status == 'current')[0].id;
    console.log(id);
    setprogressBarValue((id * 100 + todos.length) / todos.length);
  }, []);
  const handleTodoCompletion = (id) => {
    setprogressBarValue((id * 100 + todos.length) / todos.length);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: 'complete' };
        } else if (todo.id < id) {
          return { ...todo, status: 'complete' };
        } else if (todo.id === id + 1) {
          return { ...todo, status: 'current' };
        } else if (todo.id > id) {
          return { ...todo, status: 'upcoming' };
        }
      })
    );
  };
  return (
    <tr
      role="list"
      className="flex flex-col items-center justify-center lg:flex-row border-b lg:border-grey-light py-10"
    >
      <td className="relative px-4 py-3 w-full lg:px-6 lg:py-4">
        <div className="flex flex-row">
          <img src="./assets/MenDefault.png" />
          <div className="flex flex-col">
            <div>{employe.employeeName}</div>
            <div>{employe.post}</div>
          </div>
        </div>
      </td>
      {todos.map((step, stepIdx) => (
        <td
          key={step.name}
          className={classNames(
            stepIdx !== todos.length - 1 ? '' : '',
            'relative px-4 py-3 w-full lg:px-6 lg:py-4'
          )}
        >
          {' '}
          <div className="absolute w-full  -z-10">
            <ProgressBar2
              value={progressBarValue}
              sucess={step.status === 'complete'}
              max={100}
              animationDuration={1000}
            />
          </div>
          {step.status === 'complete' ? (
            <div
              onClick={() => handleTodoCompletion(stepIdx)}
              className="flex absolute z-10 inset-0"
            >
              {/* lol */}
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="h-0.5 w-full bg-lime-600" />
              </div>
              <a
                href="#"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-lime-600 hover:bg-lime-900"
              >
                <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                <span className="sr-only">{step.name}</span>
              </a>
            </div>
          ) : step.status === 'current' ? (
            <div
              onClick={() => handleTodoCompletion(stepIdx)}
              className="flex absolute z-10 inset-0"
            >
              {/* lol */}
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="h-0.5 w-full bg-gray-700 animate-pulse" />
              </div>
              <image src="./assets/MenDefault.png" />
              <a
                className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-lime-600 bg-white"
                aria-current="step"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full bg-lime-600 animate-ping"
                  aria-hidden="true"
                />

                <span className="sr-only">{step.name}</span>
              </a>
            </div>
          ) : (
            <div
              onClick={() => handleTodoCompletion(stepIdx)}
              className="flex absolute z-10 inset-0"
            >
              {/* lol */}
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="h-0.5 w-full bg-gray-200" />
              </div>
              <a className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                  aria-hidden="true"
                />
                <span className="sr-only">{step.name}</span>
              </a>
            </div>
          )}
        </td>
      ))}
    </tr>
  );
}
