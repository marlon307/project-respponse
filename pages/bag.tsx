import React from 'react';
import Image from 'next/image';
import { CardAdderess, SmallCard } from '../components/Cards';
import style from './styles/styleBag.module.scss';
import iconBag from '../assets/img/u_shopping-bag.svg';
import icoLoaction from '../assets/img/map-marker.svg';
import icoShip from '../assets/img/truck.svg';
import icoPay from '../assets/img/payment.svg';
import icoCupom from '../assets/img/u_tag-alt.svg';
import { InputRadio } from '../components/ComponentsForm';

function bag() {
  return (
    <div className={ style.bag }>
      <section className={ style.list }>
        <h2 className={ style.title } title="Sacola">
          <Image src={ iconBag } />
          Sacola
        </h2>
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
        </ul>
      </section>
      <section className={ style.checkout }>
        <h2>Checkout</h2>
        <div className={ style.container }>
          <a href="/" className={ style.select }>
            <h3>
              <Image src={ icoLoaction } />
              Endereço de entrega
            </h3>
          </a>
          <div>
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
        </div>
        <div className={ style.container }>
          <a href="/" className={ style.select }>
            <h3>
              <Image src={ icoShip } />
              Frete
            </h3>
          </a>
          <div>
            <InputRadio name="Correios Pac - R$ 25,00 - 2 dias uteis" id="correios" family="shippe" />
            <InputRadio name="Pac - R$ 10,00 5 - dias uteis" id="pac" family="shippe" />
            <InputRadio name="Fedex - R$ 15,00 - 3 dias uteis" id="fedex" family="shippe" />
          </div>
        </div>
        <div className={ style.container }>
          <a href="/" className={ style.select }>
            <h3>
              <Image src={ icoPay } />
              Forma de pagamento
            </h3>
          </a>
        </div>
        <div className={ style.container }>
          <a href="/" className={ style.select }>
            <h3>
              <Image src={ icoCupom } />
              Cupom de Desconto
            </h3>
          </a>
        </div>
        <div className={ style.sume }>
          <span>Valores</span>
        </div>
      </section>
    </div>
  );
}

export default bag;
