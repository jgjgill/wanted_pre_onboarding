import React, { useEffect, useRef, useState } from 'react';

const dropdownGroup = [
  'BTCUSD.PERP',
  'ETHUSD.PERP',
  'BCHUSD.PERP',
  'LTCUSD.PERP',
  'XRPUSD.PERP',
  '1000SHIBUSD.PERP',
];

const Dropdown = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropValue, setDropValue] = useState('All Symbols');
  const [dropList, setDropList] = useState(dropdownGroup);
  const [inputValue, setInputValue] = useState();

  const inputRef = useRef();

  const onDropDown = () => {
    new Promise((resolve) => {
      resolve(setDropDown((prev) => !prev));
    }).then(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClick = (drop) => () => {
    setDropValue(drop);
    setDropDown((prev) => !prev);
  };

  const onReset = () => {
    inputRef.current.value = '';
    setInputValue('');
  };

  useEffect(() => {
    if (inputValue) {
      setDropList(
        dropdownGroup.filter((drop) => drop.includes(inputValue.toUpperCase()))
      );
    } else {
      setDropList(dropdownGroup);
    }
  }, [inputValue]);

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-bold text-center">Dropdown</h1>

      <div className="w-80 space-y-2 flex flex-col items-center">
        <div
          onClick={onDropDown}
          className="relative flex justify-between items-center border p-2 w-full hover:cursor-pointer rounded-md"
        >
          <span className="text-md text-stone-700">{dropValue}</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {dropDown && (
          <div className="w-full border divide-y-2 rounded-md">
            <div className="relative flex items-center">
              <svg
                className="w-6 h-6 absolute left-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                id="dropdown"
                onChange={onChange}
                ref={inputRef}
                placeholder="Search Symbol"
                className="w-full p-2 pl-12 focus:outline-none"
              />
            </div>
            <ul className=" hover:cursor-pointer">
              <li onClick={onReset} className="py-2 hover:bg-stone-300">
                <span className="pl-6">All Symbols</span>
              </li>
              {dropList.map((drop) => (
                <li
                  key={drop}
                  onClick={onClick(drop)}
                  className="py-2 hover:bg-stone-300"
                >
                  <span className="pl-6">{drop}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
