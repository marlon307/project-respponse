import React, { useState, useCallback, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { mockShipping, mockPayment } from '../../service/mockCheckout';
import { CardAdderess } from '../Cards';
import { Input, InputRadio } from '../ComponentsForm';
import style from './style.module.scss';
import { SELECT_PAYMENT, SELECT_SHIPPING } from '../../redux/actions';
import CustomLink from '../CustomLink';

type PropsCheckout = {
  setOpenModal: Function
};

function Checkout({ setOpenModal }: PropsCheckout) {
  const dipatch = useAppDispatch();
  const { adderessSelected, shipping, formatPay } = useAppSelector(
    ({ bag }) => bag.checkout,
  );
  const {
    name, road, district, number, uf, city, zipcode,
  } = adderessSelected;
  const { shippingCompany } = shipping;
  const [cupomText, setCupomText] = useState('');

  const hadleCupom = useCallback(({ value }: any) => {
    setCupomText(value);
  }, []);

  const handleSipping = useCallback((idInput: string, value: number) => {
    dipatch(SELECT_SHIPPING({
      shippingCompany: idInput,
      valueShipping: value,
    }));
  }, []);

  const handlePayment = useCallback((idName: string) => {
    dipatch(SELECT_PAYMENT({
      formatPayment: idName,
      division: 1,
    }));
  }, []);

  return (
    <section className={ style.checkout }>
      <h2>Checkout</h2>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 15.4 11.05 21.5 11.35 21.76C11.5311 21.9149 11.7616 22.0001 12 22.0001C12.2384 22.0001 12.4689 21.9149 12.65 21.76C13 21.5 20 15.4 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2ZM12 19.65C9.87 17.65 6 13.34 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10C18 13.34 14.13 17.66 12 19.65ZM12 6C11.2089 6 10.4355 6.2346 9.77772 6.67412C9.11992 7.11365 8.60723 7.73836 8.30448 8.46927C8.00173 9.20017 7.92252 10.0044 8.07686 10.7804C8.2312 11.5563 8.61216 12.269 9.17157 12.8284C9.73098 13.3878 10.4437 13.7688 11.2196 13.9231C11.9956 14.0775 12.7998 13.9983 13.5307 13.6955C14.2616 13.3928 14.8864 12.8801 15.3259 12.2223C15.7654 11.5645 16 10.7911 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12C11.6044 12 11.2178 11.8827 10.8889 11.6629C10.56 11.4432 10.3036 11.1308 10.1522 10.7654C10.0009 10.3999 9.96126 9.99778 10.0384 9.60982C10.1156 9.22186 10.3061 8.86549 10.5858 8.58579C10.8655 8.30608 11.2219 8.1156 11.6098 8.03843C11.9978 7.96126 12.3999 8.00087 12.7654 8.15224C13.1308 8.30362 13.4432 8.55996 13.6629 8.88886C13.8827 9.21776 14 9.60444 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12Z" fill="#333333" />
            </svg>
            Endereço de entrega
          </h3>
        </div>
        <CustomLink
          href="/"
          ariaLabel="Clique aqui para escolher um endereço de entrega."
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal('address');
          } }
        >
          <CardAdderess
            name={ name }
            road={ road }
            number={ number }
            city={ city }
            uf={ uf }
            zipcode={ zipcode }
            district={ district }
          />
        </CustomLink>
        <CustomLink
          className="link"
          href="/"
          ariaLabel="Adicionar endereço"
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal('addaddress');
          } }
        >
          Adicionar endereço
        </CustomLink>
      </div>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12.5V17.5C1 17.7652 1.10536 18.0196 1.29289 18.2071C1.48043 18.3946 1.73478 18.5 2 18.5H3C3 19.2956 3.31607 20.0587 3.87868 20.6213C4.44129 21.1839 5.20435 21.5 6 21.5C6.79565 21.5 7.55871 21.1839 8.12132 20.6213C8.68393 20.0587 9 19.2956 9 18.5H15C15 19.2956 15.3161 20.0587 15.8787 20.6213C16.4413 21.1839 17.2044 21.5 18 21.5C18.7956 21.5 19.5587 21.1839 20.1213 20.6213C20.6839 20.0587 21 19.2956 21 18.5H22C22.2652 18.5 22.5196 18.3946 22.7071 18.2071C22.8946 18.0196 23 17.7652 23 17.5V5.5C23 4.70435 22.6839 3.94129 22.1213 3.37868C21.5587 2.81607 20.7956 2.5 20 2.5H11C10.2044 2.5 9.44129 2.81607 8.87868 3.37868C8.31607 3.94129 8 4.70435 8 5.5V7.5H6C5.53426 7.5 5.07493 7.60844 4.65836 7.81672C4.24179 8.025 3.87944 8.32741 3.6 8.7L1.2 11.9C1.17075 11.9435 1.14722 11.9905 1.13 12.04L1.07 12.15C1.02587 12.2615 1.00216 12.3801 1 12.5ZM17 18.5C17 18.3022 17.0586 18.1089 17.1685 17.9444C17.2784 17.78 17.4346 17.6518 17.6173 17.5761C17.8 17.5004 18.0011 17.4806 18.1951 17.5192C18.3891 17.5578 18.5673 17.653 18.7071 17.7929C18.847 17.9327 18.9422 18.1109 18.9808 18.3049C19.0194 18.4989 18.9996 18.7 18.9239 18.8827C18.8482 19.0654 18.72 19.2216 18.5556 19.3315C18.3911 19.4414 18.1978 19.5 18 19.5C17.7348 19.5 17.4804 19.3946 17.2929 19.2071C17.1054 19.0196 17 18.7652 17 18.5ZM10 5.5C10 5.23478 10.1054 4.98043 10.2929 4.79289C10.4804 4.60536 10.7348 4.5 11 4.5H20C20.2652 4.5 20.5196 4.60536 20.7071 4.79289C20.8946 4.98043 21 5.23478 21 5.5V16.5H20.22C19.9388 16.1906 19.5961 15.9435 19.2138 15.7743C18.8315 15.6052 18.418 15.5178 18 15.5178C17.582 15.5178 17.1685 15.6052 16.7862 15.7743C16.4039 15.9435 16.0612 16.1906 15.78 16.5H10V5.5ZM8 11.5H4L5.2 9.9C5.29315 9.7758 5.41393 9.675 5.55279 9.60557C5.69164 9.53615 5.84475 9.5 6 9.5H8V11.5ZM5 18.5C5 18.3022 5.05865 18.1089 5.16853 17.9444C5.27841 17.78 5.43459 17.6518 5.61732 17.5761C5.80004 17.5004 6.00111 17.4806 6.19509 17.5192C6.38907 17.5578 6.56725 17.653 6.70711 17.7929C6.84696 17.9327 6.9422 18.1109 6.98079 18.3049C7.01937 18.4989 6.99957 18.7 6.92388 18.8827C6.84819 19.0654 6.72002 19.2216 6.55557 19.3315C6.39112 19.4414 6.19778 19.5 6 19.5C5.73478 19.5 5.48043 19.3946 5.29289 19.2071C5.10536 19.0196 5 18.7652 5 18.5ZM3 13.5H8V16.28C7.40983 15.7526 6.63513 15.4797 5.84469 15.5209C5.05425 15.5621 4.31212 15.914 3.78 16.5H3V13.5Z" fill="#333333" />
            </svg>
            Frete
          </h3>
        </div>
        <div className={ style.options }>
          { mockShipping.map((object) => (
            <InputRadio
              checked={ shippingCompany === object.name }
              key={ object.id }
              name={ `${object.name} - ${object.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })} - ${object.toDate}` }
              id={ object.name }
              family="shipping"
              execFunction={ handleSipping }
              value={ object.price }
            />
          )) }
        </div>
      </div>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 11H10C9.46957 11 8.96086 10.7893 8.58579 10.4142C8.21071 10.0391 8 9.53043 8 9C8 8.46957 8.21071 7.96086 8.58579 7.58579C8.96086 7.21071 9.46957 7 10 7H15C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8C16 8.26522 16.1054 8.51957 16.2929 8.70711C16.4804 8.89464 16.7348 9 17 9C17.2652 9 17.5196 8.89464 17.7071 8.70711C17.8946 8.51957 18 8.26522 18 8C18 7.20435 17.6839 6.44129 17.1213 5.87868C16.5587 5.31607 15.7956 5 15 5H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V5H10C8.93913 5 7.92172 5.42143 7.17157 6.17157C6.42143 6.92172 6 7.93913 6 9C6 10.0609 6.42143 11.0783 7.17157 11.8284C7.92172 12.5786 8.93913 13 10 13H14C14.5304 13 15.0391 13.2107 15.4142 13.5858C15.7893 13.9609 16 14.4696 16 15C16 15.5304 15.7893 16.0391 15.4142 16.4142C15.0391 16.7893 14.5304 17 14 17H9C8.73478 17 8.48043 16.8946 8.29289 16.7071C8.10536 16.5196 8 16.2652 8 16C8 15.7348 7.89464 15.4804 7.70711 15.2929C7.51957 15.1054 7.26522 15 7 15C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19H11V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V19H14C15.0609 19 16.0783 18.5786 16.8284 17.8284C17.5786 17.0783 18 16.0609 18 15C18 13.9391 17.5786 12.9217 16.8284 12.1716C16.0783 11.4214 15.0609 11 14 11Z" fill="#333333" />
            </svg>
            Forma de pagamento
          </h3>
        </div>
        <div className={ style.options }>
          { mockPayment.map((object) => (
            <InputRadio
              key={ object.id }
              checked={ formatPay.formatPayment === object.name }
              name={ object.name }
              id={ object.name }
              family="payment"
              execFunction={ handlePayment }
            />
          )) }
        </div>
        <CustomLink
          href="/"
          className="link"
          ariaLabel="Adicionar Cartão"
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal('addcard');
          } }
        >
          Adicionar Cartão
        </CustomLink>
      </div>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.50002 6.00002C7.20334 6.00002 6.91333 6.08799 6.66666 6.25281C6.41999 6.41763 6.22773 6.6519 6.1142 6.92599C6.00067 7.20008 5.97096 7.50168 6.02884 7.79265C6.08672 8.08362 6.22958 8.3509 6.43936 8.56068C6.64914 8.77046 6.91641 8.91332 7.20738 8.97119C7.49835 9.02907 7.79995 8.99937 8.07404 8.88584C8.34813 8.7723 8.5824 8.58005 8.74722 8.33337C8.91204 8.0867 9.00002 7.79669 9.00002 7.50002C9.00002 7.10219 8.84198 6.72066 8.56068 6.43936C8.27937 6.15805 7.89784 6.00002 7.50002 6.00002ZM21.12 10.71L12.71 2.29002C12.6166 2.19734 12.5058 2.12401 12.3839 2.07425C12.2621 2.02448 12.1316 1.99926 12 2.00002H3.00002C2.7348 2.00002 2.48045 2.10537 2.29291 2.29291C2.10537 2.48045 2.00002 2.7348 2.00002 3.00002V12C1.99926 12.1316 2.02448 12.2621 2.07425 12.3839C2.12401 12.5058 2.19734 12.6166 2.29002 12.71L10.71 21.12C11.2725 21.6818 12.035 21.9974 12.83 21.9974C13.625 21.9974 14.3875 21.6818 14.95 21.12L21.12 15C21.6818 14.4375 21.9974 13.675 21.9974 12.88C21.9974 12.085 21.6818 11.3225 21.12 10.76V10.71ZM19.71 13.53L13.53 19.7C13.3427 19.8863 13.0892 19.9908 12.825 19.9908C12.5608 19.9908 12.3074 19.8863 12.12 19.7L4.00002 11.59V4.00002H11.59L19.71 12.12C19.8027 12.2135 19.876 12.3243 19.9258 12.4461C19.9756 12.5679 20.0008 12.6984 20 12.83C19.9989 13.0924 19.8948 13.3438 19.71 13.53Z" fill="#333333" />
            </svg>
            Cupom de Desconto
          </h3>
        </div>
        <div className={ style.options }>
          <div className={ style.cpm }>
            <Input
              id="cupom"
              type="text"
              name="cupom"
              placeHolder="Insira aqui o cupom"
              ivalue={ cupomText }
              inputValue={ hadleCupom }
              msgError="Cupom inválido"
            />
          </div>
          <span className={ style.descount }>Desconto - R$ 0,00</span>
        </div>
      </div>
    </section>
  );
}

export default memo(Checkout);
