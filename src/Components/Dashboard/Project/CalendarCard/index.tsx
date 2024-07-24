import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { H2, H4, LI, UL } from '../../../../AbstractElements'
import { CalendarTitle, Href } from '../../../../Utils/Constants'
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { calendarDateList } from '../../../../Data/Dashboard/Project'
import ClientContent from './ClientContent'

export default function CalendarCard() {
    return (
        <Col xxl={5} xl={6} lg={6} md={6} className="box-col-6">
            <Card className="height-equal title-line">
                <CardHeader className="card-no-border">
                    <div className="header-top">
                        <H2>{CalendarTitle}</H2>
                        <div className="card-header-right-icon">
                            <a className="link-with-icon" href={Href}>
                                {'Report'}<SvgIcon iconId='arrow-two-tone' />
                            </a>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="pt-0">
                    <div className="calendar-wrapper">
                        <UL className="calendar-date-list custom-scrollbar simple-list flex-row">
                            {calendarDateList.map((item) => (
                                <LI key={item.id} className={item.date === 19 ? "today-date" : ""}>
                                    <span className="f-12 f-light">{item.text}</span>
                                    <H4 className="f-w-500">{item.date}</H4>
                                </LI>
                            ))}
                        </UL>
                        <ClientContent/>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
