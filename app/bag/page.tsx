import React from 'react';
import { cookies } from 'next/headers';
// import { SWRConfig } from 'swr';
import { api2 } from '../../service/api';
import ContentBag from '../../components/Bag/CompBag';
import HeadSEO from '../../components/Head/HeadSEO';
// import type { TypeAddBagInfos } from '../../@types/bag';

// interface Props {
//   fallback: {
//     list_b: TypeAddBagInfos[];
//   }
// }

async function getInfoBag() {
  const token = cookies().get('u_token')?.value;
  const { data } = await api2.get('/bag', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).catch((err) => ({ data: err }));

  return {
    props: {
      fallback: {
        '/bag': {
          token,
          infobag: data.infobag,
        },
      },
    },
  };
}

async function Bag() {
  // console.log(cookies().get('u_token'));

  const { props } = await getInfoBag();

  return (
    <>
      <HeadSEO
        title="Sacola e Checkout"
        description="Finalize sua compra"
      />
      {/* <SWRConfig value={ { fallback } }> */ }
      <ContentBag fallback={ props.fallback } />
      {/* </SWRConfig> */ }
    </>
  );
}

export default Bag;

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   if (req.cookies.u_token) {
//     const { data } = await api2.get('/bag', {
//       headers: {
//         authorization: `Bearer ${req.cookies.u_token}`,
//       },
//     }).catch((err) => ({ data: err }));

//     return {
//       props: {
//         fallback: {
//           '/bag': {
//             token: req.cookies.u_token,
//             infobag: data.infobag,
//           },
//         },
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
