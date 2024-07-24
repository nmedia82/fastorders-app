import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { BasicTables, BootstrapArrow, HomeArrow, Href, TablesArrow, VariationBreadcrumbTitle } from '../../../../Utils/Constants'
import { variationBreadcrumbSubTitle } from '../../../../Data/BonusUi/Breadcrumb'

export default function VariationBreadcrumb() {
    return (
        <Col sm={6}>
            <Card className='height-equal title-line'>
                <CommonCardHeader title={VariationBreadcrumbTitle} subTitle={variationBreadcrumbSubTitle} />
                <CardBody className='breadcrumb-space'>
                    <Breadcrumb className='breadcrumb-no-divider mb-0 gap-2'>
                        <BreadcrumbItem className='mb-1 mb-xl-0' tag='a' href={Href}> {HomeArrow} </BreadcrumbItem>
                        <BreadcrumbItem className='ps-0 mb-1 mb-xl-0' tag='a' href={Href}> {TablesArrow} </BreadcrumbItem>
                        <BreadcrumbItem className='ps-0 mb-1 mb-xl-0' tag='a' href={Href}> {BootstrapArrow} </BreadcrumbItem>
                        <BreadcrumbItem className='ps-0' active> {BasicTables} </BreadcrumbItem>
                    </Breadcrumb>
                </CardBody>
            </Card>
        </Col>
    )
}
