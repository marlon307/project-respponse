import React, { /* useCallback, */ useState, lazy } from 'react';
import type { GetServerSideProps } from 'next';
import BarBuy from '../components/Bars/BarBuy';
import { SmallCard } from '../components/Cards';
import ContentModal from '../components/Modal/ContentModal';
import Checkout from '../components/Bag';
import HeadSEO from '../components/Head/HeadSEO';
import { StateBagType } from '../types/bag';
import style from '../Sass/style.module.scss';

const mockItem = [{
  id: 0,
  title: 'Algodão Pima',
  type: 'Jérsei',
  mainImg: 'https://i.imgur.com/dDldc4q.png',
  price: 71.25,
  oldPrice: 75.00,
  colorName: 'Azul',
  color: '#74bcf7',
  size: 'M',
  quantity: 2,
  discount: 5,
  identifyBag: '0#74bcf7M',
  code: '3SFA469',
}];

const stateBag: StateBagType = {
  bagItems: [],
  valueBag: 0,
  itemEditBag: {
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

function Bag({ token }: IToken) {
  const [openModal, setOpenModal] = useState<String | number>('');
  const [hiddenList, setHiddenList] = useState(false);

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
            { mockItem.length
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
                { mockItem.length }
                { ' ' }
                )
              </span>
            ) }
          </div>
          <ul className={ `${hiddenList ? style.hidden : ''}` }>
            { mockItem.length ? mockItem.map((object) => (
              <li key={ object.id + object.color + object.size }>
                <SmallCard
                  objectID={ object }
                  removable
                  editable
                  eventModal={ setOpenModal! }
                  identifyBag={ object.id + object.color + object.size }
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
          || Number.isInteger(openModal)
        }
      >
        { openModal === 'address' && <RenderAdderess /> }
        { openModal === 'addaddress' && <Addaddress token={ token } /> }
        { openModal === 'addcard' && <Addacard /> }
        { Number.isInteger(openModal) && <CardEdit /> }
      </ContentModal>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.u_token) {
    return {
      props: {
        token: req.cookies.u_token,
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
