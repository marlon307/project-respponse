import React from 'react';
import { useSwiper } from 'swiper/react';
import style from './style.module.scss';

export function SwiperButtonNext() {
  const swiper = useSwiper();
  return (
    <button
      className={ style.next }
      type="button"
      aria-label="Next"
      onClick={ () => swiper.slideNext() }
    />
  );
}

export function SwiperButtonPrev() {
  const swiper = useSwiper();
  return (
    <button
      className={ style.prev }
      type="button"
      aria-label="Prev"
      onClick={ () => swiper.slidePrev() }
    />
  );
}
