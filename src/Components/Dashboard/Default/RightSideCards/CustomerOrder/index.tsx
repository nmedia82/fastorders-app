import React from 'react'
import { CardBody, Col } from 'reactstrap'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DropdownWithHeader'
import { RecentOrders } from '../../../../../Utils/Constants'
import { customerOrderData, statusDropdownList } from '../../../../../Data/Dashboard/Default'
import { Badges, H6, Image, LI, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import CustomerOrderDropdown from './CustomerOrderDropdown'

export default function CustomerOrder() {

    return (
        <Col xl={12} sm={6} className="col-xl-30 order-xl-ii customer-order">
            <DropdownWithHeader end caret headerClass='card-no-border' mainDivClass='order-lists' heading={RecentOrders} span='80 Orders in a December'
                spanClass='d-block f-w-500 f-light f-12' dropDownTitle='All Orders' dropDownList={statusDropdownList} />
            <CardBody className="transaction-list recent-orders">
                <UL className="order-list mb-0 simple-list">
                    {customerOrderData.map((item) => (
                        <LI key={item.id}>
                            <div className="light-card"> <Image src={dynamicImage(`dashboard/product/${item.image}`)} alt="TV" /></div>
                            <div className="order-content">
                                <div>
                                    <H6 className="mb-1">{item.name}</H6>
                                    <span>
                                        <Badges color='light-primary'>{'#'}{item.badge}</Badges>
                                        <span className="f-light f-w-500 f-12 ms-2">{item.item}{' Item'}</span>
                                    </span>
                                </div>
                                <div className="text-end">
                                    <CustomerOrderDropdown />
                                    <span className="f-light f-w-500 f-12">{'$'}{item.rate}</span>
                                </div>
                            </div>
                        </LI>
                    ))}
                </UL>
            </CardBody>
        </Col>
    )
}
