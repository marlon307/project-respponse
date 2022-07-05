import React, {
  useState, useRef, useEffect, lazy, Suspense,
} from 'react';
import Link from 'next/link';
import CustomLink from '../../CustomLink';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { LOGOUT_USER } from '../../../redux/actions';
import style from './styles/style.module.scss';

const ContentModal = lazy(() => import('../../Modal/ContentModal'));
const LoginRegister = lazy(() => import('../../../pages/login-register'));

function MenuUser() {
  const dispatch = useAppDispatch();
  const { logged } = useAppSelector(({ user }) => user);
  const ref = useRef(null);
  const [openLogin, setOpenLogin] = useState(false);

  function openModalLogin(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (!logged) {
      setOpenLogin(true);
    } else {
      dispatch(LOGOUT_USER());
    }
  }
  // Fechar modal apos login
  useEffect(() => {
    if (logged) {
      setOpenLogin(false);
    }
  }, [logged]);

  return (
    <div className={ style.usermneu }>
      { logged ? (
        <>
          <Link href="/account" passHref className={ style.mnuser }>
            <a aria-label="Conta">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.71 12.7099C16.6904 11.9385 17.406 10.8808 17.7572 9.68382C18.1085 8.48684 18.0779 7.21015 17.6698 6.03135C17.2617 4.85255 16.4963 3.83027 15.4801 3.10674C14.4639 2.3832 13.2474 1.99438 12 1.99438C10.7525 1.99438 9.53611 2.3832 8.51993 3.10674C7.50374 3.83027 6.73834 4.85255 6.33021 6.03135C5.92208 7.21015 5.89151 8.48684 6.24276 9.68382C6.59401 10.8808 7.3096 11.9385 8.29 12.7099C6.61007 13.3829 5.14428 14.4992 4.04889 15.9398C2.95349 17.3804 2.26956 19.0912 2.07 20.8899C2.05555 21.0212 2.06711 21.1541 2.10402 21.2809C2.14093 21.4078 2.20246 21.5261 2.28511 21.6292C2.45202 21.8374 2.69478 21.9707 2.96 21.9999C3.22521 22.0291 3.49116 21.9517 3.69932 21.7848C3.90749 21.6179 4.04082 21.3751 4.07 21.1099C4.28958 19.1551 5.22168 17.3497 6.68822 16.0387C8.15475 14.7277 10.0529 14.0029 12.02 14.0029C13.9871 14.0029 15.8852 14.7277 17.3518 16.0387C18.8183 17.3497 19.7504 19.1551 19.97 21.1099C19.9972 21.3556 20.1144 21.5825 20.2991 21.7469C20.4838 21.9113 20.7228 22.0014 20.97 21.9999H21.08C21.3421 21.9697 21.5817 21.8372 21.7466 21.6311C21.9114 21.4251 21.9881 21.1622 21.96 20.8999C21.7595 19.0961 21.0719 17.3809 19.9708 15.9381C18.8698 14.4953 17.3969 13.3794 15.71 12.7099ZM12 11.9999C11.2089 11.9999 10.4355 11.7653 9.77772 11.3258C9.11992 10.8862 8.60723 10.2615 8.30448 9.53061C8.00173 8.79971 7.92251 7.99544 8.07686 7.21952C8.2312 6.4436 8.61216 5.73086 9.17157 5.17145C9.73098 4.61204 10.4437 4.23108 11.2196 4.07674C11.9956 3.9224 12.7998 4.00161 13.5307 4.30436C14.2616 4.60711 14.8863 5.1198 15.3259 5.7776C15.7654 6.4354 16 7.20876 16 7.99988C16 9.06075 15.5786 10.0782 14.8284 10.8283C14.0783 11.5785 13.0609 11.9999 12 11.9999Z" fill="#333333" />
              </svg>
            </a>
          </Link>
          <div
            ref={ ref }
            className={ style.dropmenu }
          >
            <span className={ style.set } />
            <ul>
              <li>
                <Link href="/help">
                  <a aria-label="Ajuda">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.29 15.29C11.247 15.3375 11.2069 15.3876 11.17 15.44C11.1322 15.4957 11.1019 15.5563 11.08 15.62C11.0512 15.6767 11.031 15.7374 11.02 15.8C11.0151 15.8666 11.0151 15.9334 11.02 16C11.0166 16.1312 11.044 16.2613 11.1 16.38C11.1449 16.5041 11.2166 16.6168 11.3099 16.7101C11.4032 16.8034 11.5159 16.8751 11.64 16.92C11.7597 16.9729 11.8891 17.0002 12.02 17.0002C12.1509 17.0002 12.2803 16.9729 12.4 16.92C12.5241 16.8751 12.6368 16.8034 12.7301 16.7101C12.8234 16.6168 12.8951 16.5041 12.94 16.38C12.9844 16.2584 13.0048 16.1294 13 16C13.0008 15.8684 12.9755 15.7379 12.9258 15.6161C12.876 15.4943 12.8027 15.3834 12.71 15.29C12.617 15.1963 12.5064 15.1219 12.3846 15.0711C12.2627 15.0203 12.132 14.9942 12 14.9942C11.868 14.9942 11.7373 15.0203 11.6154 15.0711C11.4936 15.1219 11.383 15.1963 11.29 15.29ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM12 7C11.4731 6.99966 10.9553 7.13812 10.4989 7.40144C10.0425 7.66476 9.66347 8.04366 9.4 8.5C9.32765 8.61382 9.27907 8.7411 9.25718 8.87418C9.23529 9.00726 9.24055 9.14339 9.27263 9.27439C9.30472 9.40538 9.36297 9.52854 9.44389 9.63643C9.52481 9.74433 9.62671 9.83475 9.74348 9.90224C9.86024 9.96974 9.98945 10.0129 10.1233 10.0292C10.2572 10.0454 10.393 10.0345 10.5225 9.99688C10.6521 9.9593 10.7727 9.89591 10.8771 9.81052C10.9814 9.72513 11.0675 9.6195 11.13 9.5C11.2181 9.3474 11.345 9.22078 11.4978 9.13298C11.6505 9.04518 11.8238 8.9993 12 9C12.2652 9 12.5196 9.10536 12.7071 9.29289C12.8946 9.48043 13 9.73478 13 10C13 10.2652 12.8946 10.5196 12.7071 10.7071C12.5196 10.8946 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8946 11.7348 14 12 14C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V12.82C13.6614 12.58 14.2174 12.1152 14.5708 11.5069C14.9242 10.8985 15.0525 10.1853 14.9334 9.49189C14.8143 8.79849 14.4552 8.16902 13.919 7.71352C13.3828 7.25801 12.7035 7.00546 12 7Z" fill="#333333" />
                    </svg>
                    Ajuda
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/account">
                  <a aria-label="Conta">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.9 12.66C19.7397 12.4775 19.6513 12.2429 19.6513 12C19.6513 11.7571 19.7397 11.5225 19.9 11.34L21.18 9.90002C21.3211 9.74269 21.4087 9.54472 21.4302 9.33452C21.4518 9.12433 21.4062 8.9127 21.3 8.73002L19.3 5.27002C19.1949 5.08754 19.0349 4.94289 18.8428 4.8567C18.6506 4.77051 18.4362 4.74718 18.23 4.79002L16.35 5.17002C16.1108 5.21945 15.8618 5.17961 15.6499 5.05802C15.438 4.93643 15.278 4.7415 15.2 4.51002L14.59 2.68002C14.5229 2.4814 14.3951 2.30888 14.2246 2.18686C14.0542 2.06484 13.8497 1.99948 13.64 2.00002H9.64002C9.42195 1.98864 9.20615 2.04894 9.02558 2.17173C8.84501 2.29452 8.7096 2.47304 8.64002 2.68002L8.08002 4.51002C8.00202 4.7415 7.84199 4.93643 7.63013 5.05802C7.41827 5.17961 7.16924 5.21945 6.93002 5.17002L5.00002 4.79002C4.80457 4.7624 4.60532 4.79324 4.42737 4.87866C4.24941 4.96407 4.10072 5.10025 4.00002 5.27002L2.00002 8.73002C1.89118 8.91067 1.84224 9.1211 1.8602 9.33124C1.87816 9.54138 1.9621 9.74046 2.10002 9.90002L3.37002 11.34C3.53034 11.5225 3.61875 11.7571 3.61875 12C3.61875 12.2429 3.53034 12.4775 3.37002 12.66L2.10002 14.1C1.9621 14.2596 1.87816 14.4587 1.8602 14.6688C1.84224 14.8789 1.89118 15.0894 2.00002 15.27L4.00002 18.73C4.10512 18.9125 4.26514 19.0571 4.45727 19.1433C4.6494 19.2295 4.86384 19.2529 5.07002 19.21L6.95002 18.83C7.18924 18.7806 7.43827 18.8204 7.65013 18.942C7.86199 19.0636 8.02202 19.2585 8.10002 19.49L8.71002 21.32C8.7796 21.527 8.91501 21.7055 9.09558 21.8283C9.27615 21.9511 9.49195 22.0114 9.71002 22H13.71C13.9197 22.0006 14.1242 21.9352 14.2946 21.8132C14.4651 21.6912 14.5929 21.5186 14.66 21.32L15.27 19.49C15.348 19.2585 15.508 19.0636 15.7199 18.942C15.9318 18.8204 16.1808 18.7806 16.42 18.83L18.3 19.21C18.5062 19.2529 18.7206 19.2295 18.9128 19.1433C19.1049 19.0571 19.2649 18.9125 19.37 18.73L21.37 15.27C21.4762 15.0873 21.5218 14.8757 21.5002 14.6655C21.4787 14.4553 21.3911 14.2573 21.25 14.1L19.9 12.66ZM18.41 14L19.21 14.9L17.93 17.12L16.75 16.88C16.0298 16.7328 15.2806 16.8551 14.6446 17.2238C14.0086 17.5925 13.5302 18.1819 13.3 18.88L12.92 20H10.36L10 18.86C9.76987 18.1619 9.2914 17.5725 8.65542 17.2038C8.01945 16.8351 7.27024 16.7128 6.55002 16.86L5.37002 17.1L4.07002 14.89L4.87002 13.99C5.36197 13.44 5.63395 12.7279 5.63395 11.99C5.63395 11.2521 5.36197 10.54 4.87002 9.99002L4.07002 9.09002L5.35002 6.89002L6.53002 7.13002C7.25024 7.27724 7.99945 7.1549 8.63542 6.78622C9.2714 6.41753 9.74987 5.82818 9.98002 5.13002L10.36 4.00002H12.92L13.3 5.14002C13.5302 5.83818 14.0086 6.42753 14.6446 6.79622C15.2806 7.1649 16.0298 7.28724 16.75 7.14002L17.93 6.90002L19.21 9.12002L18.41 10.02C17.9236 10.5688 17.655 11.2767 17.655 12.01C17.655 12.7433 17.9236 13.4513 18.41 14ZM11.64 8.00002C10.8489 8.00002 10.0755 8.23461 9.41774 8.67414C8.75994 9.11366 8.24725 9.73838 7.9445 10.4693C7.64175 11.2002 7.56254 12.0045 7.71688 12.7804C7.87122 13.5563 8.25218 14.269 8.81159 14.8284C9.371 15.3879 10.0837 15.7688 10.8597 15.9232C11.6356 16.0775 12.4398 15.9983 13.1708 15.6955C13.9017 15.3928 14.5264 14.8801 14.9659 14.2223C15.4054 13.5645 15.64 12.7911 15.64 12C15.64 10.9392 15.2186 9.92174 14.4684 9.17159C13.7183 8.42144 12.7009 8.00002 11.64 8.00002ZM11.64 14C11.2445 14 10.8578 13.8827 10.5289 13.663C10.2 13.4432 9.94363 13.1308 9.79226 12.7654C9.64088 12.3999 9.60128 11.9978 9.67845 11.6098C9.75562 11.2219 9.9461 10.8655 10.2258 10.5858C10.5055 10.3061 10.8619 10.1156 11.2498 10.0384C11.6378 9.96128 12.0399 10.0009 12.4054 10.1523C12.7708 10.3036 13.0832 10.56 13.303 10.8889C13.5227 11.2178 13.64 11.6045 13.64 12C13.64 12.5304 13.4293 13.0392 13.0542 13.4142C12.6792 13.7893 12.1705 14 11.64 14Z" fill="#333333" />
                    </svg>
                    Conta
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/favorite">
                  <a aria-label="Favoritos">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.16 5C19.0937 3.9447 17.6854 3.30527 16.1891 3.19708C14.6928 3.08889 13.207 3.51907 12 4.41C10.7277 3.46364 9.14402 3.03451 7.56795 3.20904C5.99188 3.38356 4.54047 4.14878 3.506 5.35059C2.47154 6.55239 1.93085 8.10152 1.99283 9.68601C2.05481 11.2705 2.71485 12.7727 3.84003 13.89L9.84003 19.94C10.4025 20.5018 11.165 20.8174 11.96 20.8174C12.755 20.8174 13.5175 20.5018 14.08 19.94L20.08 13.89C20.671 13.3126 21.142 12.6242 21.466 11.8642C21.79 11.1043 21.9606 10.2878 21.968 9.46163C21.9755 8.63551 21.8196 7.81606 21.5093 7.05038C21.199 6.2847 20.7405 5.58789 20.16 5ZM18.75 12.46L12.75 18.46C12.6571 18.5537 12.5465 18.6281 12.4246 18.6789C12.3027 18.7297 12.172 18.7558 12.04 18.7558C11.908 18.7558 11.7773 18.7297 11.6555 18.6789C11.5336 18.6281 11.423 18.5537 11.33 18.46L5.33003 12.46C4.54579 11.6583 4.10664 10.5815 4.10664 9.46C4.10664 8.33853 4.54579 7.26166 5.33003 6.46C6.12919 5.67099 7.207 5.22857 8.33003 5.22857C9.45306 5.22857 10.5309 5.67099 11.33 6.46C11.423 6.55373 11.5336 6.62812 11.6555 6.67889C11.7773 6.72966 11.908 6.7558 12.04 6.7558C12.172 6.7558 12.3027 6.72966 12.4246 6.67889C12.5465 6.62812 12.6571 6.55373 12.75 6.46C13.5708 5.80689 14.6032 5.47872 15.6505 5.53809C16.6977 5.59746 17.6864 6.04021 18.4281 6.7819C19.1698 7.52359 19.6126 8.51233 19.6719 9.55956C19.7313 10.6068 19.4031 11.6392 18.75 12.46Z" fill="#333333" />
                    </svg>
                    Favoritos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/login-register" passHref>
                  <CustomLink
                    ariaLabel="Sair"
                    onClick={ openModalLogin! }
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H12.59L10.29 15.29C10.1963 15.383 10.1219 15.4936 10.0711 15.6154C10.0203 15.7373 9.9942 15.868 9.9942 16C9.9942 16.132 10.0203 16.2627 10.0711 16.3846C10.1219 16.5064 10.1963 16.617 10.29 16.71C10.383 16.8037 10.4936 16.8781 10.6154 16.9289C10.7373 16.9797 10.868 17.0058 11 17.0058C11.132 17.0058 11.2627 16.9797 11.3846 16.9289C11.5064 16.8781 11.617 16.8037 11.71 16.71L15.71 12.71C15.801 12.6149 15.8724 12.5028 15.92 12.38C16.02 12.1365 16.02 11.8635 15.92 11.62C15.8724 11.4972 15.801 11.3851 15.71 11.29L11.71 7.29C11.6168 7.19676 11.5061 7.1228 11.3842 7.07234C11.2624 7.02188 11.1319 6.99591 11 6.99591C10.8681 6.99591 10.7376 7.02188 10.6158 7.07234C10.4939 7.1228 10.3832 7.19676 10.29 7.29C10.1968 7.38324 10.1228 7.49393 10.0723 7.61575C10.0219 7.73757 9.99591 7.86814 9.99591 8C9.99591 8.13186 10.0219 8.26243 10.0723 8.38425C10.1228 8.50607 10.1968 8.61676 10.29 8.71L12.59 11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12ZM17 2H7C6.20435 2 5.44129 2.31607 4.87868 2.87868C4.31607 3.44129 4 4.20435 4 5V8C4 8.26522 4.10536 8.51957 4.29289 8.70711C4.48043 8.89464 4.73478 9 5 9C5.26522 9 5.51957 8.89464 5.70711 8.70711C5.89464 8.51957 6 8.26522 6 8V5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H7C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19V16C6 15.7348 5.89464 15.4804 5.70711 15.2929C5.51957 15.1054 5.26522 15 5 15C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H17C17.7956 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7956 20 19V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2Z" fill="#333333" />
                    </svg>
                    Sair
                  </CustomLink>
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link href="/login-register" passHref>
          <CustomLink
            ariaLabel="Entrar"
            className={ style.login }
            onClick={ openModalLogin! }
          >
            Entrar
          </CustomLink>
        </Link>
      ) }

      <Suspense fallback="...">
        <ContentModal isOpen={ openLogin } openModal={ setOpenLogin }>
          { openLogin && <LoginRegister /> }
        </ContentModal>
      </Suspense>
    </div>
  );
}

export default MenuUser;
