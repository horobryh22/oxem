import React, {useState} from 'react';
import './styles/index.scss';
import {classNames} from 'helpers';
import {Button, Calculator, TotalSum} from 'components';
import {dataAPI} from 'api';
import {Data} from 'api/types';

interface Calc {
    isInitial: boolean;
    label: string;
    value: number[];
    minValue: number;
    maxValue: number;
    setValue: (value: number[]) => void;
    price?: number;
}

const App = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [price, setPrice] = useState([3300000]);
    const [percent, setPercent] = useState([13]);
    const [months, setMonths] = useState([60]);

    const initialPay = (price[0] * percent[0]) / 100;
    const monthPay =
        (price[0] - initialPay) * ((0.035 * Math.pow((1 + 0.035), months[0])) / (Math.pow((1 + 0.035), months[0]) - 1));
    const leasingSum = initialPay + (months[0] * monthPay);

    const calcs: Calc[] = [
        {
            isInitial: false,
            label: 'Стоимость автомобиля',
            value: price,
            minValue: 1000000,
            maxValue: 6000000,
            setValue: setPrice
        },
        {
            isInitial: true,
            label: 'Первоначальный взнос',
            value: percent,
            minValue: 10,
            maxValue: 60,
            setValue: setPercent,
            price: price[0],
        },
        {
            isInitial: false,
            label: 'Срок лизинга',
            value: months,
            minValue: 1,
            maxValue: 60,
            setValue: setMonths,
        },
    ]

    const sendData = async () => {
        try {
            setIsLoading(true);

            const data: Data = {
                initialPay: Number(initialPay.toFixed()),
                leasingSum: Number(leasingSum.toFixed()),
                months: months[0],
                percent: percent[0],
                price: price[0]
            }

            await dataAPI.sendData(data);
        } catch (e) {
            const err = e as Error;
            console.warn(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    const mappedCalcs = calcs.map(calc => {
        const {
            price,
            isInitial,
            setValue,
            minValue,
            maxValue,
            value,
            label
        } = calc;

        return (
            <Calculator
                key={minValue}
                isLoading={isLoading}
                isInitial={isInitial}
                label={label}
                value={value}
                minValue={minValue}
                maxValue={maxValue}
                setValue={setValue}
                price={price}
            />
        )
    })

    return (
        <div className={classNames('app')}>
            <h1 className={classNames('header')}>
                Рассчитайте стоимость автомобиля в лизинг
            </h1>
            <div className={classNames('calculator-list')}>
                {mappedCalcs}
            </div>
            <div className={classNames('bottom-part')}>
                <TotalSum label={'Сумма договора лизинга'} sum={leasingSum.toFixed()}/>
                <TotalSum label={'Ежемесячный платеж от'} sum={monthPay.toFixed()}/>
                <Button
                    buttonName={'Оставить заявку'}
                    onClick={sendData}
                    disabled={isLoading}
                    isLoading={isLoading}
                />
            </div>
        </div>
    );
};

export default App;