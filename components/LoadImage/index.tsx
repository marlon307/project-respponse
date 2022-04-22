import React, { useState, useCallback, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import style from './style.module.scss';

function LoadingImage({
  src, width, height, quality, alt, priority, loading, sizes, layout,
}: ImageProps) {
  const [isloading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  useEffect(() => () => finishLoading(), [finishLoading]);

  return (
    <>
      <Image
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
      { isloading
        && <span className={ style.statusloading } /> }
    </>
  );
}

LoadingImage.defaultProps = {
  priority: false,
  layout: 'responsive',
  loading: 'lazy',
};

export default LoadingImage;
