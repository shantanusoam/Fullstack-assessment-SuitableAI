import React, { useState, useEffect, useRef } from 'react';

const ProgressBar2 = ({ value, sucess, max, animationDuration }) => {
  const [width, setWidth] = useState(0);
  const progressRef = useRef(null);
  if (sucess) {
    value = 100;
  }
  useEffect(() => {
    console.log(sucess);
    const progress = progressRef.current;
    const step = ((value / max) * 100) / (animationDuration / 10);

    const progressAnimation = setInterval(() => {
      if (width >= (value / max) * 100) {
        clearInterval(progressAnimation);
        return;
      }

      setWidth(width + step);
    }, 10);

    return () => clearInterval(progressAnimation);
  }, [value, sucess, max, animationDuration, width]);

  return (
    <div className="relative  lg:w-full lg:h-1 w-1 h-full">
      <div className="bg-gray-100 absolute inset-0" />
      <div
        ref={progressRef}
        className="bg-lime-500 absolute inset-0"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ProgressBar2;
