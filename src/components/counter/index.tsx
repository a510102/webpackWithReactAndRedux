import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from '../../store/counter/counterSlice';

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [countValue, setCountValue] = React.useState<string>('0');
  return (
    <div>
      <div>
        <div onClick={() => dispatch(increment())}>+</div>
        <div onClick={() => dispatch(decrement())}>-</div>
        <div>
          <input
            value={countValue}
            onChange={(e) => setCountValue(e.target.value)}
          />
          <div onClick={() => dispatch(incrementByAmount(Number(countValue)))}>
            +
          </div>
        </div>
      </div>
      <div>{count}</div>
    </div>
  );
};

export default Counter;
