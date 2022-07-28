import React from 'react';
import Link from 'next/link';
import style from './style.module.scss';

type PBtnR = {
  path: string;
  titleBtn: string;
};

function BtnRedirect({ path, titleBtn }: PBtnR) {
  return (
    <Link href={ path }>
      <a className={ style.redirect }>
        <span>{ titleBtn }</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 11.6a1 1 0 0 0-.3-.3l-5-5a1 1 0 1 0-1.4 1.4l3.3 3.3H7a1 1 0 0 0 0 2h7.6l-3.3 3.3a1 1 0 1 0 1.4 1.4l5-5 .2-.3a1 1 0 0 0 0-.8Z" />
        </svg>
      </a>
    </Link>
  );
}

export default BtnRedirect;
