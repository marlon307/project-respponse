import Svg from 'assets/Svg';
import cx from 'classnames';
import Link from 'next/link';
import style from './style.module.scss';

type PBtnR = {
  path: string;
  titleBtn: string;
};

function BtnRedirect({ path, titleBtn }: PBtnR) {
  return (
    <Link href={ path }>
      <a className={ cx('button1', style.redirect) }>
        <span>{ titleBtn }</span>
        <Svg icoName="indication" />
      </a>
    </Link>
  );
}

export default BtnRedirect;
