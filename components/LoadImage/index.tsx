import React from 'react';
import Image, { ImageProps } from 'next/image';
// https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.js

const shimmer = (w: string | number, h: string | number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ffffff00" offset="20%" />
      <stop stop-color="#ffffff80" offset="50%" />
      <stop stop-color="#ffffff00" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f1f1f1" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) => (typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str));

function LoadingImage({
  src, quality, alt, priority, loading, sizes, ...props
}: ImageProps) {
  return (
    <Image
      { ...props }
      quality={ quality }
      src={ src }
      alt={ alt }
      priority={ priority }
      loading={ loading }
      draggable="false"
      sizes={ sizes }
      placeholder="blur"
      blurDataURL={ `data:image/svg+xml;base64,${toBase64(shimmer('100%', '100%'))}` }
    />
  );
}

LoadingImage.defaultProps = {
  priority: false,
  loading: 'lazy',
  sizes: '100vw',
  quality: 70,
};

export default LoadingImage;
