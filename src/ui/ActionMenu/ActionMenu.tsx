import {useEffect, useRef, useState} from 'react';
import './ActionMenu.scss';
import classNames from 'classnames';
import Dots from '../../icons/Solid_Interface_Dots.svg?react';

interface ActionMenuProps {
    actions: string[],
    onActionClick: (option: string) => void,
}

export default function ActionMenu({actions, onActionClick}: ActionMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        onActionClick(option);
        setIsOpen(false);
    };

    return (
        <div
            className={classNames('action-menu')}
            ref={menuRef}
        >
            <button
                className={classNames('action-menu-toggle')}
                onClick={() => toggleMenu()}
                aria-label='stg'
            >
                <Dots className={classNames('action-menu-toggle__dots')} />
            </button>
            {isOpen && (
                <ul className={classNames('action-menu-options')}>
                    {actions.map((action, index) => (
                        <button
                            key={index}
                            className={classNames('action-menu-option')}
                            onClick={() => handleOptionClick(action)}
                        >
                            {action}
                        </button>
                    ))}
                </ul>
            )}
        </div>
    );
}
