import React from 'react';
import HelpComponent from '../components/Help';
import style from '../Sass/style.module.scss';

function Help() {
  return (
    <section className={ style.help }>
      <HelpComponent />
    </section>
  );
}

export default Help;
