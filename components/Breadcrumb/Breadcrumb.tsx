import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import style from './style.module.scss';

function Breadcrumb() {
  const paths = usePathname()?.replace('/', '').split('/');

  return (
    <div className={ style.breadcrumb }>
      { paths?.map((url, index, arr) => (
        <Link
          key={ url }
          href={ `${arr[index - 1] ? `/${arr[index - 1]}` : ''}/${url}` }
        >
          { url }
        </Link>
      )) }
    </div>
  );
}

export default Breadcrumb;
