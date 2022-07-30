import React, {
  useState, useCallback, useEffect,
} from 'react';
import useUser from '../../hooks/useUser';
import BtnAdd from '../Buttons/BtnAdd';
import { InputRadio } from '../ComponentsForm';
import Input from '../ComponentsForm/Input';
import style from './style.module.scss';

type TStateUser = {
  name: string;
  email: string;
  date: string;
  doc: string;
  tel: string;
  cel: string;
  gen: string,
};

function CfgUser() {
  const { ifoUser, loading } = useUser();
  const [stateIfonUser, setStateIfoUser] = useState<TStateUser>({
    name: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    doc: '',
    tel: '',
    cel: '',
    gen: '',
  });

  const userCfgInfo = useCallback((target: HTMLInputElement) => {
    const {
      name, value, pattern, dataset,
    } = target;

    setStateIfoUser((state) => ({
      ...state,
      [name]: dataset?.format ? value.replace(new RegExp(pattern), dataset.format) : value,
    }));
  }, []);

  useEffect(() => {
    if (!loading) {
      setStateIfoUser({
        name: ifoUser?.name,
        email: ifoUser?.email,
        date: new Date(ifoUser?.birthday).toISOString().split('T')[0],
        doc: ifoUser?.cpf_cnpj?.replace(/^([\d]{3})\.*([\d]{3})\.*([\d]{3})-*([\d]{2})/, '$1.$2.$3-$4'),
        tel: ifoUser?.tel?.replace(/^([\d]{2})\.*([\d]{5})-*([\d]{4})/, '$1 $2-$3'),
        cel: ifoUser?.cel?.replace(/^([\d]{2})\.*([\d]{5})-*([\d]{4})/, '$1 $2-$3'),
        gen: ifoUser?.gender_id === null ? 0 : ifoUser?.gender_id,
      });
    }
  }, [loading]);

  return (
    <section className={ style.section }>
      <div className={ style.contaienrsection }>
        <div className="inputs">
          <h3>Informações básicas</h3>
          <form>
            <div className={ style.inp }>
              <Input
                id="name"
                type="name"
                name="name"
                placeHolder="Nome e Sobrenome"
                msgError="Preencha Nome e Sobrenome"
                autoComplete="name"
                ivalue={ stateIfonUser.name }
                inputValue={ userCfgInfo }
              />
              <Input
                id="email"
                type="email"
                name="email"
                placeHolder="E-mail"
                autoComplete="email"
                ivalue={ stateIfonUser.email }
                msgError="E-mail inválido"
                disabled
              />
              <a
                href="/resetpsw"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Trocar Senha
              </a>
            </div>
            <div className={ style.inp }>
              <Input
                id="date"
                type="date"
                name="date"
                placeHolder="Data"
                ivalue={ stateIfonUser.date }
                inputValue={ userCfgInfo }
                msgError="Selecione uma data"
              />
              <Input
                id="doc"
                type="doc"
                name="doc"
                placeHolder="CPF"
                ivalue={ stateIfonUser.doc }
                inputValue={ userCfgInfo }
                msgError="CPF inválido"
                max={ 11 }
                patt="^([\d]{3})\.*([\d]{3})\.*([\d]{3})-*([\d]{2})"
                format="$1.$2.$3-$4"
              />
            </div>
            <div className={ style.genere }>
              <h5>Sexo</h5>
              <div className={ style.inp }>
                <InputRadio
                  checked={ ifoUser?.gender_id === 1 }
                  iId="men"
                  name="Masculino"
                  family="grnere"
                  iValue={ 1 }
                  execFunction={ userCfgInfo }
                />
                <InputRadio
                  checked={ ifoUser?.gender_id === 2 }
                  iId="female"
                  name="Femenino"
                  family="grnere"
                  iValue={ 2 }
                  execFunction={ userCfgInfo }
                />
                <InputRadio
                  checked={ ifoUser?.gender_id === null }
                  iId="undefined"
                  name="Não informar"
                  family="grnere"
                  iValue={ 0 }
                  execFunction={ userCfgInfo }
                />
              </div>
            </div>
            <div className={ style.contact }>
              <h5>Contato</h5>
              <div className={ style.inp }>
                <Input
                  id="tel"
                  type="tel"
                  name="tel"
                  placeHolder="Telefone"
                  autoComplete="tel"
                  ivalue={ stateIfonUser.tel }
                  inputValue={ userCfgInfo }
                  msgError="Insira um telefone"
                  max={ 11 }
                  patt="^([\d]{2})\.*([\d]{5})-*([\d]{4})"
                  format="$1 $2-$3"
                />
                <Input
                  id="cel"
                  type="tel"
                  name="cel"
                  placeHolder="Celular"
                  autoComplete="tel"
                  ivalue={ stateIfonUser.cel }
                  inputValue={ userCfgInfo }
                  msgError="Insira um telefone"
                  max={ 11 }
                  patt="^([\d]{2})\.*([\d]{5})-*([\d]{4})"
                  format="$1 $2-$3"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <BtnAdd eventBtn={ () => { } } title="Salvar" />
    </section>
  );
}

export default CfgUser;
