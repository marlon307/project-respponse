import React, { useEffect, useState, lazy } from 'react';
import ContentModal from '../Modal/ContentModal';
import style from './style.module.scss';
import useWindowSize from '../../hooks/useWindowSize';
import Svg from '../../assets/Svg';

const Filter = lazy(() => import('./Filter'));

function BarFilter() {
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
      <button
        aria-label="Filtro"
        type="button"
        onClick={ handleClick }
      >
        <Svg icoName="filter" />
        <span>Filtro</span>
      </button>
      <ContentModal
        isOpen={ modalFilter }
        openModal={ setModalFilter }
      >
        { modalFilter && <Filter /> }
      </ContentModal>
    </div>
  );
}

export default BarFilter;
