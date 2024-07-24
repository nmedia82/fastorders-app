import React from 'react'
import { Label } from 'reactstrap'
import CountUp from 'react-countup';
import { LI, UL } from '../../../../../AbstractElements'
import { Href } from '../../../../../Utils/Constants'

export default function UserFooter() {
    return (
        <div className='like-comment mt-3'>
            <UL className='simple-list list-inline flex-row'>
                <LI className='list-inline-item border-right'>
                    <Label className='m-0'>
                        <a href={Href}><i className='fa fa-heart'></i></a>
                        {'Like'}
                    </Label>
                    <CountUp end={2569} className='ms-2 counter' />
                </LI>
                <LI className='list-inline-item border-0'>
                    <Label className='m-0'>
                        <a href={Href}><i className='fa fa-comment'></i></a>
                        {'Comment'}
                    </Label>
                    <CountUp end={569} className='ms-2 counter' />
                </LI>
            </UL>
        </div>
    )
}
