import React, { useEffect } from 'react';
// import type { FormEvent } from 'react';
import BtnIco from '../Buttons/BtnIco';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';
import { api2 } from '../../service/api';

const styleInputs = {
  style: {
    placeholderColor: '#706bb3',
  },
};

function Addcard() {
  useEffect(() => {
    const mp = new MercadoPago(process.env.MP_P_KEY);
    const bricksBuilder = mp.bricks();

    const renderCardPaymentBrick = async (bricksBuilder) => {
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
          onSubmit: (cardFormData) => {
            //  callback chamado o usuário clicar no botão de submissão dos dados
            //  exemplo de envio dos dados coletados pelo Brick para seu servidor
            api2.post('/teste', cardFormData);
          },
          onError: (error) => {
            console.log(error);

            // callback chamado para todos os casos de erro do Brick
          },
        },
      };
      window.cardPaymentBrickController = await bricksBuilder.create('cardPayment', 'cardPaymentBrick_container', settings);
    };
    renderCardPaymentBrick(bricksBuilder);
  }, []);

  return (
    <section className={ style.sectionadd }>
      <div className={ style.content }>
        <div id="cardPaymentBrick_container" />
      </div>
    </section>
  );
}

export default Addcard;
