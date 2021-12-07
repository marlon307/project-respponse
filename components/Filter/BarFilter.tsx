import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Loading from '../Loading/Loading';
import style from './style.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import ContentModal from '../Modal/ContentModal';

const Filter = dynamic(() => import('./Filter'), {
  loading: () => <Loading />,
});
// const OrderFilter = dynamic(() => import('./Order'), {
//   loading: () => <Loading />,
// });

const BarFilter = function BarFilter() {
  const [sizeWidth] = useWindowSize();
  const [modalFilter, setModalFilter] = useState(false);

  useEffect(() => {
    if (sizeWidth > 790) {
      setModalFilter(false);
    }
  }, [sizeWidth]);

  function handleClick() {
    setModalFilter(!modalFilter);
  }

  return (
    <div className={ style.barfilter }>
      {/* <OrderFilter /> */ }
      { sizeWidth > 790
        ? <Filter />
        : (
          <button
            aria-label="Filtro"
            type="button"
            onClick={ handleClick }
          >
            <h3>Filtro</h3>
          </button>
        ) }
      <ContentModal
        isOpen={ modalFilter }
        openModal={ setModalFilter }
      >
        { modalFilter && <Filter /> }
      </ContentModal>
    </div>
  );
};

export default BarFilter;
