import React from 'react';
import dollar from '../../assets/dollar.png';
const Line = ({ id, status, days, userExsists }) => {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth((100 * days) / 100);
  }, []);
  return (
    <div
      className={`absolute lg:inset-0 inset-y-0 left-3 flex items-center  ${
        id == 4 ? 'hidden' : ''
      }`}
      aria-hidden="true"
    >
      {status == 'complete' && (
        <div
          className={`lg:h-0.5 h-full w-0.5 lg:w-full ${
            userExsists ? 'bg-lime-600' : 'bg-gray-200'
          }`}
        />
      )}
      {status == 'current' && id == 3 ? (
        <>
          <div
            className={`h-0.5  bg-lime-500 animate-pulse border-2  border-lime-600`}
            style={{ width: `${width}%` }}
          ></div>
          <div className="relative">
            <img src={dollar} className="h-12 w-8" />
            <div className="absolute -bottom-8 -left-8 w-32">
              {days} days to go!
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      {status == 'current' && (
        <div
          className="lg:h-0.5 h-full  bg-gray-700 animate-pulse border-2 border-dashed"
          style={{ width: `${id == 3 ? 100 - width : 100}%` }}
        />
      )}

      {status == 'upcoming' && <div className="h-0.5 w-full bg-gray-200 " />}
    </div>
  );
};

export default Line;
