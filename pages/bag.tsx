import React from 'react';
import { CardAdderess, SmallCard } from '../components/Cards';
import style from './styles/styleBag.module.scss';
import { Input, InputRadio } from '../components/ComponentsForm';
import BarBuy from '../components/Bars/BarBuy';
import Svg from '../assets/Svg';

function bag() {
  function openOptions(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }

  return (
    <>
      <div className={ style.bag }>
        <section className={ style.list }>
          <h1 className={ style.title } title="Sacola">
            <Svg icoName="bag" />
            Sacola
          </h1>
          <ul>
            <li>
              <SmallCard />
            </li>
            <li>
              <SmallCard />
            </li>
            <li>
              <SmallCard />
            </li>
            <li>
              <SmallCard />
            </li>
            <li>
              <SmallCard />
            </li>
            <li>
              <SmallCard />
            </li>
            <li>
              <SmallCard />
            </li>
            <li>
              <SmallCard />
            </li>
          </ul>
        </section>
        <section className={ style.checkout }>
          <h2>Checkout</h2>
          <div className={ style.container }>
            <a href="/" className={ style.select } onClick={ openOptions }>
              <h3>
                <Svg icoName="map" />
                Endereço de entrega
              </h3>
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
          <div className={ style.container }>
            <a href="/" className={ style.select } onClick={ openOptions }>
              <h3>
                <Svg icoName="truck" />
                Frete
              </h3>
            </a>
            <div className={ style.options }>
              <InputRadio name="Correios - R$ 25,00 - 2 dias uteis" id="correios" family="shippe" />
              <InputRadio name="Pac - R$ 10,00 - 5 dias uteis" id="pac" family="shippe" />
              <InputRadio name="Fedex - R$ 15,00 - 3 dias uteis" id="fedex" family="shippe" />
            </div>
          </div>
          <div className={ style.container }>
            <a href="/" className={ style.select } onClick={ openOptions }>
              <h3>
                <Svg icoName="payment" />
                Forma de pagamento
              </h3>
            </a>
            <div className={ style.options }>
              <InputRadio name="Cartão de Credito" id="credit" family="payment" />
              <InputRadio name="PayPal" id="paypal" family="payment" />
              <InputRadio name="Pix" id="pix" family="payment" />
            </div>
          </div>
          <div className={ style.container }>
            <a href="/" className={ style.select } onClick={ openOptions }>
              <h3>
                <Svg icoName="map" />
                Cupom de Desconto
              </h3>
            </a>
            <div className={ style.options }>
              <Input id="cupom" type="text" name="cupom" placeHolder="" />
              <span className={ style.descount }>Desconto - R$ 0,00</span>
            </div>
          </div>
        </section>
      </div>
      <BarBuy />
    </>
  );
}

export default bag;
