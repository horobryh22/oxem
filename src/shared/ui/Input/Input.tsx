import {classNames} from 'shared';
import classes from './Input.module.scss';
import {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
}

export const Input = (props: InputProps) => {
    const {
        className,
        label,
        value,
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
                value={value.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                id="input"
                className={classNames(classes.input)}
            />
        </div>
    );
};