import React, { memo, useEffect } from 'react';
import { api2 } from '../../service/api';
import style from './style.module.scss';

interface Props {
  value: number;
  exectFunction: Function;
}

declare global {
  interface Window {
    paymentController: any
  }
}

// reference https://github.com/s4mukka/react-sdk-mercadopago/blob/master/src/v2.ts

function Addcard({ value, exectFunction }: Props) {
  useEffect(() => {
    async function createFrom() {
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
          onSubmit: async (cardFormData: Object) => {
            exectFunction!((c: any) => ({ ...c, ...cardFormData }));
            await api2.post('/teste', cardFormData);
          },
        },
      };

      window.paymentController = await bricksBuilder
        .create('cardPayment', 'form_card', settings);
    }

    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    document.body.appendChild(script);
    script.addEventListener('load', createFrom);

    return () => {
      const iframe = document.body.querySelector('iframe[src*="mercadolibre"]');
      if (iframe) {
        document.body.removeChild(iframe);
      }

      script.removeEventListener('load', createFrom);
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

export default memo(Addcard);
