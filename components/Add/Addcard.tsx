import React from 'react';
// import type { FormEvent } from 'react';
import Script from 'next/script';
import style from './style.module.scss';
import { api2 } from '../../service/api';

function Addcard() {
  function rednderForm() {
    const mp = new MercadoPago(process.env.MP_P_KEY);
    const bricksBuilder = mp.bricks();

    async function createForm(formBuilder: any) {
      const settings = {
        initialization: {
          amount: 100, // valor total a ser pago
        },
        customization: {
          paymentMethods: {
            bankTransfer: ['pix'],
          },
          visual: {
            style: {
              theme: 'default', // | 'dark' | 'bootstrap' | 'flat'
              formPadding: '0',
            },
          },
        },
        callbacks: {
          onReady: () => {
            // callback chamado quando o Brick estiver pronto
          },
          onSubmit: (cardFormData: Object) => {
            //  callback chamado o usuário clicar no botão de submissão dos dados
            //  exemplo de envio dos dados coletados pelo Brick para seu servidor
            api2.post('/teste', cardFormData);
          },
          onError: (error: any) => {
            // eslint-disable-next-line no-console
            console.log(error);
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
        onLoad={ rednderForm! }
      />
    </section>
  );
}

export default Addcard;
