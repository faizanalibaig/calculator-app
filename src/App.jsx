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
        <div className='flex justify-between px-2 absolute bottom-10 w-[50%]'>
          {themeNumber.map((value, index) => (
            <h1 key={index} className='text-[12px]'>
              {value}
            </h1>
          ))}
        </div>
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

const DataButtons = {
  NumberedButtons: [7, 8, 9, 6, 5, 4, 3, 2, 1, '.', 0, '/'],
  OperationButtons: ['C', '+', '-', 'x'],
  AdditionalButtons: ['Reset', '='],
};
function Board() {
  return (
    <div
      style={{
        backgroundColor: '#182034',
        marginTop: '20px',
        height: '420px',
        width: '500px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '20px 0px',
      }}
    >
      <div className='flex justify-center w-full'>
        <div className='grid grid-cols-3 gap-4 px-2'>
          {DataButtons.NumberedButtons.map((value, index) => (
            <Button value={value} key={index} width='100px' />
          ))}
        </div>
        <div className='grid grid-cols-1 gap-4 px-2'>
          {DataButtons.OperationButtons.map((value, index) => (
            <Button
              value={value}
              key={index}
              backgroundColor={index === 0 ? '#637097' : ''}
              color={index === 0 ? '#ffffff' : ''}
              width='100px'
            />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 px-2'>
        {DataButtons.AdditionalButtons.map((value, index) => (
          <Button
            value={value}
            key={index}
            backgroundColor={index === 0 ? '#637097' : '#d03f2f'}
            color='#ffffff'
            width='215px'
          />
        ))}
      </div>
    </div>
  );
}

function Button({ value, backgroundColor, color, width }) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color, width: width }}
      className='flex items-center justify-center h-[60px] rounded-[6px] bg-[#eae3dc] font-lage font-bold text-[28px] border-b-[4px] border-opacity-20 border-black pt-2'
    >
      {value}
    </button>
  );
}

export default App;
