import React, { useState, useEffect } from 'react';
import Data from './data/application.json';

const App = () => {
  const [displayValue, setDisplayValue] = useState(0);

  const handleClearDisplayValue = () => {
    setDisplayValue(0);
  };

  const handleNumberClick = (number, flag = false) => {
    if (!flag && !displayValue) {
      setDisplayValue(number);
    } else if (displayValue !== 0 && flag) {
      setDisplayValue(number);
    } else {
      setDisplayValue(`${displayValue}${number}`);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#3a4764',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className='font-lage'
    >
      <CalculatorHeader>
        <ToggleButton themeNumber={[1, 2, 3]} />
      </CalculatorHeader>
      <Display value={displayValue} />
      <Board
        clear={handleClearDisplayValue}
        displayNumber={handleNumberClick}
        data={displayValue}
      />
    </div>
  );
};

function CalculatorHeader({ children }) {
  return (
    <div className='text-[#ffffff] font-bold text-[28px] w-[500px] flex justify-between items-center'>
      <h1>{Data.title}</h1>
      {children}
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

function Display({ value }) {
  return (
    <div className='text-[#ffffff] font-lage text-4xl font-bold w-[500px] bg-[#182034] h-24 rounded-lg px-6 flex items-center justify-end'>
      <h1>{value}</h1>
    </div>
  );
}

const DataButtons = {
  NumberedButtons: [7, 8, 9, 6, 5, 4, 3, 2, 1, '.', 0, '/'],
  OperationButtons: ['C', '+', '-', 'x'],
  AdditionalButtons: ['Reset', '='],
};
function Board({ clear, displayNumber, data }) {
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
            <Button
              value={value}
              key={index}
              width='100px'
              clear={clear}
              displayNumber={displayNumber}
              data={data}
            />
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
              clear={clear}
              displayNumber={displayNumber}
              data={data}
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
            clear={clear}
            displayNumber={displayNumber}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}

function Button({
  value,
  backgroundColor,
  color,
  width,
  clear,
  displayNumber,
  data,
}) {
  const handleDisplay = (value) => {
    if (value === 'C') {
      clear();
    } else if (['+', '-', 'x', '/'].includes(value)) {
      clear();
    } else if (!isNaN(value)) {
      displayNumber(value);
    }
  };

  return (
    <button
      style={{ backgroundColor, color, width }}
      onClick={() => handleDisplay(value)}
      className='flex items-center justify-center
                 h-[60px] rounded-[6px] bg-[#eae3dc]
                 font-large font-bold text-[28px]
                 border-b-[4px] border-opacity-20 border-black pt-2'
    >
      {value}
    </button>
  );
}

export default App;
