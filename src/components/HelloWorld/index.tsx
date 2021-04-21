import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectCount } from '../../store/counter/counterSlice';

const HelloWorld: React.FC = () => {
  const count = useAppSelector(selectCount);
  return <div>HelloWorld {count}</div>;
};

export default HelloWorld;
