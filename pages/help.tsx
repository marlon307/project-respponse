import React from 'react';
import Help from '../components/Help';
import style from '../Sass/style.module.scss';

function help() {
  return (
    <main className={ style.section }>
      <Help />
    </main>
  );
}

export default help;
