import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { EarningReportsTitle } from '../../../Constants'
import DropdownWithHeader from '../../DropdownWithHeader'
import { Badges, H4, LI, UL } from '../../../../AbstractElements'
import SvgIcon from '../../CommonIcons/CommonSvgIcons'
import { dailyDropdownList, earningReportsData, earningReportsOption } from '../../../../Data/Dashboard/Default'
import { ProjectWidgetProp } from '../../../../Types/Dashboard.type'

export default function EarningReportsCard({ colClass }: ProjectWidgetProp) {
    return (
        <Col md={6} className={colClass ? colClass : ''}>
            <Card className="title-line">
                <DropdownWithHeader end headerClass='card-no-border' heading={EarningReportsTitle} span='Weekly Earning Overview'
                    spanClass='d-block f-w-500 f-light f-12' dropDownClass='icon-dropdown' dropDownIcon dropDownList={dailyDropdownList} />
                <CardBody className="pt-0">
                    <div className="report-chart-container">
                        <div id="earning-chart">
                            <ReactApexChart type='bar' options={earningReportsOption} series={earningReportsOption.series} height={245} />
                        </div>
                    </div>
                    <UL className="report-list simple-list flex-row">
                        {earningReportsData.map((item) => (
                            <LI key={item.id}>
                                <div className="light-card report-icon">
                                    <SvgIcon iconId={item.icon} />
                                </div>
                                <div>
                                    <span className="f-12 f-w-500 f-light">{item.text}</span>
                                    <H4 className="mt-1 f-w-600">{'$'}{item.rate}
                                        <Badges color={`${item.color}`} className="ms-1">
                                            {item.badgeIcon}{item.badgeText}{'%'}
                                        </Badges>
                                    </H4>
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}