import React from 'react';
import './styles/index.scss';
import {classNames} from 'helpers';
import {CalculatorList} from 'components';

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