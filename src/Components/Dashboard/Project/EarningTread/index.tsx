import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { AvgEarnings } from '../../../../Utils/Constants'
import EarningContent from './EarningContent'
import { Btn, LI, UL } from '../../../../AbstractElements'
import { earningAverageOption, earningButtons } from '../../../../Data/Dashboard/Project'
import { dailyDropdownList } from '../../../../Data/Dashboard/Default'

export default function EarningTread() {
    return (
        <Col xl={4} md={6} className="box-col-4">
            <Card className="title-line earning-tread">
                <DropdownWithHeader end dropDownList={dailyDropdownList} headerClass='card-no-border' heading={AvgEarnings}
                    dropDownClass='icon-dropdown' dropDownIcon />
                <CardBody className="pt-0">
                    <EarningContent />
                    <UL className="earning-buttons simple-list flex-row">
                        {earningButtons.map((item, index) => (
                            <LI key={index}>
                                <Btn color='light'>{item}</Btn>
                            </LI>
                        ))}
                    </UL>
                    <div className="avg-earning-chart-container">
                        <div id="earning-average">
                            <ReactApexChart type='line' options={earningAverageOption} series={earningAverageOption.series} height={160} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
