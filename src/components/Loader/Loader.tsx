import classes from './Loader.module.scss';
import {classNames} from 'helpers';

export const Loader = () => {
    return (
        <div className={classNames(classes.loader)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};