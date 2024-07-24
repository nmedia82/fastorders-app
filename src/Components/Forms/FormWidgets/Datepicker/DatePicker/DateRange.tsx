import React, { useState } from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { MultiplesDateOptions } from '../../../../../Types/Forms.type';

export default function DateRange() {
    const [value, setValue] = useState<DateObject[] | null | undefined>([]);
    const handleDateChange = (date: DateObject[] | null, options: MultiplesDateOptions) => {
        setValue(date);
    };

    return (
        <DatePicker
            inputClass="form-control"
            range
            value={value}
            onChange={handleDateChange}
        />
    )
}