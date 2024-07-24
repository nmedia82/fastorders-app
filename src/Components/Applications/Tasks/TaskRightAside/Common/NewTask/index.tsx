import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { EmptyTaskProp } from '../../../../../../Types/Tasks.type';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { H6 } from '../../../../../../AbstractElements';
import { Href } from '../../../../../../Utils/Constants';
import { Printer } from 'react-feather';
import NewTaskTable from './NewTaskTable';

export default function NewTask({ title }: EmptyTaskProp) {
    const componentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <Card className="mb-0">
            <CardHeader className="d-flex">
                <H6 className="mb-0">{title}</H6>
                <a href={Href} onClick={handlePrint}><Printer className='me-2' />{'Print'}</a>
            </CardHeader>
            <CardBody className="p-0" >
                <NewTaskTable componentRef={componentRef} />
            </CardBody>
        </Card>
    )
}

