// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import React from 'react';
import HeadSEO from '../../components/Head/HeadSEO';
import HelpComponent from '../../components/Help';
import style from '../../Sass/style.module.scss';

function Help() {
  // const { asPath } = useRouter();
  const pathname = usePathname();

  return (
    <>
      { pathname?.includes('/help') && <HeadSEO title="Ajuda" description="Ajuda e contato com o suporte para resolver seu problema." /> }
      <section className={ style.help }>
        <HelpComponent />
      </section>
    </>
  );
}

export default Help;
