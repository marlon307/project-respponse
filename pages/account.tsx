import React, {
  useState, useCallback, lazy, Suspense,
} from 'react';
import type { GetServerSideProps } from 'next';
import BtnAdd from '../components/Buttons/BtnAdd';
import style from '../Sass/style.module.scss';
import Loading from '../components/Loading';
import HeadSEO from '../components/Head/HeadSEO';

const Order = lazy(() => import('../components/Order/Orders'));
const OrderId = lazy(() => import('../components/Order/OrderId'));
const Cards = lazy(() => import('../components/Cards/Cards'));
const Address = lazy(() => import('../components/Cards/Address'));
const AddCard = lazy(() => import('../components/Add/Addcard'));
const Addaderess = lazy(() => import('../components/Add/Address'));
const Usercfg = lazy(() => import('../components/UserCfg/CfgUser'));
const Help = lazy(() => import('./help'));
const ContentModal = lazy(() => import('../components/Modal/ContentModal'));

function Account() {
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.71 12.7099C16.6904 11.9385 17.406 10.8808 17.7572 9.68382C18.1085 8.48684 18.0779 7.21015 17.6698 6.03135C17.2617 4.85255 16.4963 3.83027 15.4801 3.10674C14.4639 2.3832 13.2474 1.99438 12 1.99438C10.7525 1.99438 9.53611 2.3832 8.51993 3.10674C7.50374 3.83027 6.73834 4.85255 6.33021 6.03135C5.92208 7.21015 5.89151 8.48684 6.24276 9.68382C6.59401 10.8808 7.3096 11.9385 8.29 12.7099C6.61007 13.3829 5.14428 14.4992 4.04889 15.9398C2.95349 17.3804 2.26956 19.0912 2.07 20.8899C2.05555 21.0212 2.06711 21.1541 2.10402 21.2809C2.14093 21.4078 2.20246 21.5261 2.28511 21.6292C2.45202 21.8374 2.69478 21.9707 2.96 21.9999C3.22521 22.0291 3.49116 21.9517 3.69932 21.7848C3.90749 21.6179 4.04082 21.3751 4.07 21.1099C4.28958 19.1551 5.22168 17.3497 6.68822 16.0387C8.15475 14.7277 10.0529 14.0029 12.02 14.0029C13.9871 14.0029 15.8852 14.7277 17.3518 16.0387C18.8183 17.3497 19.7504 19.1551 19.97 21.1099C19.9972 21.3556 20.1144 21.5825 20.2991 21.7469C20.4838 21.9113 20.7228 22.0014 20.97 21.9999H21.08C21.3421 21.9697 21.5817 21.8372 21.7466 21.6311C21.9114 21.4251 21.9881 21.1622 21.96 20.8999C21.7595 19.0961 21.0719 17.3809 19.9708 15.9381C18.8698 14.4953 17.3969 13.3794 15.71 12.7099ZM12 11.9999C11.2089 11.9999 10.4355 11.7653 9.77772 11.3258C9.11992 10.8862 8.60723 10.2615 8.30448 9.53061C8.00173 8.79971 7.92251 7.99544 8.07686 7.21952C8.2312 6.4436 8.61216 5.73086 9.17157 5.17145C9.73098 4.61204 10.4437 4.23108 11.2196 4.07674C11.9956 3.9224 12.7998 4.00161 13.5307 4.30436C14.2616 4.60711 14.8863 5.1198 15.3259 5.7776C15.7654 6.4354 16 7.20876 16 7.99988C16 9.06075 15.5786 10.0782 14.8284 10.8283C14.0783 11.5785 13.0609 11.9999 12 11.9999Z" fill="#333333" />
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.70999 16.29C3.61488 16.199 3.50274 16.1276 3.37999 16.08C3.13653 15.98 2.86345 15.98 2.61999 16.08C2.49724 16.1276 2.38509 16.199 2.28999 16.29C2.19895 16.3851 2.12758 16.4972 2.07999 16.62C2.00341 16.8021 1.98249 17.0028 2.01986 17.1968C2.05723 17.3908 2.15123 17.5694 2.28999 17.71C2.38719 17.7983 2.4988 17.8694 2.61999 17.92C2.73969 17.9729 2.86912 18.0002 2.99999 18.0002C3.13086 18.0002 3.26029 17.9729 3.37999 17.92C3.50117 17.8694 3.61279 17.7983 3.70999 17.71C3.84875 17.5694 3.94274 17.3908 3.98012 17.1968C4.01749 17.0028 3.99657 16.8021 3.91999 16.62C3.87239 16.4972 3.80103 16.3851 3.70999 16.29ZM6.99999 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H6.99999C6.73477 6 6.48042 6.10536 6.29288 6.29289C6.10535 6.48043 5.99999 6.73478 5.99999 7C5.99999 7.26522 6.10535 7.51957 6.29288 7.70711C6.48042 7.89464 6.73477 8 6.99999 8ZM3.70999 11.29C3.56936 11.1512 3.39079 11.0572 3.1968 11.0199C3.00281 10.9825 2.8021 11.0034 2.61999 11.08C2.4988 11.1306 2.38719 11.2017 2.28999 11.29C2.19895 11.3851 2.12758 11.4972 2.07999 11.62C2.02708 11.7397 1.99976 11.8691 1.99976 12C1.99976 12.1309 2.02708 12.2603 2.07999 12.38C2.13063 12.5012 2.20166 12.6128 2.28999 12.71C2.38719 12.7983 2.4988 12.8694 2.61999 12.92C2.73969 12.9729 2.86912 13.0002 2.99999 13.0002C3.13086 13.0002 3.26029 12.9729 3.37999 12.92C3.50117 12.8694 3.61279 12.7983 3.70999 12.71C3.79832 12.6128 3.86935 12.5012 3.91999 12.38C3.97289 12.2603 4.00022 12.1309 4.00022 12C4.00022 11.8691 3.97289 11.7397 3.91999 11.62C3.87239 11.4972 3.80103 11.3851 3.70999 11.29ZM21 11H6.99999C6.73477 11 6.48042 11.1054 6.29288 11.2929C6.10535 11.4804 5.99999 11.7348 5.99999 12C5.99999 12.2652 6.10535 12.5196 6.29288 12.7071C6.48042 12.8946 6.73477 13 6.99999 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM3.70999 6.29C3.61488 6.19896 3.50274 6.12759 3.37999 6.08C3.19788 6.00342 2.99716 5.9825 2.80317 6.01987C2.60919 6.05725 2.43061 6.15124 2.28999 6.29C2.20166 6.3872 2.13063 6.49882 2.07999 6.62C2.02708 6.7397 1.99976 6.86913 1.99976 7C1.99976 7.13087 2.02708 7.2603 2.07999 7.38C2.13063 7.50119 2.20166 7.6128 2.28999 7.71C2.38719 7.79833 2.4988 7.86936 2.61999 7.92C2.8021 7.99658 3.00281 8.0175 3.1968 7.98013C3.39079 7.94275 3.56936 7.84876 3.70999 7.71C3.79832 7.6128 3.86935 7.50119 3.91999 7.38C3.97289 7.2603 4.00022 7.13087 4.00022 7C4.00022 6.86913 3.97289 6.7397 3.91999 6.62C3.86935 6.49882 3.79832 6.3872 3.70999 6.29ZM21 16H6.99999C6.73477 16 6.48042 16.1054 6.29288 16.2929C6.10535 16.4804 5.99999 16.7348 5.99999 17C5.99999 17.2652 6.10535 17.5196 6.29288 17.7071C6.48042 17.8946 6.73477 18 6.99999 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16Z" fill="#333333" />
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 15.4 11.05 21.5 11.35 21.76C11.5311 21.9149 11.7616 22.0001 12 22.0001C12.2384 22.0001 12.4689 21.9149 12.65 21.76C13 21.5 20 15.4 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2ZM12 19.65C9.87 17.65 6 13.34 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10C18 13.34 14.13 17.66 12 19.65ZM12 6C11.2089 6 10.4355 6.2346 9.77772 6.67412C9.11992 7.11365 8.60723 7.73836 8.30448 8.46927C8.00173 9.20017 7.92252 10.0044 8.07686 10.7804C8.2312 11.5563 8.61216 12.269 9.17157 12.8284C9.73098 13.3878 10.4437 13.7688 11.2196 13.9231C11.9956 14.0775 12.7998 13.9983 13.5307 13.6955C14.2616 13.3928 14.8864 12.8801 15.3259 12.2223C15.7654 11.5645 16 10.7911 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12C11.6044 12 11.2178 11.8827 10.8889 11.6629C10.56 11.4432 10.3036 11.1308 10.1522 10.7654C10.0009 10.3999 9.96126 9.99778 10.0384 9.60982C10.1156 9.22186 10.3061 8.86549 10.5858 8.58579C10.8655 8.30608 11.2219 8.1156 11.6098 8.03843C11.9978 7.96126 12.3999 8.00087 12.7654 8.15224C13.1308 8.30362 13.4432 8.55996 13.6629 8.88886C13.8827 9.21776 14 9.60444 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12Z" fill="#333333" />
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.29 15.29C11.247 15.3375 11.2069 15.3876 11.17 15.44C11.1322 15.4957 11.1019 15.5563 11.08 15.62C11.0512 15.6767 11.031 15.7374 11.02 15.8C11.0151 15.8666 11.0151 15.9334 11.02 16C11.0166 16.1312 11.044 16.2613 11.1 16.38C11.1449 16.5041 11.2166 16.6168 11.3099 16.7101C11.4032 16.8034 11.5159 16.8751 11.64 16.92C11.7597 16.9729 11.8891 17.0002 12.02 17.0002C12.1509 17.0002 12.2803 16.9729 12.4 16.92C12.5241 16.8751 12.6368 16.8034 12.7301 16.7101C12.8234 16.6168 12.8951 16.5041 12.94 16.38C12.9844 16.2584 13.0048 16.1294 13 16C13.0008 15.8684 12.9755 15.7379 12.9258 15.6161C12.876 15.4943 12.8027 15.3834 12.71 15.29C12.617 15.1963 12.5064 15.1219 12.3846 15.0711C12.2627 15.0203 12.132 14.9942 12 14.9942C11.868 14.9942 11.7373 15.0203 11.6154 15.0711C11.4936 15.1219 11.383 15.1963 11.29 15.29ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM12 7C11.4731 6.99966 10.9553 7.13812 10.4989 7.40144C10.0425 7.66476 9.66347 8.04366 9.4 8.5C9.32765 8.61382 9.27907 8.7411 9.25718 8.87418C9.23529 9.00726 9.24055 9.14339 9.27263 9.27439C9.30472 9.40538 9.36297 9.52854 9.44389 9.63643C9.52481 9.74433 9.62671 9.83475 9.74348 9.90224C9.86024 9.96974 9.98945 10.0129 10.1233 10.0292C10.2572 10.0454 10.393 10.0345 10.5225 9.99688C10.6521 9.9593 10.7727 9.89591 10.8771 9.81052C10.9814 9.72513 11.0675 9.6195 11.13 9.5C11.2181 9.3474 11.345 9.22078 11.4978 9.13298C11.6505 9.04518 11.8238 8.9993 12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10C13 10.2652 12.8946 10.5196 12.7071 10.7071C12.5196 10.8946 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V12.82C13.6614 12.58 14.2174 12.1152 14.5708 11.5069C14.9242 10.8985 15.0525 10.1853 14.9334 9.49189C14.8143 8.79849 14.4552 8.16902 13.919 7.71352C13.3828 7.25801 12.7035 7.00546 12 7Z" fill="#333333" />
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
