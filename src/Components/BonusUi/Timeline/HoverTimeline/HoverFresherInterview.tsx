import React from 'react'
import { H5, H6, Image, LI, P, UL } from '../../../../AbstractElements';
import { Label } from 'reactstrap';
import { HoverFresherText1, MollyBoake } from '../../../../Utils/Constants';
import { dynamicImage } from '../../../../Utils';

export default function HoverFresherInterview() {
    return (
        <LI className='timeline-event'>
            <Label className='timeline-event-icon'/>
            <div className='timeline-event-wrapper'>
                <P className='timeline-thumbnail'>{"March 2024 - Fresher Interview"}</P>
                <H5 className="f-w-500">{HoverFresherText1}</H5>
                <div className='text-muted'>
                    {"A fresher's interview is to be conducted"}
                    <UL className='simple-list main-lists-content'>
                        <LI className='list-group-item-action border-0 p-0 mb-4'>
                            <div className='d-flex w-100 justify-content-between align-items-center'>
                                <div className='list-wrapper'>
                                    <Image className='list-img img-fluid me-0 mb-0' src={dynamicImage(`user/1.jpg`)} alt='profile' />
                                    <div className='list-content'>
                                        <H6>{MollyBoake}</H6>
                                        <P>{"MollyBoake@rhyta.com"}</P>
                                    </div>
                                </div>
                                <div className='timeline-icon'>
                                    <i className='icon-facebook'></i>
                                    <i className='icon-google'> </i>
                                    <i className='icon-twitter-alt'></i>
                                </div>
                            </div>
                            <P className='mb-1'>{"Next step is to choose a tone of voice for your content type."}</P>
                        </LI>
                    </UL>
                </div>
            </div>
        </LI>
    );
}

