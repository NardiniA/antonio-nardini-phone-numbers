import React from 'react';
import Link from 'next/link';
import Icon from '../Icon';

const HeaderBtnIcon = ({ btn }) => (
    <Link href={btn.href} passHref>
        <a className="s-intro__content-video-btn">
            <Icon name={btn.icon} />
        </a>
    </Link>
);

export default HeaderBtnIcon;