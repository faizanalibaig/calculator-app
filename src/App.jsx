import React, { useState } from 'react';
import Data from './data/application.json';

const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'hsl(222, 26%, 31%)',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className='font-lage'
    >
      <CalculatorHeader />
      <Display />
      <Board />
    </div>
  );
};

function CalculatorHeader() {
  return (
    <div className='text-[#ffffff] font-bold text-[28px] w-[500px] flex justify-between items-center'>
      <h1>{Data.title}</h1>
      <ToggleButton themeNumber={[1, 2, 3]} />
    </div>
  );
}

function ToggleButton({ themeNumber }) {
  const [theme, setTheme] = useState(0);

  const handleToggle = (index) => {
    setTheme(index);
  };

  return (
    <section className='flex items-center gap-6 h-full relative font-semibold'>
      <h3 className='text-[15px]'>theme</h3>
      <div>
        {/* <div className='flex justify-between px-2 absolute bottom-6 w-[50%]'>
          {themeNumber.map((value, index) => (
            <h1 key={index} className='text-[12px]'>
              {value}
            </h1>
          ))}
        </div> */}
        <div className='bg-[#182034] px-1 py-[3px] rounded-2xl w-16 h-[22px] flex items-center justify-between'>
          {themeNumber.map((value, index) => (
            <span
              key={index}
              className={`h-full w-[30%] bg-[#d03f2f] rounded-full px-2 cursor-pointer ${
                theme === index ? '' : 'opacity-0'
              }`}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Display() {
  return (
    <div className='text-[hsl(0,0%,100%)] font-lage text-4xl font-bold w-[500px] bg-[#182034] h-24 rounded-lg px-6 flex items-center justify-end'>
      <h1>399, 981</h1>
    </div>
  );
}

function Board() {
  return (
    <div
      style={{
        backgroundColor: '#182034',
        marginTop: '20px',
        height: '400px',
        width: '500px',
        borderRadius: '8px',
      }}
    >
      <div className='flex flex-wrap justify-evenly px-2 py-5'>
        <Button value={7} />
        <Button value={8} />
        <Button value={9} />
        <Button value='DEL' backgroundColor='#637097' color='#ffffff' />
      </div>
    </div>
  );
}

function Button({ value, backgroundColor, color }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      className='flex items-center justify-center h-[60px] w-[100px] rounded-[6px] bg-[#eae3dc] font-lage font-bold text-[28px] border-b-[5px] border-opacity-30 border-black pt-2'
    >
      {value}
    </button>
  );
}

export default App;
