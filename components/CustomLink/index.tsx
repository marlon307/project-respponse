import React, { forwardRef } from 'react';

const CustomLink = forwardRef(({
  children, className, href, ariaLabel, onClick,
}: any, ref: any) => (
  <a
    href={ href }
    className={ className }
    ref={ ref }
    onClick={ onClick }
    aria-label={ ariaLabel }
  >
    { children }
  </a>
));

export default CustomLink;
