import React, { useState, useCallback, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { mockShipping, mockPayment } from '../../service/mockCheckout';
import { CardAdderess } from '../Cards';
import { Input, InputRadio } from '../ComponentsForm';
import Svg from '../../assets/Svg';
import style from './style.module.scss';

type PropsCheckout = {
  setOpenModal: Function
};

function Checkout({ setOpenModal }: PropsCheckout) {
  const { adderessSelected, shipping, formatPay } = useAppSelector(
    ({ bag }) => bag.checkout,
  );
  const {
    name, road, district, number, uf, city, zipcode,
  } = adderessSelected;
  const { shippingCompany } = shipping;

  // const dipatch = useAppDispatch();

  const [cupomText, setCupomText] = useState('');

  const hadleCupom = useCallback(({ value }) => {
    setCupomText(value);
  }, []);

  const handleSipping = useCallback((idInput, value) => {
    // dipatch(actionSlecteShipping({
    //   shippingCompany: idInput,
    //   valueShipping: value,
    // }));
  }, []);

  const handlePayment = useCallback((idName: string) => {
    // dipatch(actionSlectePayment({
    //   formatPayment: idName,
    //   division: '1x',
    // }));
  }, []);

  return (
    <section className={ style.checkout }>
      <h2>Checkout</h2>
      <div className={ style.contcheckout }>
        <button
          type="button"
          className={ style.select }
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal('address');
          } }
        >
          <h3>
            <Svg icoName="map" />
            Endereço de entrega
          </h3>
          <span />
        </button>
        <CardAdderess
          name={ name }
          road={ road }
          number={ number }
          city={ city }
          uf={ uf }
          zipcode={ zipcode }
          district={ district }
        />
        <button
          type="button"
          className="link"
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal('addaddress');
          } }
        >
          Adicionar endereço
        </button>
      </div>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <Svg icoName="truck" />
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
            <Svg icoName="payment" />
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
        <button
          type="button"
          className="link"
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal('addcard');
          } }
        >
          Adicionar Cartão
        </button>
      </div>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <Svg icoName="tag" />
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
