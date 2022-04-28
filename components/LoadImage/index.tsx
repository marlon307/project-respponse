import React, { useState, useCallback, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import cx from 'classnames';
import style from './style.module.scss';

type TLoadImage = {
  src: ImageProps['src'];
  width: ImageProps['width'];
  height: ImageProps['height'];
  quality?: ImageProps['quality'];
  alt: ImageProps['alt'];
  priority?: ImageProps['priority'];
  loading?: ImageProps['loading'];
  sizes?: ImageProps['sizes'];
  layout?: ImageProps['layout'];
};

function LoadingImage({
  src, width, height, quality, alt, priority, loading, sizes, layout,
}: TLoadImage) {
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
      <span className={ cx(
        style.panelimg,
        { [style.load]: isloading },
      ) }
      />
    </>
  );
}

LoadingImage.defaultProps = {
  priority: false,
  layout: 'responsive',
  loading: 'lazy',
  sizes: undefined,
  quality: '70',
};

export default LoadingImage;
