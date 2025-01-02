import React from 'react';

const App = () => {
  return (
    <div
      style={{
        backgroundColor: 'hsl(222, 26%, 31%)',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className='font-lage'
    >
      <Calculator />
    </div>
  );
};

function Calculator() {
  return (
    <div className='text-[hsl(0,0%,100%)] font-bold text-[28px] bg-red-500 w-[500px] flex justify-between items-center'>
      <h1>calc</h1>
      <ToggleButton />
    </div>
  );
}

function ToggleButton() {
  return (
    <section className='flex items-center gap-5'>
      <h3 className='font-medium text-[15px]'>theme</h3>
      <div className='flex flex-col font-medium text-[12px]'>
        {/* <span>{Array.from({ length: 3 }, (_, i) => i + 1)}</span> */}

        <div className='bg-yellow-300 px-1 rounded-2xl w-16 h-5 flex items-center'>
          <span className='h-[16px] w-[2px] bg-orange-600 rounded-full px-2' />
        </div>
      </div>
    </section>
  );
}

export default App;
