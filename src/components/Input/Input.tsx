import classes from './Input.module.scss';
import {InputHTMLAttributes} from 'react';
import {classNames} from 'helpers';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    isInitial: boolean;
    percent: null | number;
}

export const Input = (props: InputProps) => {

    const {
        className,
        label,
        value,
        isInitial,
        percent,
        disabled,
        ...restProps
    } = props;

    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    const letter = Number(value) < 61 ? `мес.` : 'Р';

    return (
        <div className={`${classes.wrapper} ${disabled && classes.disabled}`}>
            <label
                className={classNames(classes.label)}
                htmlFor="input"
            >
                {label}
            </label>
            <input
                {...restProps}
                disabled={disabled}
                value={isInitial ? `${formattedValue} Р` : formattedValue}
                id="input"
                className={classNames(classes.input)}
            />
            {isInitial
                ? <div className={classNames(classes.percent)}>
                    {`${percent}%`}
                </div>
                : <div className={classNames(classes.letter)}>
                    {letter}
                </div>
            }
        </div>
    );
};