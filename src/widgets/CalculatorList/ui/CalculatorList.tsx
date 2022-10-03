import {classNames} from 'shared';
import classes from './CalculatorList.module.scss';
import {Calculator} from 'widgets/Calculator';
import React, {useState} from 'react';

interface CalculatorListProps {

}

export const CalculatorList = ({}: CalculatorListProps) => {

    const [carPrice, setCarPrice] = useState(3300000);

    return (
        <div className={classNames(classes.calculatorList)}>
            <Calculator
                label="Стоимость автомобиля"
                defaultValue={carPrice}
                minValue={1000000}
                maxValue={6000000}
            />
            {/*<Calculator label="Первоначальный взнос" defaultValue={0}/>*/}
            {/*<Calculator label="Срок лизинга" defaultValue={0}/>*/}
        </div>
    );
};