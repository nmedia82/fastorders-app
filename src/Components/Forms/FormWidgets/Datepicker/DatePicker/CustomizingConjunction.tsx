import React, { useState } from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker';

export default function CustomizingConjunction() {
    const [startDate, setStartDate] = useState(new DateObject());
    const handleChange = (date: DateObject) => {
        setStartDate(date);
    };

    return (
        <DatePicker
            inputClass="form-control"
            multiple
            dateSeparator="::"
            value={startDate}
            onChange={handleChange}
        />
    )
}
