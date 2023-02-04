import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-60% flex justify-center bg-lime-500">
      <div className="w-10/12 pt-20">
        <div className="text-5xl font-bold text-white">Referral Status 🎁</div>
        <div>
          <div className="pt-2  mx-auto text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
