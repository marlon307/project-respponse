import React, {
  useState, useCallback, lazy, Suspense, useEffect,
} from 'react';
import type { GetServerSideProps } from 'next';
import router from 'next/router';
import BtnAdd from '../components/Buttons/BtnAdd';
import style from '../Sass/style.module.scss';
import Loading from '../components/Loading';
import HeadSEO from '../components/Head/HeadSEO';
import useLogin from '../hooks/useLogin';

const Usercfg = lazy(() => import('../components/UserCfg/CfgUser'));
const Order = lazy(() => import('../components/Order/Orders'));
const OrderId = lazy(() => import('../components/Order/OrderId'));
const Address = lazy(() => import('../components/Cards/Address'));
const Addaderess = lazy(() => import('../components/Add/Address'));
const Cards = lazy(() => import('../components/Cards/Cards'));
const AddCard = lazy(() => import('../components/Add/Addcard'));
const Help = lazy(() => import('./help'));
const ContentModal = lazy(() => import('../components/Modal/ContentModal'));

function Account() {
  const { loggedOut } = useLogin();
  const [dropOption, setDropOption] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');

  const functionOpenModal = useCallback((type: React.SetStateAction<string>) => {
    setOpenModal(true);
    setTypeModal(type);
  }, []);

  const openOrderId = useCallback(() => {
    setOpenModal(true);
    setTypeModal('order');
  }, []);

  useEffect(() => {
    if (loggedOut) {
      router.push('/');
    }
  }, [loggedOut]);

  return (
    <>
      <HeadSEO title="Conta" description="Conta, pedidos, endereços, cartoes e ajuda." />
      <div className={ style.container } id="user">
        <a
          href="#user"
          className={ style.dropOption }
          aria-hidden={ !(dropOption === 'usercfg') }
          onClick={ () => setDropOption('usercfg') }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15.7 12.7a6 6 0 1 0-7.4 0A10 10 0 0 0 2 21a1 1 0 1 0 2 .2 8 8 0 0 1 15.9 0 1 1 0 0 0 1 .9 1 1 0 0 0 1-1.1 10 10 0 0 0-6.3-8.2ZM12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" fill="#333" />
          </svg>
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
          className={ style.dropOption }
          aria-hidden={ !(dropOption === 'order') }
          onClick={ () => setDropOption('order') }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3.7 16.3a1 1 0 0 0-.3-.2 1 1 0 0 0-.8 0 1 1 0 0 0-.3.2l-.2.3a1 1 0 0 0 .2 1.1l.3.2a1 1 0 0 0 .8 0l.3-.2a1 1 0 0 0 .2-1 1 1 0 0 0-.2-.4ZM7 8h14a1 1 0 1 0 0-2H7a1 1 0 0 0 0 2Zm-3.3 3.3a1 1 0 0 0-1-.2l-.4.2-.2.3a1 1 0 0 0 0 .8l.2.3.3.2a1 1 0 0 0 .8 0l.3-.2.2-.3a1 1 0 0 0 0-.8 1 1 0 0 0-.2-.3ZM21 11H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2ZM3.7 6.3a1 1 0 0 0-.3-.2 1 1 0 0 0-1.1.2l-.2.3a1 1 0 0 0 0 .8l.2.3.3.2a1 1 0 0 0 1.1-.2l.2-.3a1 1 0 0 0 0-.8l-.2-.3ZM21 16H7a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" fill="#333" />
          </svg>
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
          className={ style.dropOption }
          aria-hidden={ !(dropOption === 'address') }
          onClick={ () => setDropOption('address') }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8Zm0 17.6c-2.1-2-6-6.3-6-9.6a6 6 0 1 1 12 0c0 3.3-3.9 7.7-6 9.6ZM12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="#333" />
          </svg>
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
          className={ style.dropOption }
          aria-hidden={ !(dropOption === 'cards') }
          onClick={ () => setDropOption('cards') }
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 15H10C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13H7C6.73478 13 6.48043 13.1054 6.29289 13.2929C6.10536 13.4804 6 13.7348 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM19 5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7956 5 19 5ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V11H20V17ZM20 9H4V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H19C19.2652 7 19.5196 7.10536 19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V9Z" fill="#333333" />
          </svg>
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
          className={ style.dropOption }
          aria-hidden={ !(dropOption === 'help') }
          onClick={ () => setDropOption('help') }
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="m11.3 15.3-.1.1-.1.2v.8a.9.9 0 0 0 .5.5 1 1 0 0 0 .8 0 .9.9 0 0 0 .5-.5l.1-.4a1 1 0 0 0-1.7-.7ZM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-13a3 3 0 0 0-2.6 1.5 1 1 0 1 0 1.7 1A1 1 0 1 1 12 11a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.2A3 3 0 0 0 12 7Z" fill="#333" />
          </svg>
          <span>Ajuda</span>
        </a>
        <div className={ style.dropcontainer }>
          <Suspense fallback={ <Loading /> }>
            <Help />
          </Suspense>
        </div>
      </div>
      <Suspense fallback="...">
        <ContentModal
          isOpen={ openModal }
          openModal={ setOpenModal }
        >
          { (openModal && typeModal === 'order') && <OrderId /> }
          { (openModal && typeModal === 'cards') && <AddCard /> }
          { (openModal && typeModal === 'address') && <Addaderess /> }
        </ContentModal>
      </Suspense>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.u_token) {
    return {
      props: {
        logged: req.cookies.u_token,
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

export default Account;
