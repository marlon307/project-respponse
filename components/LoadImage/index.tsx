import React, { useState, useCallback, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import cx from 'classnames';
import style from './style.module.scss';

function LoadingImage({
  src, width, height, quality, alt, priority, loading, sizes,
}: ImageProps) {
  const [isloading, setIsLoading] = useState(false);

  const finishLoading = useCallback(() => setIsLoading(true), []);

  useEffect(() => () => finishLoading(), [finishLoading]);

  return (
    <div className={ style.contentimg }>
      <div className={ cx(style.image, {
        [style.loading]: !isloading,
      }) }
      >
        <Image
          quality={ quality }
          src={ src }
          alt={ alt }
          layout="responsive"
          width={ width }
          height={ height }
          placeholder="blur"
          onLoadingComplete={ finishLoading }
          priority={ priority }
          loading={ loading! }
          sizes={ sizes }
        />
      </div>
      { !isloading && (
        <div className={ style.statusloading } />
      ) }
    </div>
  );
}

export default LoadingImage;
