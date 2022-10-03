import * as React from 'react';
import {getTrackBackground, Range as ReactRange} from 'react-range';

interface RangeProps {
    maxValue: number;
    minValue: number;
    value: number[]
    setValue: (value: number[]) => void;
}

export const Range = (props: RangeProps) => {

    const {
        value,
        setValue,
        minValue,
        maxValue
    } = props;

    return (
        <ReactRange
            step={1}
            min={minValue}
            max={maxValue}
            values={value}
            onChange={(values) => setValue(values)}
            renderTrack={({props, children}) => (
                <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                >
                    <div
                        ref={props.ref}
                        style={{
                            height: '2px',
                            width: '379px',
                            background: getTrackBackground({
                                values: value,
                                colors: ['#FF9514', '#E1E1E1'],
                                min: minValue,
                                max: maxValue
                            }),
                            alignSelf: 'center'
                        }}
                    >
                        {children}
                    </div>
                </div>
            )}
            renderThumb={({props}) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: '20px',
                        width: '20px',
                        border: 0,
                        borderRadius: 50,
                        backgroundColor: '#FF9514'
                    }}
                />
            )}
        />
    )
}