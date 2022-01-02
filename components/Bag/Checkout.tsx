import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Svg from '../../assets/Svg';
import { CardAdderess } from '../Cards';
import { Input, InputRadio } from '../ComponentsForm';
import style from './style.module.scss';
import mockShipping from '../../service/mockShipping';
import { actionSlecteShipping, actionSlectePayment } from '../../redux/redux-actions';

type PropsCheckout = {
  setOpenModal: Function
}
type TypUserObjAderes = {
  user: {
    checkout: {
      adderessSelected: {
        name: string;
        road: string;
        district: string;
        number: string;
        uf: string;
        city: string;
        zipcode: string;
      }
    }
  }
}

const Checkout = function Checkout({ setOpenModal }: PropsCheckout) {
  const {
    name, road, district, number, uf, city, zipcode,
  } = useSelector(({ user }: TypUserObjAderes) => user.checkout.adderessSelected);
  const dipatch = useDispatch();

  const [cupomText, setCupomText] = useState('');

  const hadleCupom = useCallback(({ value }) => {
    setCupomText(value);
  }, []);

  const handleSipping = useCallback((idName, nameCompany, value) => {
    dipatch(actionSlecteShipping({
      shippingCompany: idName + nameCompany,
      valueShipping: value,
    }));
  }, []);

  const handlePayment = useCallback((idName: string, nameCompany: string) => {
    dipatch(actionSlectePayment({
      formatPayment: nameCompany,
      value: '',
      division: '1x',
    }));
  }, []);

  return (
    <section className={ style.checkout }>
      <h2>Checkout</h2>
      <div className={ style.contcheckout }>
        <a
          href="/"
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
        </a>
        <CardAdderess
          name={ name }
          road={ road }
          number={ number }
          city={ city }
          uf={ uf }
          zipcode={ zipcode }
          district={ district }
        />
        <a
          href="/"
          className="link"
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal('addaddress');
          } }
        >
          Adicionar endereço
        </a>
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
          <InputRadio
            name="Cartão de Crédito"
            id="credit"
            family="payment"
            execFunction={ handlePayment }
          />
          <InputRadio
            name="PayPal"
            id="paypal"
            family="payment"
            execFunction={ handlePayment }
          />
          <InputRadio
            name="Pix"
            id="pix"
            family="payment"
            execFunction={ handlePayment }
          />
        </div>
        <a
          href="/"
          className="link"
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal('addcard');
          } }
        >
          Adicionar Cartão
        </a>
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
            />
          </div>
          <span className={ style.descount }>Desconto - R$ 0,00</span>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
