import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Alert, DefaultBreadcrumbTitle, Home, Href, UiKits } from '../../../../Utils/Constants'
import { defaultBreadcrumbSubTitle } from '../../../../Data/BonusUi/Breadcrumb'

export default function DefaultBreadcrumb() {
    return (
        <Col sm={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={DefaultBreadcrumbTitle} subTitle={defaultBreadcrumbSubTitle} />
                <CardBody>
                    <Breadcrumb>
                        <BreadcrumbItem href={Href} tag={'a'}>{Home}</BreadcrumbItem>
                        <BreadcrumbItem active>{UiKits}</BreadcrumbItem>
                    </Breadcrumb>
                    <Breadcrumb className='m-0'>
                        <BreadcrumbItem tag={'a'} href={Href}>{Home}</BreadcrumbItem>
                        <BreadcrumbItem tag={'a'} href={Href}>{UiKits}</BreadcrumbItem>
                        <BreadcrumbItem active>{Alert}</BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    )
}
