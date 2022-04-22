import React, { useState, useCallback, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import cx from 'classnames';
import style from './style.module.scss';

function LoadingImage({
  src, width, height, quality, alt, priority, loading, sizes, layout,
}: ImageProps) {
  const [isloading, setIsLoading] = useState(true);

  const finishLoading = useCallback(() => setIsLoading(false), []);

  useEffect(() => () => finishLoading(), [finishLoading]);

  return (
    <Image
      className={ cx({
        [style.statusloading]: isloading,
      }) }
      quality={ quality }
      src={ src }
      alt={ alt }
      layout={ layout }
      width={ width }
      height={ height }
      placeholder="empty"
      onLoadingComplete={ finishLoading }
      priority={ priority }
      loading={ loading }
      sizes={ sizes }
    />
  );
}

LoadingImage.defaultProps = {
  priority: false,
  layout: 'responsive',
  loading: 'lazy',
};

export default LoadingImage;
