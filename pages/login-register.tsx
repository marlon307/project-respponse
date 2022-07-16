import React, { useState } from 'react';
import Svg from '../assets/Svg';
import BtnIco from '../components/Buttons/BtnIco';
import { Input } from '../components/ComponentsForm';
import HeadSEO from '../components/Head/HeadSEO';
import { api2 } from '../service/api';
import style from '../Sass/style.module.scss';
import useUser, { loginUser } from '../hooks/useUser';

function Login() {
  const validEmail = new RegExp(`^${process.env.VALIDATION_EMAIL!}$`);
  const validPsw = new RegExp(`^${process.env.VALIDATION_PSW!}$`, 'gm');
  const { mutate/* , isLoading */ } = useUser();
  const [sectionTab, setSectionTab] = useState(0);
  const [isValidLogin, setisValidLogin] = useState(false);
  const [isValidRegister, setisValidRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistred, setisRegistered] = useState<string | null>(null);
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
    setisValidLogin(false);
  };

  const clickLogin = async () => {
    const { lemail, lpsw } = stateLogin;

    if (validEmail.test(lemail) && validPsw.test(lpsw) && isLoading === false) {
      setIsLoading(true);
      await loginUser(lemail, lpsw);
      mutate();
    }
    setIsLoading(false);
  };

  // Function Register
  const actionRegister = (target: { name: any; value: any; }) => {
    const { name, value } = target;
    setStateRegister((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const clickRegister = async () => {
    const { remail, rname, rpsw } = stateRegister;

    if (validEmail.test(remail) && validPsw.test(rpsw) && isLoading === false) {
      const { data } = await api2.post('/createuser', {
        email: remail,
        password: rpsw,
        name: rname,
      }).catch(({ response }) => response);

      if (data.status === 201) {
        setisRegistered(remail);
      } else {
        setisValidRegister(true);
      }
    }
  };

  // useEffect(() => {
  //   if (router.asPath === '/login-register' && reduxUser.logged) {
  //     router.push('/');
  //   }
  // }, [reduxUser.logged, router]);

  return (
    <>
      <HeadSEO
        title={ sectionTab === 0 ? 'Login' : 'Registrar' }
        description={ `${sectionTab ? 'Faça seu login na' : 'Registre-se na'} respponse loja de roupas e acessórios para o dia a dia, tudo de melhor qualidade para você.` }
      />
      <section className={ style.contlogin }>
        <div className={ style.logo }>
          <Svg icoName="logo" />
        </div>
        <div className={ style.sectiontab }>
          <button
            className={ style.tablog }
            aria-label="Login"
            aria-hidden={ !(sectionTab === 0) }
            type="button"
            onClick={ () => setSectionTab(0) }
          >
            <h1>Entrar</h1>
          </button>
          <button
            className={ style.tablog }
            aria-label="Registre-se"
            aria-hidden={ !(sectionTab === 1) }
            type="button"
            onClick={ () => setSectionTab(1) }
          >
            <h1>Registre-se</h1>
          </button>
        </div>
        <form className={ style.tab } aria-hidden={ !(sectionTab === 0) }>
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
              disabled={ isLoading }
              isValid={ isValidLogin }
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
              disabled={ isLoading }
              isValid={ isValidLogin }
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
        <form className={ style.tab } aria-hidden={ !(sectionTab === 1) }>
          { !isRegistred
            ? (
              <>
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
                    disabled={ isLoading }
                  />
                  <Input
                    id="remail"
                    type="email"
                    name="remail"
                    placeHolder="E-mail"
                    autoComplete="email"
                    inputValue={ actionRegister }
                    ivalue={ stateRegister.remail }
                    msgError={ isValidRegister ? 'E-mail já cadastrado!' : 'E-mail inválido!' }
                    disabled={ isLoading }
                    isValid={ isValidRegister }
                  />
                  <Input
                    id="rpsw"
                    type="password"
                    name="rpsw"
                    placeHolder="Senha"
                    inputValue={ actionRegister }
                    ivalue={ stateRegister.rpsw }
                    msgError="Deve conter pelo menos um número e uma letra maiúscula e minúscula e pelo menos 8 ou mais caracteres."
                    disabled={ isLoading }
                  />
                </div>
                <div className={ style.action }>
                  <BtnIco
                    textBtn="Criar Conta"
                    icoName="setRight"
                    action={ clickRegister }
                    actionLiberate={ isLoading }
                  />
                </div>
              </>
            ) : (
              <div className={ style.msgregister }>
                Registrado com sucesso.
                <span />
                <p>
                  Confirme sua conta atraves do email que enviamos para
                  { ' ' }
                  <b>{ isRegistred }</b>
                </p>
              </div>
            ) }
        </form>
      </section>
    </>
  );
}

export default Login;
