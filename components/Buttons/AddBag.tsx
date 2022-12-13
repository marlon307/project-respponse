'use client';

import React, { useState } from 'react';
import router from 'next/navigation';
import { useSWRConfig } from 'swr';
import { api2 } from '../../service/api';
// import useBag from '../../hooks/useBag';
import type { PBtnAddBag } from './types';
import type { TypeEditBagInfos } from '../../@types/bag';
import style from './style.module.scss';

function AddBag({ array, infoTitelAndType }: PBtnAddBag) {
  // const { props, mutate } = useBag(true);
  const { cache, mutate } = useSWRConfig();
  const [activeMsg, setActiveMsg] = useState(false);

  async function handleClick(redirect: boolean) {
    const sizeSelected = document.querySelector('[name="size"]:checked')?.id!;
    const colorSelected = document.querySelector('[name="color"]:checked')?.id!;
    if (sizeSelected && colorSelected) {
      let infoBag = cache.get('/bag');
      const option = array.find((crrOpt) => crrOpt.idc === Number(colorSelected.replace('color-', '')));

      // console.log('ok', infoBag, !infoBag || option.sizes[sizeSelected] <= 0);
      if (option.sizes[sizeSelected] <= 0) return;

      const index = infoBag.list_b?.findIndex(
        (objectindex: TypeEditBagInfos) => objectindex.opt_id === option.option_id
          && objectindex.size === sizeSelected,
      ) ?? -1;

      const { data } = await api2({
        method: index !== -1 ? 'PATCH' : 'POST',
        url: '/bag',
        data: {
          quantity: index !== -1 ? infoBag.list_b[index].quantity + 1 : 1,
          product_option: option.option_id,
          size: sizeSelected,
        },
      }).catch(({ response }) => ({
        data: {
          detail: response.data.detail,
          status: response.status,
        },
      }));

      if (data.status === 401) {
        router.redirect('/login/login-register');
      }

      if (redirect && (data.status === 201 || data.status === 200)) {
        if (index !== -1) {
          infoBag.list_b[index].quantity += 1;
          mutate('/bag', [...infoBag.list_b], false);
          // mutate({ ...props }, { revalidate: false });
        } else {
          infoBag = [...infoBag.list_b, {
            ...option,
            ...infoTitelAndType,
            category_name: infoTitelAndType.ctgName,
            product_option: option.option_id,
            size: sizeSelected,
            quantity: 1,
            url_image: option.images[0].urlImg,
          }];
        }
        mutate('/bag', infoBag, false);
        // mutate({ ...props }, { revalidate: false });
        router.redirect('/bag');
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
