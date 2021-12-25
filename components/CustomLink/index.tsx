import React, { forwardRef } from 'react';

const CustomLink = forwardRef(({
  children, href, ariaLabel, onClick,
}: any, ref: any) => (
  <a
    href={ href }
    ref={ ref }
    onClick={ onClick }
    aria-label={ ariaLabel }
  >
    { children }
  </a>
));

export default CustomLink;
