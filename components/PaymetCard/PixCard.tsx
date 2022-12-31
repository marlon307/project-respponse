import Image from 'next/image';
import React from 'react';
import ClipBoard from '../Buttons/ClipBoard';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

interface Props {
  infoPix: {
    date_of_expiration: Date;
    qr_code_base64: string;
    qr_code: string;
    transaction_amount: number;
  }
}
function PixCard({ infoPix }: Props) {
  const dateExp = new Date(infoPix.date_of_expiration).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    timeZone: 'UTC',
  });

  const dateHour = new Date(infoPix.date_of_expiration).toLocaleDateString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  });

  return (
    <div className={ style.pixcard }>
      <div className={ style.block }>
        <h3>
          Pague
          { ' ' }
          { infoPix.transaction_amount.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }) }
          { ' ' }
          via Pix
        </h3>
        <span>
          Vencimento:
          { ' ' }
          { dateExp }
          { ' ' }
          às
          { ' ' }
          { dateHour.split(' ')[1] }
        </span>
      </div>
      <div className={ style.block }>
        <h3>Para pagar, escolha uma destas opções:</h3>
        <span>Código QR</span>
        <figure>
          <Image
            src={ `data:image/png;base64,${infoPix.qr_code_base64}` }
            alt="QRcode PIX"
            fill
          />
        </figure>
      </div>
      <div className={ style.block }>
        <div className={ style.clipboard }>
          <Input
            text="Código de pagamento"
            defaultValue={ infoPix.qr_code }
          />
          <ClipBoard text={ infoPix.qr_code } />
        </div>
      </div>
      <div className={ style.block }>
        <h3>Como pagar?</h3>
        <span className={ style.row }>
          Entre no app ou site do seu banco e
          escolha a opção de pagamento via Pix.
        </span>
        <span className={ style.row }>
          Escaneie o código QR ou copie
          e cole o código de pagamento.
        </span>
        <span className={ style.row }>
          Pronto! O pagamento será creditado na hora e você
          receberá um e-mail de confirmação.
        </span>
      </div>
    </div>
  );
}

export default PixCard;
