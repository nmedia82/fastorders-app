import React from 'react'
import { Card, CardBody } from 'reactstrap'
import DropdownWithHeader from '../../DropdownWithHeader'
import { ProductDelivery } from '../../../Constants'
import { deliveryCardData, technologyDropdownList } from '../../../../Data/Dashboard/ECommerce'
import { Badges, H6, Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../..'
import CustomerOrderDropdown from '../../../../Components/Dashboard/Common/CustomerOrderDropdown'
import { ProjectWidgetProp } from '../../../../Types/Dashboard.type'

export default function DeliveryCard({ colClass, cardClass }: ProjectWidgetProp) {
    return (
        <div className={colClass}>
            <Card className={`title-line ${cardClass}`}>
                <DropdownWithHeader headerClass='card-no-border' heading={ProductDelivery} span='Total 10,987 Items Delivery' spanClass='f-12 f-w-500 f-light d-block'
                    dropDownTitle='Order Details' caret start dropDownList={technologyDropdownList} />
                <CardBody className="delivery-content pt-0">
                    <UL className="order-list mb-0 custom-scrollbar simple-list">
                        {deliveryCardData.map((item) => (
                            <LI key={item.id}>
                                <div className="light-card">
                                    <Image className="img-fluid" src={dynamicImage(item.image)} alt="T-shirt" />
                                </div>
                                <div className="order-content">
                                    <div>
                                        <H6 className="mb-1">{item.title}</H6>
                                        <span> <span className="f-light f-w-500 f-12">{item.subTitle}</span></span>
                                    </div>
                                    <div className="text-end">
                                        <CustomerOrderDropdown />
                                        <Badges color={`light-${item.color}`} className={`txt-${item.color} f-12`}>{item.badgeText}</Badges>
                                    </div>
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </div>
    )
}
