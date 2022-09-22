import React from 'react';
import Link from 'next/link';

const HeaderBtn = ({ btn }) => (
    <Link href={btn.href} passHref>
        <a className="btn btn--primary s-intro__content-btn smoothscroll">
            {btn.text}
        </a>
    </Link>
);

export default HeaderBtn;