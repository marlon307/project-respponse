import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BtnIco from '../../components/Buttons/BtnIco';
import Input from '../../components/ComponentsForm/Input';
import HeadSEO from '../../components/Head/HeadSEO';
import style from '../../Sass/style.module.scss';
import { api2 } from '../../service/api';
import useLogin from '../../hooks/useLogin';

function Token() {
  const { loggedOut } = useLogin();
  const router = useRouter();
  const [newpsw, setPsw] = useState({
    psw_1: '',
    psw_2: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setisValid] = useState(false);
  const [contMsg, setMsg] = useState<string | null>(null);

  function changeEmail({ name, value }: HTMLInputElement) {
    setPsw((state) => ({ ...state, [name]: value }));
    setisValid(false);
  }

  async function sendmailReset() {
    const validPsw1 = new RegExp(`^${process.env.VALIDATION_PSW!}$`, 'gm');
    const validPsw2 = new RegExp(`^${process.env.VALIDATION_PSW!}$`, 'gm');

    if (validPsw1.test(newpsw.psw_2) && validPsw2.test(newpsw.psw_1)
      && newpsw.psw_1 === newpsw.psw_2) {
      setIsLoading(true);
      const formatToken: any = router.query.token;

      const { data } = await api2.patch('/reset_psw_user', {
        password: newpsw.psw_1,
      }, {
        headers: {
          authorization: `Bearer ${formatToken}`,
        },
      }).catch(({ response }) => response);

      if (data.status === 200) {
        setMsg(data.msg);
      } else {
        setIsLoading(false);
        setisValid(true);
      }

      setIsLoading(false);
    }
  }
  return (
    <>
      <HeadSEO
        title="Recupere sua senha"
        description="Insira seu e-mail para recuperar sua senha."
      />
      <section className={ style.contlogin }>
        <h1 className={ style.title_resetpsw }>Alterar senha</h1>
        <form>
          { contMsg === null ? (
            <>
              <Input
                id="psw1"
                type="password"
                name="psw_1"
                placeHolder="Digine uma nova senha."
                ivalue={ newpsw.psw_1 }
                inputValue={ changeEmail! }
                msgError={ isValid ? 'Token expirado!' : 'Senha inválida!' }
                isValid={ isValid }
              />
              <Input
                id="psw2"
                type="password"
                name="psw_2"
                placeHolder="Repita a senha digitada acima"
                ivalue={ newpsw.psw_2 }
                inputValue={ changeEmail! }
                msgError={ isValid ? 'Token expirado!' : 'Senha inválida!' }
                isValid={ isValid }
              />
            </>
          ) : (
            <div className={ style.msgregister }>
              <span />
              <p>{ contMsg }</p>
            </div>
          ) }
          <div className={ style.action }>
            { !loggedOut && (
              <Link href="/login-register">
                <a className="link">
                  Fazer Login
                </a>
              </Link>
            ) }
            { contMsg === null && (
              <BtnIco
                textBtn="Alterar senha"
                action={ sendmailReset! }
                actionLiberate={ isLoading }
              />
            ) }
          </div>
        </form>
      </section>
    </>
  );
}

export default Token;
