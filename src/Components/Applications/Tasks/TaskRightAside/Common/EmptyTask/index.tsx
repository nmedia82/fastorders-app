import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { Printer } from 'react-feather'
import { EmptyTaskProp } from '../../../../../../Types/Tasks.type'
import { H6 } from '../../../../../../AbstractElements'
import { Href } from '../../../../../../Utils/Constants'

export default function EmptyTask({ title }: EmptyTaskProp) {
    return (
        <Card className='mb-0'>
            <CardHeader className='d-flex'>
                <H6 className='mb-0'>{title}</H6>
                <a href={Href}>
                    <Printer className='me-2' />{'Print'}
                </a>
            </CardHeader>
            <CardBody>
                <div className='details-bookmark text-center'>
                    <span>{'No tasks found.'}</span>
                </div>
            </CardBody>
        </Card>
    )
}

