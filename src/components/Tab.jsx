import React, { useState } from 'react';
import { util } from '../App';

const Tab = () => {
  const tabGroup = ['감자', '고구마', '카레라이스'];
  const [toggle, setToggle] = useState('감자');

  const onToggle = (tab) => () => {
    setToggle(tab);
  };

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-bold text-center">Tab</h1>
      <ul className="flex relative ">
        {tabGroup.map((tab, i) => (
          <li
            key={i}
            onClick={onToggle(tab)}
            className="hover:cursor-pointer border-b-2 p-2 flex-1 w-40 text-center"
          >
            <span
              className={util(
                'text-stone-400',
                toggle === tab && 'text-stone-600'
              )}
            >
              {tab}
            </span>
          </li>
        ))}

        <div
          className={util(
            `absolute transition bottom-0 left-1/3  border-b-2 border-teal-400 w-1/3`,
            toggle === '감자' && '-translate-x-full',
            toggle === '고구마' && 'translate-x-0',
            toggle === '카레라이스' && 'translate-x-full'
          )}
        ></div>
      </ul>
    </div>
  );
};

export default Tab;
