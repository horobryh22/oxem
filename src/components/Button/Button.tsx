import classes from './Button.module.scss';
import {classNames} from 'helpers';

interface ButtonProps {
    buttonName: string;
}

export const Button = (props: ButtonProps) => {

    const {buttonName} = props;

    return (
        <button className={classNames(classes.button)}>
            {buttonName}
        </button>
    );
};