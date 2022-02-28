import React from 'react';
import Help from '../components/Help';
import style from './style.module.scss';

function help() {
  return (
    <section className={ style.section }>
      <Help />
    </section>
  );
}

export default help;
