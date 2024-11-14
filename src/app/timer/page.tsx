'use client'
import React from 'react';
import CountdownTimer from '@/components/Timer';

const App = () => {
  const targetDate = '2024-11-30T10:00:00+05:30';

  return (
    <div>
      
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default App;
