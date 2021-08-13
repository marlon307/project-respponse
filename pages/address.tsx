import React from 'react';
import { CardAdderess } from '../components/Cards';
import styles from './styles/styleAccount.module.scss';

function address() {
  return (
    <div className={ styles.address }>
      <CardAdderess />
      <CardAdderess />
    </div>
  );
}

export default address;
