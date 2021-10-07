import React, { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import style from './style.module.scss';
import Loading from '../Loading/Loading';

type PLoadImg = {
  url: string | any
}

function LoadingImage({ url }: PLoadImg) {
  const [isloading, setIsoading] = useState(false);
  function finishLoading() {
    setIsoading(true);
  }

  return (
    <div className={ style.contentimg }>
      <div className={ cx(style.image, {
        [style.loading]: !isloading,
      }) }
      >
        <Image
          quality={ 90 }
          src={ url }
          alt="Title"
          layout="responsive"
          objectPosition="relative"
          onLoadingComplete={ finishLoading }
        />
      </div>
      { !isloading && (
        <div className={ style.statusloading }>
          <Loading />
        </div>
      ) }
    </div>
  );
}

export default LoadingImage;
