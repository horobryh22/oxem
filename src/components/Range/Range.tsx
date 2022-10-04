import * as React from 'react';
import {getTrackBackground, Range as ReactRange} from 'react-range';
import classes from './Range.module.scss';
import {classNames} from 'helpers';

interface RangeProps {
    maxValue: number;
    minValue: number;
    value: number[]
    setValue: (value: number[]) => void;
    disabled: boolean;
}

export const Range = (props: RangeProps) => {

    const {
        value,
        setValue,
        minValue,
        maxValue,
        disabled
    } = props;

    return (
        <ReactRange
            step={1}
            min={minValue}
            max={maxValue}
            values={value}
            disabled={disabled}
            onChange={(values) => setValue(values)}
            renderTrack={({props, children}) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{width: '90%'}}
                >
                    <div
                        ref={props.ref}
                        className={classNames(classes.track)}
                        style={{
                            opacity: disabled ? 0.5 : 1,
                            background: getTrackBackground({
                                values: value,
                                colors: ['#FF9514', '#E1E1E1'],
                                min: minValue,
                                max: maxValue
                            }),
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({props}) => (
                <div
                    {...props}
                    className={classNames(classes.thumb)}
                    style={{
                        ...props.style,
                    }}
                />
            )}
        />
    )
}