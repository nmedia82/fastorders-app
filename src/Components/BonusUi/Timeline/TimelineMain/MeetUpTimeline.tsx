import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { Badges, H5, H6, P } from '../../../../AbstractElements'
import { MeetUp } from '../../../../Utils/Constants'

export default function MeetUpTimeline() {
    return (
        <VerticalTimelineElement className='cd-timeline-block' dateClassName='cd-date' date='November 04 2024' icon={<div className="cd-timeline-img cd-location bg-secondary"><i className="icon-pin-alt" /></div>}>
            <div className="cd-timeline-content">
                <div className='timeline-wrapper'>
                    <Badges color='success'>{MeetUp}</Badges>
                </div>
                <H5 className='m-0'>{"Web-designer's meet-up "}</H5>
                <P className='mb-0'>{'Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss tools. '}</P>
                <div className='time-content pt-2'>
                    <i className='icon-android'></i>
                    <H6>{' Please! Meet-up'}</H6>
                </div>
            </div>
        </VerticalTimelineElement>
    )
}
