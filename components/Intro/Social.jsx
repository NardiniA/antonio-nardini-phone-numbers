import Link from 'next/link';
import React from 'react';
import Icon from '../Icon';

const Social = ({ social }) => {
  return (
      <ul className="s-intro__social">
          {social && social.map((sm, index) => (
            <li key={sm.text + "social_intro" + index}>
                <Link href={sm.href} passHref>
                    <a>
                        <Icon name={sm.icon} type="logo" />
                        <span className="u-screen-reader-text">{sm.text}</span>
                    </a>
                </Link>
            </li>
          ))}
      </ul>
  );
}

export default Social;