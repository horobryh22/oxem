import React, {useState} from 'react';
import './styles/index.scss';
import {classNames} from 'helpers';
import {Button, Calculator, TotalSum} from 'components';


const App = () => {

    const [price, setPrice] = useState([3300000]);
    const [percent, setPercent] = useState([13]);
    const [months, setMonths] = useState([60]);

    const initialPay = (price[0] * percent[0]) / 100;
    const monthPay =
        (price[0] - initialPay) * ((0.035 * Math.pow((1 + 0.035), months[0])) / (Math.pow((1 + 0.035), months[0]) - 1));
    const leasingSum = initialPay + (months[0] * monthPay);

    return (
        <div className={classNames('app')}>
            <h1 className={classNames('header')}>
                Рассчитайте стоимость автомобиля в лизинг
            </h1>
            <div className={classNames('calculator-list')}>
                <Calculator
                    isInitial={false}
                    label="Стоимость автомобиля"
                    value={price}
                    minValue={1000000}
                    maxValue={6000000}
                    setValue={setPrice}
                />
                <Calculator
                    isInitial
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
                    value={months}
                    minValue={1}
                    maxValue={60}
                    setValue={setMonths}
                />
            </div>
            <TotalSum label={'Сумма договора лизинга'} sum={leasingSum.toFixed()}/>
            <TotalSum label={'Ежемесячный платеж от'} sum={monthPay.toFixed()}/>
            <Button buttonName={'Оставить заявку'}/>
        </div>
    );
};

export default App;