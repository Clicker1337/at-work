import React from 'react';
import './Input.scss';
import classNames from 'classnames';
import _uniqueId from 'lodash-es/uniqueId';
import Close from '../../../icons/Solid_Interface_Cross.svg?react';

interface InputProps {
    label: string,
    value: string,
    onChange: (name: string, value: string) => void,
    attribute?: string,
}

export default function Input(props: InputProps) {
    const inputId = _uniqueId('input');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value, props.label);
    };

    const handleClear = () => {
        props.onChange('', props.label);
    };

    return (
        <div
            className={classNames('input')}
        >
            <label
                htmlFor={inputId}
                className={classNames('input__label')}
            >
                {props.label}
            </label>
            <input
                type="text"
                value={props.value}
                onChange={handleChange}
                id={inputId}
                name={props.attribute!}
                required
            />
            <button
                className={classNames('input__clear-button')}
                aria-label='close'
                onClick={handleClear}
                type="button"
            >
                <Close />
            </button>
        </div>
    );
}
