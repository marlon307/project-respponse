import React from 'react';
// import type { FormEvent } from 'react';
import Script from 'next/script';
import style from './style.module.scss';
import { api2 } from '../../service/api';

interface Props {
  value: GLfloat;
}

function Addcard({ value }: Props) {
  function rednderForm(price) {
    const mp = new MercadoPago(process.env.MP_P_KEY);
    const bricksBuilder = mp.bricks();

    async function createForm(formBuilder: any) {
      const settings = {
        initialization: {
          amount: price, // valor total a ser pago
        },
        customization: {
          visual: {
            style: {
              theme: 'default', // | 'dark' | 'bootstrap' | 'flat'
              formPadding: '0',
            },
          },
        },
        callbacks: {
          // callback chamado quando o Brick estiver pronto
          onReady: () => { },
          onError: (error: any) => {
            // eslint-disable-next-line no-console
            console.log(error);
          },
          onSubmit: (cardFormData: Object) => {
            //  callback chamado o usuário clicar no botão de submissão dos dados
            //  exemplo de envio dos dados coletados pelo Brick para seu servidor
            api2.post('/teste', cardFormData);
          },
        },
      };
      const formElement = await formBuilder.create('cardPayment', 'form_card', settings);
      window.cardPaymentBrickController = formElement;
    }
    createForm(bricksBuilder);
  }

  return (
    <section className={ style.sectionadd }>
      <div className={ style.content }>
        <div id="form_card" />
      </div>
      <Script
        src="https://sdk.mercadopago.com/js/v2"
        strategy="lazyOnload"
        onReady={ () => rednderForm(value) }
      />
    </section>
  );
}

export default Addcard;
