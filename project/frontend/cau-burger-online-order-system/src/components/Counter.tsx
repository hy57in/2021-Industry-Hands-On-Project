import React, { useState } from 'react';
import * as s from 'components/CounterStyled';

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
      <div>
        <s.CounterButton1 onClick={onIncrease}>+1</s.CounterButton1>
        <s.CounterText>{count}</s.CounterText>
        <s.CounterButton2 onClick={onDecrease}>-1</s.CounterButton2>
      </div>
  );
}

export default Counter;