import React, { useEffect } from 'react';
// import type { FormEvent } from 'react';
import style from './style.module.scss';
import { api2 } from '../../service/api';

interface Props {
  value: number;
}

declare global {
  interface Window {
    paymentController: any
  }
}

// reference https://github.com/s4mukka/react-sdk-mercadopago/blob/master/src/v2.ts

function Addcard({ value }: Props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    document.body.appendChild(script);
    script.addEventListener('load', async () => {
      const mp = new MercadoPago(process.env.MP_P_KEY);
      const bricksBuilder = mp.bricks();

      const settings = {
        initialization: {
          amount: value, // valor total a ser pago
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
          onReady: () => { },
          onError: (error: any) => {
            // eslint-disable-next-line no-console
            console.log(error);
          },
          onSubmit: (cardFormData: Object) => {
            api2.post('/teste', cardFormData);
          },
        },
      };
      const formElement = await bricksBuilder.create('cardPayment', 'form_card', settings);
      window.paymentController = formElement;
    });
    console.log(12);

    return () => {
      const iframe = document.body.querySelector('iframe[src*="mercadolibre"]');

      if (iframe) {
        document.body.removeChild(iframe);
      }
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={ style.sectionadd }>
      <div className={ style.content }>
        <div id="form_card" />
      </div>
    </section>
  );
}

export default Addcard;
