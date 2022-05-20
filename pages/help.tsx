import React from 'react';
import HeadSEO from '../components/Head/HeadSEO';
import HelpComponent from '../components/Help';
import style from '../Sass/style.module.scss';

function Help() {
  return (
    <>
      <HeadSEO title="Ajuda" description="Ajuda e contato com o suporte para resolver seu problema." />
      <section className={ style.help }>
        <HelpComponent />
      </section>
    </>
  );
}

export default Help;
