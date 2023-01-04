'use client';

import React, { Suspense, useCallback, useState } from 'react';
import ItemList from '../../../components/Filter/ItemList';
import ContentModal from '../../../components/Modal/ContentModal';
import Filter from '../../../components/Filter/Filter';
import Loading from './loading';
import Categorys from '../../../components/Category/Categorys';
import type { StateSearchType } from '../search';
import style from '../style.module.scss';

interface Props {
  params: { id: string }
}

function Page({ params }: Props) {
  const [listFilter, setListFilter] = useState<StateSearchType['listFilter']>([]);
  const [modalFilter, setModalFilter] = useState(false);

  const removeListFilter = useCallback(({ target }: any) => {
    const { id } = target;
    setListFilter((prevState) => prevState.filter((objId) => objId.id !== id));
  }, [listFilter]);

  function handleClick() {
    setModalFilter(!modalFilter);
  }

  return (
    <div className={ style.category }>
      <div className={ style.filter }>
        <div className={ style.barfilter }>
          <button
            aria-label="Filtro"
            type="button"
            onClick={ handleClick }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 6H6V3a1 1 0 0 0-2 0v3H3a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-2 4a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V11a1 1 0 0 0-1-1Zm7 8a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm9-8h-1V3a1 1 0 0 0-2 0v7h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1Zm-5 0h-1V3a1 1 0 0 0-2 0v11h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Z" fill="#333" />
            </svg>
            <span>Filtro</span>
          </button>
          <ContentModal
            isOpen={ modalFilter }
            openModal={ setModalFilter }
          >
            { modalFilter && (
              <Filter
                setListFilter={ setListFilter }
                listChecked={ listFilter }
              />
            ) }
          </ContentModal>
        </div>
        <div className={ style.listfilter }>
          { listFilter.map((item) => (
            <ItemList
              key={ item.id }
              id={ item.id }
              name={ item.key }
              value={ item.name }
              color={ item.color }
              execFunction={ removeListFilter }
            />
          )) }
        </div>
      </div>
      <div className={ style.categorycont }>
        <Suspense fallback={ <Loading /> }>
          <Categorys category_id={ params.id } filterConfig={ listFilter } />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
