import React, { useState, useCallback, useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Input from 'components/ComponentsForm/Input';
import style from './style.module.scss';
import BtnIco from 'components/Buttons/BtnIco';
import Svg from 'assets/Svg';
import { actionLogin } from 'redux/redux-actions';
import type { ReduxUser } from 'types/typesUserRedux';

const validEmail = new RegExp(process.env.VALIDATION_EMAIL!);
const validPsw = new RegExp(process.env.VALIDATION_PSW!);

function login() {
  const dispatch = useDispatch();
  const { logged } = useSelector(({ user }: ReduxUser) => user);
  const router = useRouter();
  const [sectionTab, setSectionTab] = useState(true);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [stateLogin, setStateLogin] = useState({
    lemail: '',
    lpsw: '',
  });
  const [stateRegister, setStateRegister] = useState({
    rname: '',
    remail: '',
    rpsw: '',
  });

  // Functions Login
  const actionUserLogin = useCallback((target) => {
    const { name, value } = target;
    setStateLogin((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const clickLogin = () => {
    const { lemail, lpsw } = stateLogin;
    if (validEmail.test(lemail) && validPsw.test(lpsw) && !loadingLogin) {
      dispatch(actionLogin());
      setLoadingLogin(true);
    }
  };

  // Function Register
  const actionRegister = useCallback((target) => {
    const { name, value } = target;
    setStateRegister((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  // Tabs Login
  function tabSectionLogin(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setSectionTab(true);
  }

  function tabSectionRegister(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setSectionTab(false);
  }

  useEffect(() => {
    if (router.asPath === '/login-register' && logged) {
      router.push('/');
    }
  }, [logged]);

  return (
    <section className={ style.contlogin }>
      <div className={ style.logo }>
        <Svg icoName="logo" />
      </div>
      <div className={ style.sectiontab }>
        <a
          href="/login-register"
          aria-label="Login"
          onClick={ tabSectionLogin }
          className={ cx(style.tablog, { [style.active]: sectionTab }) }
        >
          <h1>Entrar</h1>
        </a>
        <a
          href="/login-register"
          aria-label="Registre-se"
          onClick={ tabSectionRegister }
          className={ cx(style.tablog, { [style.active]: !sectionTab }) }
        >
          <h1>Registre-se</h1>
        </a>
      </div>
      <form className={ cx(style.tab, { [style.active]: sectionTab }) }>
        <div className="inputs">
          <Input
            id="lemail"
            type="email"
            name="lemail"
            autoComplete="email"
            ivalue={ stateLogin.lemail }
            inputValue={ actionUserLogin }
            placeHolder="E-mail"
            msgError="Email inválido!"
          />
          <Input
            id="lpsw"
            type="password"
            name="lpsw"
            autoComplete="current-password"
            ivalue={ stateLogin.lpsw }
            inputValue={ actionUserLogin }
            placeHolder="Senha"
            msgError="Senha invalida!"
          />
        </div>
        <div className={ style.action }>
          <label htmlFor="remember">
            <input id="remember" type="checkbox" />
            { ' ' }
            Lembrar meus dados.
          </label>
          <a
            href="/resetpsw"
            className="link"
            target="_blank"
            aria-label="Esqueceu a senha?"
          >
            Esqueceu a senha?
          </a>
        </div>
        <div className={ style.action }>
          <BtnIco
            textBtn="Entrar"
            icoName="singin"
            action={ clickLogin }
            actionLiberate={ loadingLogin }
          />
        </div>
      </form>
      <form className={ cx(style.tab, { [style.active]: !sectionTab }) }>
        <div className="inputs">
          <Input
            id="rname"
            type="name"
            name="rname"
            placeHolder="Nome Sobrenome"
            autoComplete="name"
            inputValue={ actionRegister }
            ivalue={ stateRegister.rname }
            msgError="Preencha Nome e Sobrenome"
          />
          <Input
            id="remail"
            type="email"
            name="remail"
            placeHolder="E-mail"
            autoComplete="email"
            inputValue={ actionRegister }
            ivalue={ stateRegister.remail }
            msgError="E-mail inválido!"
          />
          <Input
            id="rpsw"
            type="password"
            name="rpsw"
            placeHolder="Senha"
            inputValue={ actionRegister }
            ivalue={ stateRegister.rpsw }
            msgError="Deve conter pelo menos um número e uma letra maiúscula e minúscula e pelo menos 8 ou mais caracteres"
          />
        </div>
        <div className={ style.action }>
          <BtnIco
            textBtn="Criar Conta"
            icoName="setRight"
            action={ () => { } }
            actionLiberate={ false }
          />
        </div>
      </form>
    </section>
  );
}

export default login;
