import React, { useState } from 'react';
import { util } from '../App';

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  const onLeftToggle = () => {
    setToggle(true);
  };

  const onRightToggle = () => {
    setToggle(false);
  };

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-bold text-center">toggle</h1>

      <div className="flex relative p-1 bg-stone-200 text-center text-stone-400 font-semibold rounded-full">
        <span
          onClick={onLeftToggle}
          className={util(
            'w-40 hover:cursor-pointer rounded-full z-10',
            toggle && ' text-stone-600'
          )}
        >
          기본
        </span>
        <span
          onClick={onRightToggle}
          className={util(
            'w-40 hover:cursor-pointer rounded-full z-10',
            toggle || ' text-stone-600'
          )}
        >
          상세
        </span>
        <div
          className={util(
            'absolute transition top-1/2 left-1/2 -translate-y-1/2 w-40 h-3/4 rounded-full bg-stone-100',
            toggle && ' -translate-x-full'
          )}
        />
      </div>
    </div>
  );
};

export default Toggle;
