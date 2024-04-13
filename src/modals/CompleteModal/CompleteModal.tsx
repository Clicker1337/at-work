import React from 'react';
import './CompleteModal.scss';
import classNames from 'classnames';
import Cross from '../../icons/Solid_Interface_Cross.svg?react';

interface CompleteModalProps {
    title: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
        title?: string | undefined,
    }>,
    onChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export default function CompleteModal(props: CompleteModalProps) {
    const {icon: Icon, title, onChange} = props;
    return (
        <div className={classNames('modal')}>
            <div className={classNames('modal__window')}>
                <button
                    onClick={(e) => onChange(e)}
                    aria-label='close'
                >
                    <Cross />
                </button>
                <Icon />
                {title}
            </div>
        </div>
    );
}
