import Image from 'next/image';
import React from 'react';
import ClipBoard from '../Buttons/ClipBoard';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

const qrCode = 'iVBORw0KGgoAAAANSUhEUgAABWQAAAVkAQAAAAB79iscAAAI1UlEQVR42u3dUa7bNhAFUO1A+9+ldqAiaFDbnDuU2wZFQx59POQ9W9Jh/i5mODzu3+i6DlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlraX689xuv88bfzrw/Ov7738bfXj9dTfjz4+Pmv19+Ge1/fO/+kHMOnw3tpaWlpaWlpaWlpaWnX157vke39IR+vHZ5eVppW9cH7+aN5XmbQ0tLS0tLS0tLS0tLuoh3SYbqrLOMqmTDFy0nGTKk0MWhpaWlpaWlpaWlpaTfVlirbXbSvX1+K4W/vHwz4u6yPlpaWlpaWlpaWlpaW9u3X8rjUTXmEpsmz1O/KjztUEGlpaWlpaWlpaWlpaXfWJvx7l2RtuEw1vWEt73kyLfcqzZr/rEeUlpaWlpaWlpaWlpb2d9e2U0r+2x//dqYKLS0tLS0tLS0tLS3tb6rN15Wrdm2AbFNkKt0NJb5nCy0tLS0tLS0tLS0t7draZvdaOySy7IZLq7rKl7+af3I+VPdoaWlpaWlpaWlpaWlX1KboV0eQlD1wR/h02O+W3lG3xBXyMNeElpaWlpaWlpaWlpZ2be1QbxtGi0y2qzW73NIMk3La2jkZTjlNkbS0tLS0tLS0tLS0tOtph1kiQ+BLZ6cNrZfDU1L4TFm0dF2mAElLS0tLS0tLS0tLS7uBNjVXpiJemQXZVOOG3JlzYs2nk1PeaGlpaWlpaWlpaWlpV9c+9lUOjZmTjDnfHDcs/Ox6MqcpkpaWlpaWlpaWlpaWdjXt0Gs5vCd75l8ZgmEjKz2ZTcakpaWlpaWlpaWlpaVdX3uVgl1CvT/kCtq0JS4t7fgcVXJ1j6elpaWlpaWlpaWlpd1He3/OHDnDr2dshmwGTF5hGVf49AjTTJ66LmlpaWlpaWlpaWlpaRfVDu2OryelWt2wB650ZzbQ8tCjHB9wx4uWlpaWlpaWlpaWlnZtbdm9Vu8qebKtxl1divzo2EyLTEGTlpaWlpaWlpaWlpZ2C22aIDIsI3+vXsOXcwXxCKdgX3n+CS0tLS0tLS0tLS0t7SbauwuGH1vYsjstqD0l4CzBdbIqWlpaWlpaWlpaWlrafbRXDndDW2RqlcyvqKdqJ0U5c/vuz2ejpaWlpaWlpaWlpaVdWZvDXX1Fqf3Vd+dZJ0ceF5lGmuSV0tLS0tLS0tLS0tLSbqBtU2Se9H/mlU7WfHZx9Q5Lux9SJC0tLS0tLS0tLS0t7VLap/7Luwzgfy2oHS1Spp40R2GXFHmXldLS0tLS0tLS0tLS0m6hzYW4uozyiqPEy5Isr8/dcFeHbz+lpaWlpaWlpaWlpaXdSltOVru/OgA7zfIv5cEvin11GbS0tLS0tLS0tLS0tOtr0zda1D0d93+W0t08pKa1DF2ctLS0tLS0tLS0tLS0q2vLeJBhV1pz2HV7WxpVMmnvrC2aZYQkLS0tLS0tLS0tLS3t6tojb0gre+CuUOK7p9P6P5Y2pMgv5vvT0tLS0tLS0tLS0tJuoR1KbWnT2/BpToJneUCp6T02eg5nA9DS0tLS0tLS0tLS0m6ivbuz05qj1Mr6Uoq8ulMC2uLhJK7S0tLS0tLS0tLS0tKurW06J5+mQt5hemTaEneHZbTdnjWp0tLS0tLS0tLS0tLSbqJtjsIedr6VjHmF7syhbjifSHJN7qClpaWlpaWlpaWlpd1COxhT02T+yuzE68l/wf25AW8In3UQJS0tLS0tLS0tLS0t7RbafEMdGTK0ReY5JE1hrw2f79nx6RRsWlpaWlpaWlpaWlraFbVnP7axj5cpJw6dk8O+uHal6QTtvrpHS0tLS0tLS0tLS0u7mrZ0RKb5IsMZa7VZM6XINGoyHddWiowXLS0tLS0tLS0tLS3tTtrUAtlukyu9ls2Q/yE7tuGzzZ3fnA1HS0tLS0tLS0tLS0u7hraNdO2etfSeUigceihrZ2cZh3KXYh8tLS0tLS0tLS0tLe0W2jxzZA64QzflHQb1p8MAmnJezpO0tLS0tLS0tLS0tLQbaNsoWUp86bC0uqB3xd3hmwbOL3tEaWlpaWlpaWlpaWlpF9OmKfy1h7JU6Npdbkc3BjJtoqtpM7yclpaWlpaWlpaWlpZ2ZW0uv125SzI9eJIsa9AcNtu1/6KlpaWlpaWlpaWlpd1Je5Q9a+WDWcwrs0nubkvcmTNrehEtLS0tLS0tLS0tLe1O2rb81lTtUl/luzFd7W21x/Nhqj8tLS0tLS0tLS0tLe1q2jKtv8mEOeHNS3dXt6p6x9/pEaWlpaWlpaWlpaWlpV1Km3a5pTpfOvE6T4CsoybfV3qUnJjCJy0tLS0tLS0tLS0t7Y7aYUZ/Sn2pAFhkdZGT4uHxd88goKWlpaWlpaWlpaWlXU975kmR+XjsYe7j4GmiZKn93eWUgMlFS0tLS0tLS0tLS0u7tjaV+HKFLhX2andmLufdQZayY/4voKWlpaWlpaWlpaWlXVk73FA6Is887j99OjcO0fPp7OublpaWlpaWlpaWlpZ2L+3xOS2k6b9Mp2UnytA+2e53O8L1zqClpaWlpaWlpaWlpd1Am66ySS3V/mo5r9yb4uWZC4rD86Zdl7S0tLS0tLS0tLS0tEtpn/JfGvdfa3958Mj5POGkadH8ZtYlLS0tLS0tLS0tLS3tKtqzA6S9bR/BcNjRVqqF7fFqtVr4dYqkpaWlpaWlpaWlpaVdUpsCZHncdRzfVwGPstVtfnh2GYJy0tLS0tLS0tLS0tLSbq39YpPae8w7hh95w1yLvyZdnLS0tLS0tLS0tLS0tBtrz9xXWUpyaVzkVaaetOGzbeWkpaWlpaWlpaWlpaXdR9t+d2iVbAeUlNOyU9dl21zZ1P5oaWlpaWlpaWlpaWk30TatkkX23d62lpyOvc6VwWnXJS0tLS0tLS0tLS0t7Wra//9FS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS/vLtH8Aoplwrk548BkAAAAASUVORK5CYII=';

function PixCard() {
  return (
    <div className={ style.pixcard }>
      <div className={ style.block }>
        <h3>Pague R$ 100,00 via Pix</h3>
        <span>Vencimento: 31 de dezembro às 17h.</span>
      </div>
      <div className={ style.block }>
        <h3>Para pagar, escolha uma destas opções:</h3>
        <span>Código QR</span>
        <figure>
          <Image
            src={ `data:image/png;base64,${qrCode}` }
            alt="QRcode PIX"
            fill
          />
        </figure>
      </div>
      <div className={ style.block }>
        <div className={ style.clipboard }>
          <Input
            text="Código de pagamento"
            defaultValue="00020126580014br.gov.bcb.00020126580014br.gov.bcb.00020126580014br.gov.bcb.00020126580014br.gov.bcb."
          />
          <ClipBoard text="00020126580014br.gov.bcb." />
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
