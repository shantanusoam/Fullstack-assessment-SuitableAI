import React from 'react';

const Header = ({ setSearchTerm }) => {
  return (
    <div className="w-full h-60% flex justify-center bg-lime-500">
      <div className="w-10/12 pt-20">
        <div className="lg:text-5xl text-4xl font-bold text-white">
          Referral Status 🎁
        </div>
        <div class="mt-8 relative mx-auto text-gray-600">
          <input
            class="border-2 border-gray-300 bg-white h-16 lg:w-1/4 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" class="absolute right-1/5 top-0 mt-5  -ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
