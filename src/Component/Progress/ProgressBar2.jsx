import React, { useState, useEffect, useRef } from 'react';

const ProgressBar2 = ({ value, max, animationDuration }) => {
  const [width, setWidth] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
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
  }, [value, max, animationDuration, width]);

  return (
    <div className="relative  w-full h-1">
      <div className="bg-gray-400 absolute inset-0" />
      <div
        ref={progressRef}
        className="bg-blue-500 absolute inset-0"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ProgressBar2;
