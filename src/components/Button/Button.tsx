import classes from './Button.module.scss';
import {classNames} from 'helpers';
import {ButtonHTMLAttributes} from 'react';
import Loader from 'assets/img/loader.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonName: string;
    isLoading: boolean;
}

export const Button = (props: ButtonProps) => {

    const {buttonName, isLoading, ...restProps} = props;

    return (
        <button {...restProps} className={classNames(classes.button)}>
            {isLoading ? <Loader/> : buttonName}
        </button>
    );
};