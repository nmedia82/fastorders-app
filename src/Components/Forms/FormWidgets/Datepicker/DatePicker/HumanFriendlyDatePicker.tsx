import React, { useState } from 'react'
import DatePicker from "react-datepicker";

export default function HumanFriendlyDatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = (date: Date) => {
        setStartDate(date);
    };

    return (
        <DatePicker
            className="form-control flatpickr-input"
            selected={startDate}
            onChange={handleChange}
            dateFormat="MMMM dd,yyyy"
        />
    )
}
