import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import HeadSEO from '../../components/Head/HeadSEO';
import { api2 } from '../../service/api';
import style from '../../Sass/style.module.scss';

function Token() {
  const { isReady, query } = useRouter();
  const [contMsg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    async function confirmAcc() {
      if (query.token) {
        const { data } = await api2.patch('confirm_acc', {}, {
          headers: {
            authorization: `Bearer ${query.token}`,
          },
        }).catch(({ response }) => {
          setMsg(response.data.msg);
          return { data: response.data };
        });

        if (data.status === 200) {
          setMsg('Conta confirmada com sucesso ; )');
        }
      }
    }
    confirmAcc();
  }, [isReady]);

  return (
    <>
      <HeadSEO
        title="Confimando conta!"
        description="Insira seu e-mail para recuperar sua senha."
      />
      <section className={ style.contlogin }>
        <h1>{ contMsg || '...' }</h1>
        <div className={ style.msgregister }>
          { contMsg && <span /> }
        </div>
        <div className={ style.action }>
          <Link className="link" href="/login-register">
            Fazer Login
          </Link>
        </div>
      </section>
    </>
  );
}

export default Token;
