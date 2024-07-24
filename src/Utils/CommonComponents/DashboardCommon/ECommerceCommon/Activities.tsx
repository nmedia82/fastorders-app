import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { ActivitiesTitle, Href } from '../../../Constants'
import { Badges, H6, LI, UL } from '../../../../AbstractElements'
import DropdownWithHeader from '../../DropdownWithHeader'
import { activityDetailsData, technologyDropdownList } from '../../../../Data/Dashboard/ECommerce'
import { ProjectWidgetProp } from '../../../../Types/Dashboard.type'

export default function Activities({ colClass, cardClass }: ProjectWidgetProp) {
    return (
        <div className={colClass}>
            <Card className={`title-line ${cardClass}`}>
                <DropdownWithHeader caret headerClass='card-no-border' heading={ActivitiesTitle} span='780,765 Sales' spanClass='f-12 f-w-500 f-light d-block'
                    headerIconClass='detail-option' start dropDownTitle='Order Details' dropDownList={technologyDropdownList} />
                <CardBody className="pt-0 notification to-do-list activities-wrapper">
                    <UL className="activity-details custom-scrollbar simple-list">
                        {activityDetailsData.map((item) => (
                            <LI className="d-flex align-items-center" key={item.id}>
                                <div className={`activity-dot-${item.color}`} />
                                <div className="d-flex w-100 align-items-center">
                                    <div>
                                        {item.title ? (<H6>{item.title} {item.anchor ? (<a href={Href}>{item.anchor}</a>) : ('')}</H6>) :
                                            (<span className="f-w-500 f-12 f-light">{item.subTitle}</span>)
                                        }
                                    </div>
                                    <Badges color='transparent' className="ms-auto f-light">{item.badgeText}</Badges>
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </div>
    )
}
