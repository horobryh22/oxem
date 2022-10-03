import classes from './CalculatorList.module.scss';
import React, {useState} from 'react';
import {Calculator} from 'components';
import {classNames} from 'helpers';


export const CalculatorList = () => {

    const [price, setPrice] = useState([3300000]);
    const [percent, setPercent] = useState([13]);
    const [term, setTerm] = useState([60]);

    return (
        <div className={classNames(classes.calculatorList)}>
            <Calculator
                isInitial={false}
                label="Стоимость автомобиля"
                value={price}
                minValue={1000000}
                maxValue={6000000}
                setValue={setPrice}
            />
            <Calculator
                isInitial={true}
                price={price[0]}
                label="Первоначальный взнос"
                value={percent}
                minValue={10}
                maxValue={60}
                setValue={setPercent}
            />
            <Calculator
                isInitial={false}
                label="Срок лизинга"
                value={term}
                minValue={1}
                maxValue={60}
                setValue={setTerm}
            />
        </div>
    );
};