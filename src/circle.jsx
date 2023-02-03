import { CheckIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import ProgressBar from './Component/Progress/progressBar';
import ProgressBar2 from './Component/Progress/ProgressBar2';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Circle() {
  const [todos, setTodos] = useState([
    { id: 0, name: 'Step 1', href: '#', status: 'current' },
    { id: 1, name: 'Step 2', href: '#', status: 'upcoming' },
    { id: 2, name: 'Step 3', href: '#', status: 'upcoming' },
    { id: 3, name: 'Step 4', href: '#', status: 'upcoming' },
    { id: 4, name: 'Step 5', href: '#', status: 'upcoming' },
    { id: 5, name: 'Step 5', href: '#', status: 'upcoming' },
  ]);
  const [progressBarValue, setprogressBarValue] = useState(0);
  const handleTodoCompletion = (id) => {
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
    setprogressBarValue((id * 100 + todos.length) / todos.length);
  };
  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="flex relative justify-center items-center mx-20"
      >
        {todos.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== todos.length - 1 ? 'pr-8 sm:pr-20' : '',
              'relative w-full '
            )}
          >
            {step.status === 'complete' ? (
              <div onClick={() => handleTodoCompletion(stepIdx)}>
                {/* <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-indigo-600" />
                </div> */}
                <a
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
                >
                  <CheckIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </div>
            ) : step.status === 'current' ? (
              <div onClick={() => handleTodoCompletion(stepIdx)}>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </div>
            ) : (
              <div onClick={() => handleTodoCompletion(stepIdx)}>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </div>
            )}
          </li>
        ))}
        <div className="absolute w-full -z-10">
          <ProgressBar2
            value={progressBarValue}
            max={100}
            animationDuration={2000}
          />
        </div>
      </ol>
    </nav>
  );
}
