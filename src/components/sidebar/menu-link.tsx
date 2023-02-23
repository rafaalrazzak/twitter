import { forwardRef } from 'react';
import Link from 'next/link';
import type { ComponentPropsWithRef } from 'react';

type MenuLinkProps = ComponentPropsWithRef<'a'> & {
  href: string;
};

export const MenuLink = forwardRef<HTMLAnchorElement, MenuLinkProps>(
  function MenuLink({ href, children, ...rest }, ref) {
    return (
      ref && (
        <Link href={href} ref={ref} {...rest}>
          {children}
        </Link>
      )
    );
  }
);

MenuLink.displayName = 'MenuLink';
