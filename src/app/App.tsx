import React from 'react';
import './styles/index.scss';
import {classNames} from 'shared';
import {CalculatorList} from 'widgets/CalculatorList';

const App = () => {
    return (
        <div className={classNames('app')}>
            <h1 className={classNames('header')}>
                Рассчитайте стоимость автомобиля в лизинг
            </h1>
            <CalculatorList/>
        </div>
    );
};

export default App;