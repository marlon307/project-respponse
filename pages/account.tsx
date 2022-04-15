import React, {
  useState, useEffect, useCallback, lazy, Suspense,
} from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { useAppSelector } from '../redux/hooks';
import Svg from '../assets/Svg';
import ContentModal from '../components/Modal/ContentModal';
import BtnAdd from '../components/Buttons/BtnAdd';
import Help from './help';
import style from '../Sass/style.module.scss';
import Loading from '../components/Loading';

const Order = lazy(() => import('../components/Order/Orders'));
const OrderId = lazy(() => import('../components/Order/OrderId'));
const Cards = lazy(() => import('../components/Cards/Cards'));
const Address = lazy(() => import('../components/Cards/Address'));
const AddCard = lazy(() => import('../components/Add/Addcard'));
const Addaderess = lazy(() => import('../components/Add/Address'));
const Usercfg = lazy(() => import('../components/UserCfg/CfgUser'));

function Account() {
  const { logged } = useAppSelector(({ user }) => user);
  const router = useRouter();
  const [dropOption, setDropOption] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');

  const functionOpenModal = useCallback((type: React.SetStateAction<string>) => {
    setOpenModal(true);
    setTypeModal(type);
  }, []);

  const openOrderId = useCallback(() => {
    // (id) =>
    setOpenModal(true);
    setTypeModal('order');
  }, []);

  useEffect(() => {
    if (!logged) {
      router.push('/');
    }
  }, [logged, router]);

  return (
    <>
      <div className={ style.usercfg }>
        <div className={ style.container } id="user">
          <a
            href="#user"
            onClick={ () => setDropOption('usercfg') }
            className={ cx(style.dropOption, {
              [style.open]: dropOption === 'usercfg',
            }) }
          >
            <Svg icoName="user" />
            <span>Configurações do Usuário</span>
          </a>
          <div className={ style.dropcontainer }>
            <Suspense fallback={ <Loading /> }>
              <Usercfg />
            </Suspense>
          </div>
        </div>
        <div className={ style.container } id="orders">
          <a
            href="#orders"
            onClick={ () => setDropOption('order') }
            className={ cx(style.dropOption, {
              [style.open]: dropOption === 'order',
            }) }
          >
            <Svg icoName="list" />
            <span>Pedidos</span>
          </a>
          <div className={ style.dropcontainer }>
            <Suspense fallback={ <Loading /> }>
              <Order execFunction={ openOrderId } />
            </Suspense>
          </div>
        </div>
        <div className={ style.container } id="address">
          <a
            href="#address"
            onClick={ () => setDropOption('address') }
            className={ cx(style.dropOption, {
              [style.open]: dropOption === 'address',
            }) }
          >
            <Svg icoName="map" />
            <span>Endereços</span>
          </a>
          <div className={ style.dropcontainer }>
            <BtnAdd eventBtn={ () => functionOpenModal('address') } />
            <div className={ style.contentoption }>
              <Suspense fallback={ <Loading /> }>
                <Address />
              </Suspense>
            </div>
          </div>
        </div>
        <div className={ style.container } id="cards">
          <a
            href="#cards"
            onClick={ () => setDropOption('cards') }
            className={ cx(style.dropOption, {
              [style.open]: dropOption === 'cards',
            }) }
          >
            <Svg icoName="card" />
            <span>Cartões</span>
          </a>
          <div className={ style.dropcontainer }>
            <section className={ style.section }>
              <BtnAdd eventBtn={ () => functionOpenModal('cards') } />
              <div className={ style.contentoption }>
                <Suspense fallback={ <Loading /> }>
                  <Cards />
                </Suspense>
              </div>
            </section>
          </div>
        </div>
        <div className={ style.container } id="help">
          <a
            href="#help"
            onClick={ () => setDropOption('help') }
            className={ cx(style.dropOption, {
              [style.open]: dropOption === 'help',
            }) }
          >
            <Svg icoName="question" />
            <span>Ajuda</span>
          </a>
          <div className={ style.dropcontainer }>
            <Help />
          </div>
        </div>
      </div>
      <ContentModal
        isOpen={ openModal }
        openModal={ setOpenModal }
      >
        { (openModal && typeModal === 'order') && <OrderId /> }
        { (openModal && typeModal === 'cards') && <AddCard /> }
        { (openModal && typeModal === 'address') && <Addaderess /> }
      </ContentModal>
    </>
  );
}

export default Account;
