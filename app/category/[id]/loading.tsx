import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';

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

export default function Loading() {
  return (
    <>
      { [...Array(14).keys()].map((id) => (
        <div key={ id } className={ style.productcard }>
          <figure>
            <Image
              src={ `data:image/svg+xml;base64,${toBase64(shimmer('300px', '300px'))}` }
              quality={ 85 }
              alt="Loading"
              fill
              sizes="(max-width: 360px) 152px, (max-width: 500px) 220px, 300px"
            />
          </figure>
          <div className={ style.infocont }>
            <div className={ style.info }>
              <div className={ style.primaryline }>
                <span data-ctg />
                <div className={ style.colors }>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className={ style.secondline }>
                <span data-title />
              </div>
              <div className={ style.price }>
                <span data-price />
              </div>
            </div>
          </div>
        </div>
      )) }
    </>
  );
}
