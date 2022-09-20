import React from 'react';
import { api2 } from '../../../service/api';
import style from './style.module.scss';

interface Props {
  identify: string
  token: string
}

function CardEditbag({ identify, token }: Props) {
  const updateItembag = async ({ target }: any) => {
    const split = identify.split('-');
    await api2.patch('/bag', {
      quantity: Number(target.value),
      option_id: Number(split[0]),
      size: split[1],
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).catch((data) => ({ data }));
  };

  return (
    <div className={ style.cardedit }>
      <div className={ style.cardedit_content }>
        <h2>Escolha a quantidade.</h2>
        <ul>
          { [...Array(30).keys()].map((value) => (
            <li key={ value }>
              <button
                type="button"
                value={ value + 1 }
                onClick={ updateItembag }
              >
                { value + 1 }
              </button>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
}

export default CardEditbag;
