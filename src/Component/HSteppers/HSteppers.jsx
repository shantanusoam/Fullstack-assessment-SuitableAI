import React, { useState } from 'react';
import Circle from '../../circle';
import Circle2 from '../../circle2';
import Stepper from '../stepper/Stepper';

const HSteppers = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Pay bills', completed: true },
    { id: 3, text: 'Exercise', completed: false },
  ]);

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

  return (
    <div className="flex flex-col">
      {todos.map(() => (
        <div className="py-20 w-screen">
          <Circle />
        </div>
      ))}

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
