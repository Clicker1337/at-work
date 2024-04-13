import React from 'react';
import classNames from 'classnames';
import Logo from '../../icons/logo.svg?react';
import Like from '../../icons/Solid_Interface_Favorite.svg?react';
import Bell from '../../icons/Solid_Interface_Notification.svg?react';
import ATWORKIMAGE from '../../icons/ATWORKIMAGE.png';

import './Header.scss';

export default function Header() {
    return (
        <header className={classNames('Header')}>
            <div className={classNames('Header__wrapper')}>
                <div className={classNames('Header__logo')}>
                    <Logo />
                </div>
                <div className={classNames('Header__profile')}>
                    <Like />
                    <Bell />
                    <img
                        src={ATWORKIMAGE}
                        alt=''
                        className={classNames('Header__profile-pic')}
                    />
                    <span>Ivan1234</span>
                </div>
            </div>
        </header>
    );
}
