import React from 'react'
import { H5, H6, Image, LI, P } from '../../../../AbstractElements'
import { Label } from 'reactstrap'
import { HoverMeetupText1 } from '../../../../Utils/Constants'
import { hoverMeetupData } from '../../../../Data/BonusUi/Timeline'
import { dynamicImage } from '../../../../Utils'

export default function HoverMeetup() {
    return (
        <LI className='timeline-event'>
            <Label className='timeline-event-icon'/>
            <div className='timeline-event-wrapper'>
                <P className='timeline-thumbnail'>{"December 2024 - Meetup"}</P>
                <H5>{HoverMeetupText1}</H5>
                <div className='text-muted'>
                    {"2209 Leverton Cove RoadSpringfield, MA 01109"}
                    <div className='designer-details'>
                        {hoverMeetupData.map((data) => (
                            <div className='designer-profile' key={data.id}>
                                <div className='designer-wrap'>
                                    <Image className='designer-img img-fluid' src={dynamicImage(`avtar/${data.image}`)} alt='profile'/>
                                    <div className='designer-content'>
                                        <H6>{data.name}</H6>
                                        <P>{data.number}</P>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </LI>
    )
}
