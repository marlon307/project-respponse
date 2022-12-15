import React, { useState } from 'react';
import { TypeAddBagInfos } from '../../../@types/bag';
import useBag from '../../../hooks/useBag';
import { api2 } from '../../../service/api';
import style from './style.module.scss';

interface Props {
  identify: TypeAddBagInfos;
  execeFunction: (params: string) => void
}

function CardEditbag({ identify, execeFunction }: Props) {
  const { props, mutate } = useBag(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const updateItembag = async ({ target }: any) => {
    setIsLoading(true);
    const res = await api2.patch('/bag', {
      quantity: Number(target.value),
      product_option: identify.opt_id,
      size: identify.size,
    }).catch((data) => ({ data }));
    if (res.data.status === 200) {
      const newProps = [...props.list_b];
      const index = props.list_b.indexOf(identify);
      newProps.splice(index, 1, { ...props.list_b[index], quantity: Number(target.value) });
      mutate({ list_b: newProps }, {
        revalidate: false,
      });
      setIsLoading(false);
      execeFunction('');
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
