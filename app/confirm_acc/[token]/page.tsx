'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { api2 } from 'service/api';
import style from 'Sass/style.module.scss';

interface Props {
  params: {
    token: string
  }
}

function Token({ params }: Props) {
  const [contMsg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    async function confirmAcc() {
      if (params.token) {
        const { data } = await api2.patch('confirm_acc', {}, {
          headers: {
            token: `Bearer ${params.token}`,
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
  }, []);

  return (
    <section className={ style.contlogin }>
      <h1>{ contMsg || '...' }</h1>
      <div className={ style.msgregister }>
        { contMsg && <span /> }
      </div>
      <div className={ style.action }>
        <Link className="link" href="/login/login-register">
          Fazer Login
        </Link>
      </div>
    </section>
  );
}

export default Token;
