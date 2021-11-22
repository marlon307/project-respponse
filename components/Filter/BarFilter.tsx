import React from 'react';
import dynamic from 'next/dynamic';
import Loading from '../Loading/Loading';
import style from './style.module.scss';

const Filter = dynamic(() => import('./Filter'), {
  loading: () => <Loading />,
});
// const OrderFilter = dynamic(() => import('./Order'), {
//   loading: () => <Loading />,
// });

const BarFilter = function BarFilter() {
  return (
    <div className={ style.barfilter }>
      {/* <OrderFilter /> */ }
      <Filter />
    </div>
  );
};

export default BarFilter;
