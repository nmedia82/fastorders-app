import React, { useState } from 'react'
import DatePicker from "react-datepicker";

export default function MinMaxValueDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            className="form-control flatpickr-input"
            dateFormat="dd.MM.yyyy"
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            minDate={new Date()}
            maxDate={new Date(new Date().setDate(new Date().getDate() + 5))}
        />
    )
}
