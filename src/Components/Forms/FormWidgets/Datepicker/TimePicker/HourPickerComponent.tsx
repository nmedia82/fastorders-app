import React from 'react'
import DatePicker from 'react-multi-date-picker'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'

export default function HourPickerComponent() {
    return (
        <DatePicker
            inputClass="form-control"
            disableDayPicker
            format="HH:mm"
            plugins={[<TimePicker hideSeconds key={"TimePicker"} />]}
        />
    )
}
