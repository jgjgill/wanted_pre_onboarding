import React, { useState } from 'react';

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

        <input
          type="range"
          list="slider"
          onChange={onChange}
          value={slider}
          min='1'
          max='100'
          className=" w-full accent-teal-400 hover:cursor-pointer"
        />
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
