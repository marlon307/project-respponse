import React from 'react';
import style from './CardAddress/style.module.scss';
import { CardAdderess } from '.';

function Address() {
  return (
    <>
      <div className={ style.address }>
        <CardAdderess
          name="Name Teste"
          road="Fernando de noronha"
          number="123"
          city="Ipatinga"
          uf="MG"
          zipcode="12345-67"
          district="Alterosas"
          removable
        />
      </div>
      <div className={ style.address }>
        <CardAdderess
          name="Name Teste"
          road="Fernando de noronha"
          number="123"
          city="Ipatinga"
          uf="MG"
          zipcode="12345-67"
          district="Alterosas"
          removable
        />
      </div>
    </>
  );
}

export default Address;
