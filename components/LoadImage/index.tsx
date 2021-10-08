import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import style from './style.module.scss';

export interface PLoadImg {
  url: string | any;
  width?: number;
  height?: number;
  quality?: number;
  alt: string;
}

function LoadingImage({
  url, width, height, quality, alt,
}: PLoadImg) {
  const [isloading, setIsLoading] = useState(false);

  const finishLoading = useCallback(() => setIsLoading(true), []);

  useEffect(() => () => finishLoading(), []);

  return (
    <div className={ style.contentimg }>
      <div className={ cx(style.image, {
        [style.loading]: !isloading,
      }) }
      >
        <Image
          quality={ quality }
          src={ url }
          alt={ alt }
          layout="responsive"
          width={ width }
          height={ height }
          onLoadingComplete={ finishLoading }
        />
      </div>
      { !isloading && (
        <div className={ style.statusloading } />
      ) }
    </div>
  );
}

export default LoadingImage;
