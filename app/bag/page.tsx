import React from 'react';
import { cookies } from 'next/headers';
import { api2 } from 'service/api';
import ContentBag from 'components/Bag/CompBag';

async function getInfoBag() {
  const token = cookies().get('u_token')?.value;

  const { data } = await api2.get('/bag', {
    headers: {
      cache: 'no-store',
      authorization: `Bearer ${token}`,
    },
  }).catch((err) => ({ data: err }));

  return {
    token,
    infobag: data.infobag,
  };
}

async function Bag() {
  const { infobag } = await getInfoBag();

  return (
    <>
      {/* <SWRConfig value={ { fallback } }> */ }
      <ContentBag props={ infobag } />
      {/* <script src="https://www.mercadopago.com/v2/security.js" view="bag" /> */ }
      {/* </SWRConfig> */ }
    </>
  );
}

export default Bag;
