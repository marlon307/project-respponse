import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useRouter } from 'next/router';
import Svg from '../assets/Svg';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { LOGIN_USER } from '../redux/actions';
import BtnIco from '../components/Buttons/BtnIco';
import style from '../Sass/style.module.scss';
import { api2 } from '../service/api';
import { Input } from '../components/ComponentsForm';
import HeadSEO from '../components/Head/HeadSEO';

const validEmail = new RegExp(`^${process.env.VALIDATION_EMAIL!}$`);
const validPsw = new RegExp(`^${process.env.VALIDATION_PSW!}$`, 'gm');

function Login() {
  const dispatch = useAppDispatch();
  const reduxUser = useAppSelector(({ user }) => user);
  const router = useRouter();
  const [sectionTab, setSectionTab] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
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
  const actionUserLogin = (target: { name: string; value: string; }) => {
    const { name, value } = target;

    setStateLogin((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const clickLogin = async () => {
    const { lemail, lpsw } = stateLogin;

    if (validEmail.test(lemail) && validPsw.test(lpsw) && isLoading === false) {
      setIsLoading(true);
      const { data } = await api2.post('/login_user', {
        email: lemail,
        password: lpsw,
      });

      const { user } = data;

      dispatch(LOGIN_USER({
        name: user.name,
        token: data.token,
        email: user.email,
        logged: true,
        user_id: user.id_user,
      }));
      setIsLoading(false);
    }
  };

  // Function Register
  const actionRegister = (target: { name: any; value: any; }) => {
    const { name, value } = target;
    setStateRegister((state) => ({
      ...state,
      [name]: value,
    }));
  };

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
    if (router.asPath === '/login-register' && reduxUser.logged) {
      router.push('/');
    }
  }, [reduxUser.logged, router]);

  return (
    <>
      <HeadSEO
        title={ sectionTab ? 'Login' : 'Registrar' }
        description={ `${sectionTab ? 'Faça seu login na' : 'Registre-se na'} respponse loja de roupas e acessórios para o dia a dia, tudo de melhor qualidade para você.` }
      />
      <section className={ style.contlogin }>
        <div className={ style.logo }>
          <Svg icoName="logo" />
        </div>
        <div className={ style.sectiontab }>
          <button
            type="button"
            aria-label="Login"
            onClick={ tabSectionLogin }
            className={ cx(style.tablog, { [style.active]: sectionTab }) }
          >
            <h1>Entrar</h1>
          </button>
          <button
            type="button"
            aria-label="Registre-se"
            onClick={ tabSectionRegister }
            className={ cx(style.tablog, { [style.active]: !sectionTab }) }
          >
            <h1>Registre-se</h1>
          </button>
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
              disabled={ isLoading || reduxUser.logged }
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
              disabled={ isLoading || reduxUser.logged }
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
              actionLiberate={ isLoading }
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
              disabled={ isLoading || reduxUser.logged }
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
              disabled={ isLoading || reduxUser.logged }
            />
            <Input
              id="rpsw"
              type="password"
              name="rpsw"
              placeHolder="Senha"
              inputValue={ actionRegister }
              ivalue={ stateRegister.rpsw }
              msgError="Deve conter pelo menos um número e uma letra maiúscula e minúscula e pelo menos 8 ou mais caracteres."
              disabled={ isLoading || reduxUser.logged }
            />
          </div>
          <div className={ style.action }>
            <BtnIco
              textBtn="Criar Conta"
              icoName="setRight"
              action={ () => { } }
              actionLiberate={ isLoading }
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
