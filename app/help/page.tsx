// import { useRouter } from 'next/router';
import React from 'react';
import HelpComponent from 'components/Help';
import style from 'Sass/style.module.scss';

function Page() {
  // const { asPath } = useRouter();

  return (
    <section className={ style.help }>
      <HelpComponent />
    </section>
  );
}

export default Page;
