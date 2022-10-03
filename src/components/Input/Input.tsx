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
        ...restProps
    } = props;

    return (
        <div className={classes.wrapper}>
            <label
                className={classNames(classes.label)}
                htmlFor="input"
            >
                {label}
            </label>
            <input
                {...restProps}
                value={value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                id="input"
                className={classNames(classes.input)}
            />
            {isInitial &&
                <div className={classNames(classes.percent)}>
                    {`${percent}%`}
                </div>
            }
        </div>
    );
};