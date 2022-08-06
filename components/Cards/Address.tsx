import React from 'react';
import style from './CardAddress/style.module.scss';
import { CardAdderess } from '.';

function Address({ listAddress }: IListAddress) {
  return (
    <div className={ style.address }>
      { listAddress?.map(({
        id, name_delivery, number_home, city, uf, cep, road, district,
      }) => (
        <CardAdderess
          key={ id }
          name={ name_delivery }
          road={ road }
          number={ number_home }
          city={ city }
          uf={ uf }
          zipcode={ cep }
          district={ district }
          removable
        />
      )) }
    </div>
  );
}

export default Address;
