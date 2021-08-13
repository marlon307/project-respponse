import React from 'react';
import { CardAdderess } from '../components/Cards';
import styles from './styles/styleAccount.module.scss';

function address() {
  return (
    <section className={ styles.address }>
      <button type="button">Adicionar local de entrega</button>
      <div className={ styles.addressoptions }>
        <CardAdderess
          name="Name Teste"
          road="Fernando de noronha"
          number="123"
          city="Ipatinga"
          uf="MG"
          zipcode="12345-67"
          district="Alterosas"
        />
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
    </section>
  );
}

export default address;
