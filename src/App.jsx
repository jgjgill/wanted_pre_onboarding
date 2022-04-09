import React from 'react';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';

export const util = (...classNames) => {
  return classNames.join(' ');
};

function App() {
  
  return (
    <div className='flex flex-col items-center space-y-10'>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  );
}

export default App;
