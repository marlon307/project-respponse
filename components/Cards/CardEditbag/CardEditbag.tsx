import React, { useState } from 'react';
import { api2 } from '../../../service/api';
import type { TypeAddBagInfos } from '../../../@types/bag';
import style from './style.module.scss';

interface Props {
  identify: TypeAddBagInfos;
  execeFunction: (params: any) => void
}

function CardEditbag({ props, identify, execeFunction }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateItembag = async ({ target }: any) => {
    setIsLoading(true);
    const res = await api2.patch('/bag', {
      quantity: Number(target.value),
      product_option: identify.opt_id,
      size: identify.size,
    }).catch((data) => ({ data }));

    if (res.data.status === 200) {
      const newProps = [...props];
      const index = props.indexOf(identify);
      newProps.splice(index, 1, { ...props[index], quantity: Number(target.value) });

      setIsLoading(false);
      execeFunction(newProps);
    }
    setIsLoading(false);
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
        { isLoading ? <div className="spinner" /> : null }
      </div>
    </div>
  );
}

export default CardEditbag;
