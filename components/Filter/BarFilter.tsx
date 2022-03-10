import Svg from 'assets/Svg';
import useWindowSize from 'hooks/useWindowSize';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import ContentModal from '../Modal/ContentModal';
import style from './style.module.scss';

const Filter = dynamic(() => import('./Filter'), { loading: () => <Loading /> });

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
      {/* <OrderFilter /> */ }
      { sizeWidth > 790
        ? <Filter />
        : (
          <button
            aria-label="Filtro"
            type="button"
            onClick={ handleClick }
          >
            <Svg icoName="filter" />
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
}

export default BarFilter;
