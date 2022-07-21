import React, { useCallback, useEffect, useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardProduct from '../../components/Cards/CardProduct/CardProduct';
import ItemList from '../../components/Filter/ItemList';
import api from '../../service/api';
import HeadSEO from '../../components/Head/HeadSEO';
import useWindowSize from '../../hooks/useWindowSize';
import ContentModal from '../../components/Modal/ContentModal';
import Filter from '../../components/Filter/Filter';
import type { ICardProduct } from '../../types/typeCardProduct';
import type { StateSearchType } from './search';
import style from './style.module.scss';

function CategoryId({ products, pageFilter }: ICardProduct) {
  const [sizeWidth] = useWindowSize();
  const [listFilter, setListFilter] = useState<StateSearchType['listFilter']>([]);
  const [modalFilter, setModalFilter] = useState(false);
  const removeListFilter = useCallback(
    ({ target }: any) => target,
    // const { id } = target;
    // const formatId = id.replace('list', '');

    // dispatch(ADD_FILTER_LIST({ id: formatId }));
    // const ACTION_ADD_FILTER_LIST = (state: StateSearchType, { payload }: PayloadAction<any>) => {
    //   const key = Object.keys(payload)[0];
    //   const existItem = state.listFilter.find((element) => element[key] === payload[key]);

    //   if (existItem) {
    //     const newList = state.listFilter.filter((element) => element[key] !== payload[key]);
    //     state.listFilter = newList;
    //   } else {
    //     state.listFilter.unshift(payload);
    //   }
    // };
    [],
  );

  useEffect(() => {
    if (sizeWidth > 790) {
      setModalFilter(false);
    }
  }, [sizeWidth]);

  function handleClick() {
    setModalFilter(!modalFilter);
  }

  return (
    <>
      <HeadSEO title={ `Categoria: ${pageFilter.categoryName}` } description={ `Categoria: ${pageFilter.categoryName}` } />
      <div className={ style.category }>
        <div className={ style.filter }>
          <div className={ style.barfilter }>
            <button
              aria-label="Filtro"
              type="button"
              onClick={ handleClick }
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 6H6V3C6 2.73478 5.89464 2.48043 5.70711 2.29289C5.51957 2.10536 5.26522 2 5 2C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3V6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8H7C7.26522 8 7.51957 7.89464 7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7C8 6.73478 7.89464 6.48043 7.70711 6.29289C7.51957 6.10536 7.26522 6 7 6ZM5 10C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8946 4.73478 22 5 22C5.26522 22 5.51957 21.8946 5.70711 21.7071C5.89464 21.5196 6 21.2652 6 21V11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10ZM12 18C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18ZM21 10H20V3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2C18.7348 2 18.4804 2.10536 18.2929 2.29289C18.1054 2.48043 18 2.73478 18 3V10H17C16.7348 10 16.4804 10.1054 16.2929 10.2929C16.1054 10.4804 16 10.7348 16 11C16 11.2652 16.1054 11.5196 16.2929 11.7071C16.4804 11.8946 16.7348 12 17 12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10ZM19 14C18.7348 14 18.4804 14.1054 18.2929 14.2929C18.1054 14.4804 18 14.7348 18 15V21C18 21.2652 18.1054 21.5196 18.2929 21.7071C18.4804 21.8946 18.7348 22 19 22C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21V15C20 14.7348 19.8946 14.4804 19.7071 14.2929C19.5196 14.1054 19.2652 14 19 14ZM14 14H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V14H10C9.73478 14 9.48043 14.1054 9.29289 14.2929C9.10536 14.4804 9 14.7348 9 15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16H14C14.2652 16 14.5196 15.8946 14.7071 15.7071C14.8946 15.5196 15 15.2652 15 15C15 14.7348 14.8946 14.4804 14.7071 14.2929C14.5196 14.1054 14.2652 14 14 14Z" fill="#333333" />
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
          <Swiper
            slidesPerView="auto"
            wrapperTag="section"
            className={ style.listfilter }
          >
            { listFilter.map((item) => (
              <SwiperSlide key={ item.id }>
                <ItemList
                  id={ `list${item.id}` }
                  name={ item.key }
                  value={ item.name }
                  color={ item.color }
                  execFunction={ removeListFilter }
                />
              </SwiperSlide>
            )) }
          </Swiper>
        </div>
        <div className={ style.categorycont }>
          {
            products.map((object) => (
              <CardProduct
                key={ object.id }
                objectProduct={ object }
              />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default CategoryId;

type RequestCategoryType = {
  path: string
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { data } = await api.get('/categorys');
  const pgProps = await data.categorys.find(({ path }: RequestCategoryType) => path === params.id);
  return {
    props: {
      pageFilter: pgProps,
      products: data.products,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/categorys');

  const paths = data.categorys.map(({ path }: RequestCategoryType) => ({
    params: { id: path },
  }));

  return {
    paths,
    fallback: false,
  };
};
