import React, { useState } from 'react';
import { api2 } from 'service/api';
import type { TypeAddBagInfos } from '../../../@types/bag';
import style from './style.module.scss';

interface Props {
  identify: TypeAddBagInfos;
  execeFunction: (props: any) => void
  props: TypeAddBagInfos[]
}

function CardEditbag({ props, identify, execeFunction }: Props) {
  const [isLoading, setIsLoading] = useState<string>('');
  // Acredito que vai economizar processamento

  const index = props
    .findIndex((prod) => identify.opt_id === prod.opt_id && identify.size === prod.size);

  const updateItembag = async ({ target }: any) => {
    if (Number(target.value) <= identify.max_quantity && identify.quantity
      !== Number(target.value)) {
      setIsLoading('loading');
      const res = await api2.patch('/bag', {
        quantity: Number(target.value),
        product_option: identify.opt_id,
        size: identify.size,
      }).catch((data) => ({ data }));

      if (res.data.status === 200) {
        props.splice(index, 1, {
          ...props[index],
          quantity: Number(target.value),
        });
        setIsLoading('sucess');
        execeFunction([...props]);
      } else {
        setIsLoading('err');
      }
    }
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
                disabled={ identify.max_quantity < value + 1 || isLoading === 'loading' || identify.quantity
                  === value + 1 }
              >
                { value + 1 }
              </button>
            </li>
          )) }
        </ul>
        <div className="bar_loading" data-loading={ isLoading } />
      </div>
    </div>
  );
}

export default CardEditbag;
