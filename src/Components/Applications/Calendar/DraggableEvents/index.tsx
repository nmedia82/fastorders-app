import React, { useState } from 'react'
import { Col, Input, Label } from 'reactstrap';
import { Btn, H2, P } from '../../../../AbstractElements';
import { CalendarFilter, DraggableEventsTitle, RemoveAfterDrop } from '../../../../Utils/Constants';
import { calendarInitialState } from '../../../../Data/Applications/Calendar';

export default function DraggableEvents() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen); }
    return (
        <Col xl={3} className="box-col-12">
            <div className="md-sidebar mb-3">
                <Btn color='primary' className="md-sidebar-toggle" onClick={toggle}>{CalendarFilter}</Btn>
                <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? 'open' : ''}`}>
                    <div id="external-events">
                        <H2>{DraggableEventsTitle}</H2>
                        <div id="external-events-list">
                            {calendarInitialState.events.map((event) => (
                                <div className='fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event' id={event.id} title={event.title} key={event.id}>
                                    <div className="fc-event-main common-flex align-items-center">
                                        <i className={`me-2 fa fa-${event.icon}`}></i>
                                        {event.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <P>
                            <Input className="checkbox_animated" id="drop-remove" type="checkbox" />
                            <Label className="mb-0 pb-0" htmlFor="drop-remove">{RemoveAfterDrop}</Label>
                        </P>
                    </div>
                </div>
            </div>
        </Col>
    )
}
