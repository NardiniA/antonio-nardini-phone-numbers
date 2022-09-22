import React from 'react';
import Link from 'next/link';

const Links = ({ links }) => {
  return (
      <ul className="s-footer__site-links">
        {links && links.map((link, index) => (
            <li key={link.text + "footer__link" + index}>
                <Link href={link.href} passHref>
                    <a className="smoothscroll" title="intro">
                        {link.text}
                    </a>
                </Link>
            </li>
        ))}
      </ul>
  );
}

export default Links