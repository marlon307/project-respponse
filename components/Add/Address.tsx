import React, { useState, useCallback } from 'react';
import BtnAdd from '../Buttons/BtnAdd';
import { Input } from '../ComponentsForm';
import style from './style.module.scss';

function Address() {
  const [addressForm, setAddressForm] = useState({
    namedest: '',
    zipcode: '',
    street: '',
    district: '',
    number: '',
    state: '',
    city: '',
  });

  const hadleChange = useCallback((target: { name: string; value: string; }) => {
    const { name, value } = target;
    setAddressForm((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  return (
    <section className={ style.sectionadd }>
      <h1>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 15.4 11.05 21.5 11.35 21.76C11.5311 21.9149 11.7616 22.0001 12 22.0001C12.2384 22.0001 12.4689 21.9149 12.65 21.76C13 21.5 20 15.4 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2ZM12 19.65C9.87 17.65 6 13.34 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10C18 13.34 14.13 17.66 12 19.65ZM12 6C11.2089 6 10.4355 6.2346 9.77772 6.67412C9.11992 7.11365 8.60723 7.73836 8.30448 8.46927C8.00173 9.20017 7.92252 10.0044 8.07686 10.7804C8.2312 11.5563 8.61216 12.269 9.17157 12.8284C9.73098 13.3878 10.4437 13.7688 11.2196 13.9231C11.9956 14.0775 12.7998 13.9983 13.5307 13.6955C14.2616 13.3928 14.8864 12.8801 15.3259 12.2223C15.7654 11.5645 16 10.7911 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12C11.6044 12 11.2178 11.8827 10.8889 11.6629C10.56 11.4432 10.3036 11.1308 10.1522 10.7654C10.0009 10.3999 9.96126 9.99778 10.0384 9.60982C10.1156 9.22186 10.3061 8.86549 10.5858 8.58579C10.8655 8.30608 11.2219 8.1156 11.6098 8.03843C11.9978 7.96126 12.3999 8.00087 12.7654 8.15224C13.1308 8.30362 13.4432 8.55996 13.6629 8.88886C13.8827 9.21776 14 9.60444 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12Z" fill="#333333" />
        </svg>
        Adicionar endere??o
      </h1>
      <form>
        <div className="inputs">
          <Input
            id="namedest"
            type="text"
            name="namedest"
            placeHolder="Nome do destinat??rio"
            autoComplete="name"
            ivalue={ addressForm.namedest }
            inputValue={ hadleChange }
            msgError="Insira o Nome do destinat??rio."
          />
          <Input
            id="zipcode"
            type="text"
            name="zipcode"
            placeHolder="CEP"
            autoComplete="postal-code"
            ivalue={ addressForm.zipcode }
            inputValue={ hadleChange }
            msgError="Insira um CEP v??lido."
          />
          <Input
            id="street"
            type="text"
            name="street"
            placeHolder="Rua"
            autoComplete="street-address"
            ivalue={ addressForm.street }
            inputValue={ hadleChange }
            msgError="Insira o nome da Rua."
          />
          <Input
            id="district"
            type="text"
            name="district"
            placeHolder="Bairro"
            autoComplete="address-level3"
            ivalue={ addressForm.district }
            inputValue={ hadleChange }
            msgError="Insira o nome do Bairro."
          />
          <Input
            id="number"
            type="text"
            name="number"
            placeHolder="N??"
            ivalue={ addressForm.number }
            inputValue={ hadleChange }
            msgError="Insira o n??mero da Casa."
          />
          <Input
            id="state"
            type="text"
            name="state"
            placeHolder="UF"
            autoComplete="shipping address-level1"
            ivalue={ addressForm.state }
            inputValue={ hadleChange }
            msgError="Insira o Estado (UF)."
          />
          <Input
            id="city"
            type="text"
            name="city"
            placeHolder="Cidade"
            autoComplete="shipping shipping address-level2"
            ivalue={ addressForm.city }
            inputValue={ hadleChange }
            msgError="Insira a Cidade."
          />
        </div>
        <BtnAdd eventBtn={ () => { } } />
      </form>
    </section>
  );
}

export default Address;
