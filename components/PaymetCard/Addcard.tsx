import React, { memo, useEffect } from 'react';
import registerOrder from 'hooks/registerOrder';
import style from './style.module.scss';

declare global {
  interface Window {
    paymentController: any;
    MercadoPago: any;
  }
}

interface Props {
  value: number;
  propsOrder: {
    addresId: number
    shippingId: number
    method_pay: string
    price: number
  };
  onFinishPayment: Function;
  exectFunction: Function;
}

// reference https://github.com/s4mukka/react-sdk-mercadopago/blob/master/src/v2.ts

function Addcard({
  value, propsOrder, exectFunction, onFinishPayment,
}: Props) {
  useEffect(() => {
    async function createFrom() {
      const mp = new window.MercadoPago(process.env.MP_P_KEY);
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
          onSubmit: async (cardFormData: any) => {
            const data = await registerOrder(
              propsOrder.addresId,
              propsOrder.shippingId,
              cardFormData.payment_method_id,
              propsOrder.price,
              cardFormData,
            ).catch((err) => ({ data: err }));
            if (data.status === 200) {
              exectFunction!((c: any) => ({
                ...c,
                ...cardFormData,
              }));
              onFinishPayment({ number_order: data.order.number_order });
            }
          },
        },
      };

      window.paymentController = await bricksBuilder
        .create('cardPayment', 'form_card', settings);
    }

    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.async = true;
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
