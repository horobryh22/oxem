import {classNames} from 'shared';
import classes from './Calculator.module.scss';
import {Input, Range} from 'shared/ui';
import {ChangeEvent, useState, KeyboardEvent, useEffect} from 'react';

interface CalculatorProps {
    label: string;
    defaultValue: number;
    maxValue: number;
    minValue: number;
}

export const Calculator = (props: CalculatorProps) => {

    const {
        label,
        minValue,
        maxValue,
        defaultValue
    } = props;

    const [rangeValue, setRangeValue] = useState([defaultValue]);
    const [inputValue, setInputValue] = useState(String(defaultValue));

    console.log(inputValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = e.currentTarget.value.split(' ').join('');
        setInputValue(formattedValue);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const value = Number(inputValue);

        if (e.key === 'Enter' && value) {
            if (value <= maxValue && value >= minValue) setRangeValue([value]);
            if (value > maxValue) setRangeValue([maxValue]);
            if (value < minValue) setRangeValue([minValue]);
        }
    };

    useEffect(() => {
        setInputValue(String(rangeValue[0]));
    }, [rangeValue]);

    return (
        <div className={classNames(classes.calculator)}>
            <Input
                label={label}
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <Range
                maxValue={maxValue}
                minValue={minValue}
                value={rangeValue}
                setValue={setRangeValue}
            />
        </div>
    );
};