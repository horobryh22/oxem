import classes from './Calculator.module.scss';
import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {Input, Range} from 'components';
import {classNames} from 'helpers';

interface CalculatorProps {
    label: string;
    value: number[];
    setValue: (value: number[]) => void;
    maxValue: number;
    minValue: number;
    isInitial: boolean;
    price?: number;
    isLoading: boolean;
}

export const Calculator = (props: CalculatorProps) => {

    const {
        price,
        isInitial,
        setValue,
        label,
        minValue,
        maxValue,
        value,
        isLoading
    } = props;

    const [inputValue, setInputValue] = useState(String(value[0]));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const formattedValue = e.currentTarget.value.split(' ').join('');
        setInputValue(formattedValue);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const value = Number(inputValue);

        if (e.key === 'Enter' && value) {
            if (value <= maxValue && value >= minValue) setValue([value]);
            if (value > maxValue) setValue([maxValue]);
            if (value < minValue) setValue([minValue]);
        }

    };

    useEffect(() => {
        const newValue = isInitial ? (price * value[0]) / 100 : value[0];
        setInputValue(String(newValue.toFixed()));
    }, [value, price]);

    return (
        <div className={classNames(classes.calculator)}>
            <Input
                readOnly={isInitial}
                disabled={isLoading}
                percent={isInitial ? value[0] : null}
                isInitial={isInitial}
                label={label}
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <Range
                disabled={isLoading}
                maxValue={maxValue}
                minValue={minValue}
                value={value}
                setValue={setValue}
            />
        </div>
    );
};