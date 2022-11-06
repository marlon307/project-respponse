import React, { useCallback, useState, lazy } from 'react';
import { SWRConfig } from 'swr';
import type { GetServerSideProps } from 'next';
import type { TypeAddBagInfos } from '../@types/bag';
import BarBuy from '../components/Bars/BarBuy';
import { SmallCard } from '../components/Cards';
import ContentModal from '../components/Modal/ContentModal';
import Checkout from '../components/Bag';
import HeadSEO from '../components/Head/HeadSEO';
import useBag from '../hooks/useBag';
import { api2 } from '../service/api';
import style from '../Sass/style.module.scss';

// const stateBag = {
//   valueBag: 0,
//   itemEditBag: {
//     product_option: 0,
//     id: 0,
//     title: '',
//     category_name: '',
//     color: '',
//     color_name: '',
//     url_image: {
//       src: '',
//     },
//     size: '',
//     quantity: 0,
//   },
//   checkout: {
//     shipping: {
//       shippingCompany: '',
//       valueShipping: 0,
//     },
//     formatPay: {
//       formatPayment: 'Forma de pagamento',
//       division: 0,
//     },
//     cupomAplicate: {
//       code: '',
//       descountCupom: 0,
//     },
//   },
// };

const RenderAdderess = lazy(() => import('../components/Bag/RenderAdderess'));
const Addaddress = lazy(() => import('../components/Add/Address'));
const Addacard = lazy(() => import('../components/Add/Addcard'));
const CardEdit = lazy(() => import('../components/Cards/CardEditbag/CardEditbag'));

function ContentBag() {
  const { props, mutate, loading } = useBag(false);

  const [openModal, setOpenModal] = useState<string>('');
  const [identifyEditItemBag, setIdentifyEditItemBag] = useState<TypeAddBagInfos | any>({});
  const [hiddenList, setHiddenList] = useState(false);

  const setBagAddres = (add: ITAddress) => {
    setOpenModal('');
    props.main_add = add;
    mutate(props, false);
  };

  const deleteBagItem = useCallback(async (identify: TypeAddBagInfos) => {
    const { data } = await api2.delete('/bag', {
      data: {
        product_option: identify.opt_id,
        size: identify.size,
      },
    }).catch((err) => ({ data: err }));

    if (data.status === 200) {
      const newProps = [...props.list_b];
      newProps.splice(props?.list_b.indexOf(identify), 1);
      mutate(newProps, false);
    }
  }, [props?.list_b]);

  const openEditItemBagModal = useCallback(async (identify: TypeAddBagInfos) => {
    setOpenModal('editbag');
    setIdentifyEditItemBag(identify);
  }, []);

  return loading ? <div>sdsd</div> : (
    <>
      <div className={ style.bag }>
        <section className={ style.list }>
          <div className={ style.title }>
            <h1 title="Sacola">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 7h-3V6a4 4 0 1 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 1 1 4 0v1h-4V6Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 1 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10Z" fill="#333" />
              </svg>
              Sacola
            </h1>
            { props?.list_b?.length
              ? (
                <button
                  type="button"
                  aria-label="Ocutar sacola"
                  aria-hidden={ hiddenList }
                  onClick={ () => setHiddenList(!hiddenList) }
                />
              ) : null }
            { hiddenList && (
              <span>
                Informações da sua compra
                { ' ' }
                (
                { ' ' }
                { props?.list_b?.length }
                { ' ' }
                )
              </span>
            ) }
          </div>
          <ul className={ `${hiddenList ? style.hidden : ''}` }>
            { props?.list_b?.length ? props?.list_b.map((object: TypeAddBagInfos) => (
              <li key={ object.id + object.color + object.size }>
                <SmallCard
                  objectID={ object }
                  removable
                  editable
                  eventModal={ () => openEditItemBagModal(object) }
                  execFunction={ () => deleteBagItem(object) }
                />
              </li>
            )) : <li className={ style.empty }>Sacola Vazia</li> }
          </ul>
        </section>
        <Checkout
          setOpenModal={ setOpenModal }
          shipping={ props?.shipping_company }
          // addSelected={ listAdd.find((add: { add_id: number; }) => add?.add_id === addressid) }
          qunatityAdd={ props?.list_b?.length }
          addSelected={ props?.main_add }
        />
      </div>
      <BarBuy listProducts={ props?.list_b } />
      <ContentModal
        openModal={ setOpenModal }
        isOpen={
          openModal === 'address'
          || openModal === 'addaddress'
          || openModal === 'addcard'
          || openModal === 'editbag'
        }
      >
        { openModal === 'address' && <RenderAdderess execFunction={ setBagAddres! } /> }
        { openModal === 'addaddress' && <Addaddress execFunction={ () => setOpenModal('') } /> }
        { openModal === 'addcard' && <Addacard /> }
        { openModal === 'editbag' && (
          <CardEdit
            identify={ identifyEditItemBag }
            execeFunction={ setOpenModal }
          />
        ) }
      </ContentModal>
    </>
  );
}

interface Props {
  fallback: {
    list_b: TypeAddBagInfos[];
  }
}

function Bag({ fallback }: Props) {
  return (
    <>
      <HeadSEO
        title="Sacola e Checkout"
        description="Finalize sua compra"
      />
      <SWRConfig value={ { fallback } }>
        <ContentBag />
      </SWRConfig>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.u_token) {
    const { data } = await api2.get('/bag', {
      headers: {
        authorization: `Bearer ${req.cookies.u_token}`,
      },
    }).catch((err) => ({ data: err }));

    return {
      props: {
        fallback: {
          '/bag': {
            token: req.cookies.u_token,
            infobag: data.infobag,
          },
        },
      },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: '/',
    },
  };
};

export default Bag;
