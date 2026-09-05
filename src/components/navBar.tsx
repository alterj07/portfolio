'use client'
import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../css/navBar.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/performances', label: 'Performances' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="navBarContainer">
      <ul className="navBarList">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href} className="navBarItems">
            <Link href={href} className={pathname === href ? 'navBarLinkActive' : undefined}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
