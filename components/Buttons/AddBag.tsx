import React, { useState, useEffect } from 'react';
import router from 'next/router';
import { api2 } from '../../service/api';
import type { PBtnAddBag } from './types';
import style from './style.module.scss';
import useBag from '../../hooks/useBag';
import { TypeEditBagInfos } from '../../@types/bag';

function AddBag({ option, sizeSelected, infoTitelAndType }: PBtnAddBag) {
  const { props, mutate } = useBag(true);

  const [buttonActive, setbutonActive] = useState(false);
  const [activeMsg, setActiveMsg] = useState(false);

  async function handleClick(redirect: boolean) {
    const index = props.listBag.findIndex(
      (objectindex: TypeEditBagInfos) => objectindex.product_option === option.option_id
        && objectindex.size === sizeSelected,
    );
    if (buttonActive && props.token) {
      const { data } = await api2({
        method: index !== -1 ? 'PATCH' : 'POST',
        url: '/bag',
        headers: {
          authorization: `Bearer ${props.token}`,
        },
        data: {
          quantity: index !== -1 ? props.listBag[index].quantity + 1 : 1,
          product_option: option.option_id,
          size: sizeSelected,
        },
      });

      if (redirect && (data.status === 201 || data.status === 200)) {
        if (index !== -1) {
          props.listBag[index].quantity += 1;
          mutate({ ...props }, { revalidate: false });
        } else {
          props.listBag = [...props.listBag, {
            ...option,
            ...infoTitelAndType,
            category_name: infoTitelAndType.ctgName,
            product_option: option.option_id,
            size: sizeSelected,
            quantity: 1,
            url_image: option.images[0].urlImg,
          }];
        }
        mutate({ ...props }, { revalidate: false });
        router.push('/bag');
      }
    } else {
      setActiveMsg(true);
    }
  }

  useEffect(() => {
    if (option.color === '' && sizeSelected === '') {
      setbutonActive(false);
    }
    if (option.color !== '' && sizeSelected !== '') {
      setbutonActive(true);
      setActiveMsg(false);
    }
  }, [activeMsg, option.color, sizeSelected]);

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
