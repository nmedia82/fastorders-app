import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { ColoredBreadcrumbTitle, Href } from '../../../../Utils/Constants'
import { colorBreadcrumbSubTitle, coloredBreadcrumbData } from '../../../../Data/BonusUi/Breadcrumb'

export default function ColoredBreadcrumb() {
    return (
        <Col sm={12}>
            <Card className='title-line'>
                <CommonCardHeader title={ColoredBreadcrumbTitle} subTitle={colorBreadcrumbSubTitle} />
                <CardBody>
                    {coloredBreadcrumbData.map((data) => (
                        <Breadcrumb className={`breadcrumb-colored m-b-30 bg-${data.color}`} key={data.id}>
                            {data.item.map((list, index) => (
                                <BreadcrumbItem className='fw-bold' href={Href} key={index} active={index === 2 ? true:false}>{list}</BreadcrumbItem>
                            ))}
                        </Breadcrumb>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
