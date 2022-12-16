import React, { useCallback } from 'react';
import Link from 'next/link';
import { mockPayment } from '../../service/mockCheckout';
import { CardAdderess } from '../Cards';
import { Input, InputRadio } from '../ComponentsForm';
import { Shipping } from '../../@types/bag';
// import { StateBagType } from '../../@types/bag';
import style from './style.module.scss';

interface Props {
  setOpenModal: Function;
  shipping: Array<Shipping>;
  addSelected: ITAddress;
  qunatityAdd: number;
  setShipping: (props: Shipping) => void
}

function Checkout({
  setOpenModal, addSelected, shipping, qunatityAdd, setShipping,
}: Props) {
  // const { shippingCompany } = infoCheckout.shipping;
  // const handleSipping = useCallback((idInput: number, value: number) => {
  //   // eslint-disable-next-line no-console
  //   console.log(idInput, value);
  // }, []);

  const handlePayment = useCallback((idName: string) => {
    // eslint-disable-next-line no-console
    console.log(idName);
  }, []);

  return (
    <section className={ style.checkout }>
      <h2>Checkout</h2>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8Zm0 17.6c-2.1-2-6-6.3-6-9.6a6 6 0 1 1 12 0c0 3.3-3.9 7.7-6 9.6ZM12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="#333" />
            </svg>
            Endereço de entrega
          </h3>
        </div>
        <Link
          href="/"
          aria-label="Clique aqui para escolher um endereço de entrega."
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal(qunatityAdd ? 'address' : 'addaddress');
          } }
        >
          <CardAdderess { ...addSelected } />
        </Link>
        <Link
          className="link"
          href="/"
          aria-label="Adicionar endereço"
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal('addaddress');
          } }
        >
          Adicionar endereço
        </Link>
      </div>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M1 12.5v5a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-12a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v2H6a3 3 0 0 0-2.4 1.2l-2.4 3.2v.1l-.1.2-.1.3Zm16 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-7-13a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v11h-.8a3 3 0 0 0-4.4 0H10v-11Zm-2 6H4l1.2-1.6a1 1 0 0 1 .8-.4h2v2Zm-3 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-2-5h5v2.8a3 3 0 0 0-4.2.2H3v-3Z" fill="#333" />
            </svg>
            Frete
          </h3>
        </div>
        <div className={ style.options }>
          { shipping?.map((object) => (
            <InputRadio
              key={ object.id }
              name={ `${object.name_carrier} - ${object.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })} - até ${object.toDate} dias úteis` }
              iId={ object.name_carrier }
              family="shipping"
              execFunction={ () => setShipping({
                id: object.id,
                price: object.price,
                name_carrier: '',
                toDate: 0,
              }) }
              iValue={ object.price }
            />
          )) }
        </div>
      </div>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M14 11h-4a2 2 0 1 1 0-4h5a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2V3a1 1 0 0 0-2 0v2h-1a4 4 0 0 0 0 8h4a2 2 0 0 1 0 4H9a1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3h2v2a1 1 0 0 0 2 0v-2h1a4 4 0 1 0 0-8Z" fill="#333" />
            </svg>
            Forma de pagamento
          </h3>
        </div>
        <div className={ style.options }>
          { mockPayment.map((object) => (
            <InputRadio
              key={ object.id }
              name={ object.name }
              iId={ object.name }
              family="payment"
              execFunction={ () => handlePayment('sd') }
            />
          )) }
        </div>
        <Link
          href="/"
          className="link"
          aria-label="Adicionar Cartão"
          onClick={ (event) => {
            event.preventDefault();
            setOpenModal('addcard');
          } }
        >
          Adicionar Cartão
        </Link>
      </div>
      <div className={ style.contcheckout }>
        <div className={ style.select }>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm13.6 4.7-8.4-8.4A1 1 0 0 0 12 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 .3.7l8.4 8.4a3 3 0 0 0 4.3 0L21 15a3 3 0 0 0 0-4.2Zm-1.4 2.8-6.2 6.2a1 1 0 0 1-1.4 0L4 11.6V4h7.6l8.1 8.1a1 1 0 0 1 0 1.4Z" fill="#333" />
            </svg>
            Cupom de Desconto
          </h3>
        </div>
        <div className={ style.options }>
          <div className={ style.cpm }>
            <Input
              id="cupom"
              type="text"
              name="cupom"
              placeholder="Insira aqui o cupom"
              msgError="Cupom inválido"
            />
          </div>
          <span className={ style.descount }>Desconto - R$ 0,00</span>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
