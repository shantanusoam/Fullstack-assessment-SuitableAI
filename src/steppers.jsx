import React, { useState } from 'react';

const Steppers = ({ steps, activeStep, onStepChange }) => {
  const [selectedStep, setSelectedStep] = useState(activeStep);

  const handleStepClick = (step) => {
    setSelectedStep(step);
    onStepChange(step);
  };

  return (
    <div className="flex">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`flex items-center justify-center p-4 mr-4 border border-gray-300 rounded-full ${
            selectedStep === index
              ? 'bg-gray-400'
              : selectedStep > index
              ? 'bg-green-400'
              : 'bg-gray-200'
          }`}
          onClick={() => handleStepClick(index)}
        >
          <p className="text-sm font-medium">{step}</p>
        </div>
      ))}
    </div>
  );
};

export default Steppers;
