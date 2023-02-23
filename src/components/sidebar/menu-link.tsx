import { forwardRef } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

type MenuLinkProps = {
  href: string;
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
export const MenuLink = forwardRef<HTMLAnchorElement, MenuLinkProps>(
  ({ href, children, ...rest }, ref) => (
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  )
);
