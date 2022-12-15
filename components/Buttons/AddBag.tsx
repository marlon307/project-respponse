import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api2 } from '../../service/api';
import type { PBtnAddBag } from './types';
import style from './style.module.scss';

function AddBag({ array }: PBtnAddBag) {
  const router = useRouter();
  const [activeMsg, setActiveMsg] = useState(false);

  async function handleClick(redirectRoute: boolean) {
    const sizeSelected = document.querySelector('[name="size"]:checked')?.id!;
    const colorSelected = document.querySelector('[name="color"]:checked')?.id!;
    if (sizeSelected && colorSelected) {
      const option = array.find((crrOpt) => crrOpt.idc === Number(colorSelected.replace('color-', '')));

      // console.log('ok', infoBag, !infoBag || option.sizes[sizeSelected] <= 0);
      if (option.sizes[sizeSelected] <= 0) return;

      const { data } = await api2.post('/bag', {
        quantity: 1,
        product_option: option.option_id,
        size: sizeSelected,
      }).catch(({ response }) => ({
        data: {
          detail: response.data.detail,
          status: response.status,
        },
      }));

      if (data.status === 401) {
        router.push('/login/login-register');
      }

      if (redirectRoute && (data.status === 201 || data.status === 200)) {
        router.push('/bag');
      }
    } else {
      setActiveMsg(true);
    }
  }

  return (
    <div className={ style.contbtn }>
      <button
        className={ style.btn_t2 }
        type="button"
        aria-label="Adicionar a sacola e ir para checkout."
        title="Adicionar a sacola e ir para checkout."
        data-error={ activeMsg }
        onClick={ () => handleClick(true) }
      >
        <span>{ activeMsg ? 'Selecione cor e tamanho!' : 'Comprar Agora' }</span>
      </button>
      <button
        type="button"
        title="Adicionar a sacola."
        className={ style.btn_t3 }
        data-error={ activeMsg }
        aria-label="Adicionar a sacola."
        onClick={ () => handleClick(false) }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 7h-3V6a4 4 0 1 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1Zm-9-1a2 2 0 1 1 4 0v1h-4V6Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 1 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10Z" fill="#333" />
        </svg>
      </button>
    </div>
  );
}

export default AddBag;
