import React from 'react';
import { CardAdderess } from '.';

function Address() {
  return (
    <>
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
    </>
  );
}

export default Address;
