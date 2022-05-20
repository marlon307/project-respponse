import React, { forwardRef } from 'react';

export type TObjProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  ariaLabel: string;
  onClick?: React.ReactEventHandler;
};

const CustomLink = forwardRef(({
  children, className, href, ariaLabel, onClick,
}: TObjProps, ref: any) => (
  <a
    className={ className }
    href={ href }
    ref={ ref }
    onClick={ onClick }
    aria-label={ ariaLabel }
  >
    { children }
  </a>
));

CustomLink.defaultProps = {
  href: undefined,
  className: undefined,
  onClick: undefined,
};

export default CustomLink;
