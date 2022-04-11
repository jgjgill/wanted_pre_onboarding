import React, { useState } from 'react';
import { util } from '../App';

const Slider = () => {
  const sliderGroup = [1, 25, 50, 75, 100];
  const [slider, setSlider] = useState(1);
  const onChange = (e) => {
    setSlider(e.target.value);
  };

  return (
    <div className="space-y-2">
      <h1 className="text-lg font-bold text-center">Slider</h1>

      <div className="flex w-80 flex-col space-y-4">
        <div className="relative flex items-center">
          <input
            type="text"
            value={slider}
            onChange={onChange}
            className="border p-2 w-full text-right pr-10 bg-stone-50 rounded-sm text-sm text-slate-700 font-semibold"
          />
          <div className="absolute flex items-center h-full right-0 pr-4">
            <span className="text-xs text-stone-400 font-semibold">%</span>
          </div>
        </div>

        <div className="relative">
          <input
            type="range"
            list="slider"
            onChange={onChange}
            value={slider}
            min="1"
            max="100"
            className="absolute w-full top-1/2 -translate-y-1/2 accent-teal-400 hover:cursor-pointer appearance-none bg-transparent z-10 rounded-full"
          />

          <div className="absolute top-1/2 -translate-y-1/2 w-full flex items-center ">
            <div
              className="h-2 bg-teal-400 rounded-full z-10"
              style={{ width: `${slider}%` }}
            />
          </div>

          <div className="h-2 w-full bg-stone-200 rounded-full" />

          <div className="flex absolute top-1/2  -translate-y-1/2 w-full justify-between items-center">
            {sliderGroup.map((sliderValue) => (
              <div
                key={sliderValue}
                className={util(
                  'rounded-full  h-4 w-4',
                  slider >= sliderValue ? 'bg-teal-400' : 'bg-stone-200'
                )}
              />
            ))}
          </div>
        </div>
        <datalist id="slider" className="flex justify-between">
          {sliderGroup.map((slider, i) => (
            <option
              key={i}
              value={slider}
              onClick={onChange}
              className="text-xs px-2 text-stone-600 bg-stone-200 hover:bg-teal-400 hover:text-stone-50 hover:cursor-pointer rounded-full"
            >
              {slider}%
            </option>
          ))}
        </datalist>
      </div>
    </div>
  );
};

export default Slider;
