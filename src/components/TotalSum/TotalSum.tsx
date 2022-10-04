import classes from './TotalSum.module.scss';
import {classNames} from 'helpers';
import React from 'react';

interface TotalSumProps {
    label: string;
    sum: string;
}

export const TotalSum = (props: TotalSumProps) => {
    const {sum, label} = props;

    const formattedSum = sum.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    return (
        <div className={classNames(classes.totalSum)}>
            <h4 className={classNames(classes.label)}>{label}</h4>
            <h3 className={classNames(classes.subtitle)}>{formattedSum}</h3>
        </div>
    );
};