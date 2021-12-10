import React, { useState, useCallback } from 'react';
import Svg from '../../assets/Svg';
import { CardAdderess } from '../Cards';
import { Input, InputRadio } from '../ComponentsForm';
import style from './style.module.scss';

type PropsCheckout = {
  setOpenModal: Function
}

const Checkout = function Checkout({ setOpenModal }: PropsCheckout) {
  const [cupomText, setCupomText] = useState('');

  const hadleCupom = useCallback(({ value }) => {
    setCupomText(value);
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
          name="Name Teste"
          road="Fernando de noronha"
          number="123"
          city="Ipatinga"
          uf="MG"
          zipcode="12345-67"
          district="Alterosas"
        />
      </div>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <Svg icoName="truck" />
            Frete
          </h3>
        </div>
        <div className={ style.options }>
          <InputRadio name="Correios - R$ 25,00 - 2 dias uteis" id="correios" family="shippe" />
          <InputRadio name="Pac - R$ 10,00 - 5 dias uteis" id="pac" family="shippe" />
          <InputRadio name="Fedex - R$ 15,00 - 3 dias uteis" id="fedex" family="shippe" />
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
          <InputRadio name="Cartão de Credito" id="credit" family="payment" />
          <InputRadio name="PayPal" id="paypal" family="payment" />
          <InputRadio name="Pix" id="pix" family="payment" />
        </div>
      </div>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <Svg icoName="map" />
            Cupom de Desconto
          </h3>
        </div>
        <div className={ style.options }>
          <Input
            id="cupom"
            type="text"
            name="cupom"
            placeHolder=""
            ivalue={ cupomText }
            inputValue={ hadleCupom }
          />
          <span className={ style.descount }>Desconto - R$ 0,00</span>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
