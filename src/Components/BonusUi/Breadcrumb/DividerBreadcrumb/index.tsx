import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { DividerBreadcrumbTitle, Home, Href, Progress, UiKits } from '../../../../Utils/Constants'
import { dividerBreadcrumbSubTitle } from '../../../../Data/BonusUi/Breadcrumb'

export default function DividerBreadcrumb() {
  return (
    <Col sm={6}>
      <Card className='height-equal title-line'>
        <CommonCardHeader title={DividerBreadcrumbTitle} subTitle={dividerBreadcrumbSubTitle} />
        <CardBody>
          <Breadcrumb className='breadcrumb-icon'>
            <BreadcrumbItem href={Href} tag={'a'}>{Home}</BreadcrumbItem>
            <BreadcrumbItem active>{UiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className='m-0 breadcrumb-icon'>
            <BreadcrumbItem tag={'a'} href={Href}>{Home}</BreadcrumbItem>
            <BreadcrumbItem tag={'a'} href={Href}>{UiKits}</BreadcrumbItem>
            <BreadcrumbItem active>{Progress}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}
