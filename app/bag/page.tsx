import React from 'react';
import { cookies } from 'next/headers';
import { api2 } from '../../service/api';
import ContentBag from '../../components/Bag/CompBag';
import HeadSEO from '../../components/Head/HeadSEO';

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
  const { props } = await getInfoBag();

  return (
    <>
      <HeadSEO
        title="Sacola e Checkout"
        description="Finalize sua compra"
      />
      {/* <SWRConfig value={ { fallback } }> */ }
      <ContentBag props={ props.fallback['/bag'] } />
      {/* </SWRConfig> */ }
    </>
  );
}

export default Bag;
