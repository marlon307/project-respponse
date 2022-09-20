import React, { useCallback, useState, lazy } from 'react';
import type { GetServerSideProps } from 'next';
import BarBuy from '../components/Bars/BarBuy';
import { SmallCard } from '../components/Cards';
import ContentModal from '../components/Modal/ContentModal';
import Checkout from '../components/Bag';
import HeadSEO from '../components/Head/HeadSEO';
import { StateBagType, TypeEditBagInfos } from '../@types/bag';
import { api2 } from '../service/api';
import style from '../Sass/style.module.scss';

const stateBag: StateBagType = {
  bagItems: [],
  valueBag: 0,
  itemEditBag: {
    product_option: 0,
    id: 0,
    title: '',
    type: '',
    color: '',
    colorName: '',
    mainImg: {
      src: '',
    },
    size: '',
    quantity: 0,
    identifyBag: '',
  },
  checkout: {
    adderessSelected: {
      name: 'Clique aqui ( 👇 ) para selecionar o endereço.',
      road: '---',
      district: '---',
      number: '---',
      uf: '---',
      city: '---',
      zipcode: '---',
    },
    shipping: {
      shippingCompany: '',
      valueShipping: 0,
    },
    formatPay: {
      formatPayment: 'Forma de pagamento',
      division: 0,
    },
    cupomAplicate: {
      code: '',
      descountCupom: 0,
    },
  },
};

const RenderAdderess = lazy(() => import('../components/Bag/RenderAdderess'));
const Addaddress = lazy(() => import('../components/Add/Address'));
const Addacard = lazy(() => import('../components/Add/Addcard'));
const CardEdit = lazy(() => import('../components/Cards/CardEditbag/CardEditbag'));

interface Props {
  token: IToken['token'];
  listBag: TypeEditBagInfos[];
}

function Bag({ token, listBag }: Props) {
  const [openModal, setOpenModal] = useState<string>('');
  const [identifyEditItemBag, setIdentifyEditItemBag] = useState<string>('');
  const [hiddenList, setHiddenList] = useState(false);

  const deleteBagItem = useCallback(async (identify: string) => {
    const split = identify.split('-');

    await api2.delete('/bag', {
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        option_id: Number(split[0]),
        size: split[1],
      },
    }).catch((err) => ({ err }));
  }, []);

  const openEditItemBagModal = useCallback(async (identify: string) => {
    setOpenModal('editbag');
    setIdentifyEditItemBag(identify);
  }, []);

  return (
    <>
      <HeadSEO
        title="Sacola e Checkout"
        description="Finalize sua compra"
      />
      <div className={ style.bag }>
        <section className={ style.list }>
          <div className={ style.title }>
            <h1 title="Sacola">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 7h-3V6a4 4 0 1 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 1 1 4 0v1h-4V6Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 1 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10Z" fill="#333" />
              </svg>
              Sacola
            </h1>
            { listBag.length
              ? (
                <button
                  type="button"
                  aria-label="Ocutar sacola"
                  aria-hidden={ hiddenList }
                  onClick={ () => setHiddenList(!hiddenList) }
                />
              ) : '' }
            { hiddenList && (
              <span>
                Informações da sua compra
                { ' ' }
                (
                { ' ' }
                { listBag.length }
                { ' ' }
                )
              </span>
            ) }
          </div>
          <ul className={ `${hiddenList ? style.hidden : ''}` }>
            { listBag.length ? listBag.map((object) => (
              <li key={ object.id + object.color + object.size }>
                <SmallCard
                  objectID={ object }
                  removable
                  editable
                  eventModal={ () => openEditItemBagModal(`${object.product_option}-${object.size}`) }
                  execFunction={ () => deleteBagItem(`${object.product_option}-${object.size}`) }
                />
              </li>
            ))
              : <li className={ style.empty }>Sacola Vazia</li> }
          </ul>
        </section>
        <Checkout
          setOpenModal={ setOpenModal }
          infoCheckout={ stateBag.checkout }
        />
      </div>
      <BarBuy stateBag={ stateBag } />
      <ContentModal
        openModal={ setOpenModal }
        isOpen={
          openModal === 'address'
          || openModal === 'addaddress'
          || openModal === 'addcard'
          || openModal === 'editbag'
          // ${objectID.product_option}-${size}
        }
      >
        { openModal === 'address' && <RenderAdderess /> }
        { openModal === 'addaddress' && <Addaddress token={ token } execFunction={ () => setOpenModal('') } /> }
        { openModal === 'addcard' && <Addacard /> }
        { openModal === 'editbag' && <CardEdit identify={ identifyEditItemBag } token={ token } /> }
      </ContentModal>
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
        token: req.cookies.u_token,
        listBag: data.list_bag,
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
