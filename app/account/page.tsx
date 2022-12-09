import React from 'react';
// import type { GetServerSideProps } from 'next';

import HeadSEO from '../../components/Head/HeadSEO';
import AccountComponent from '../../components/UserCfg/AccountComponent';

function Account() {
  return (
    <>
      <HeadSEO title="Conta" description="Conta, pedidos, endereços, cartões e ajuda." />
      <AccountComponent />
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   if (req.cookies.u_token) {
//     return {
//       props: {
//         detail: 'Acesso Autorizado.',
//       },
//     };
//   }

//   return {
//     redirect: {
//       permanent: false,
//       destination: '/',
//     },
//   };
// };

export default Account;
