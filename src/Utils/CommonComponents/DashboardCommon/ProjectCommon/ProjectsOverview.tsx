import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { ProjectsOverviewTitle } from '../../../../Utils/Constants'
import { projectOverviewOption, projectbarOption } from '../../../../Data/Dashboard/Project'
import { monthlyDropdownList } from '../../../../Data/Dashboard/Default'
import { ProjectWidgetProp } from '../../../../Types/Dashboard.type'

export default function ProjectsOverview({ colClass, cardClass, height, height2 }: ProjectWidgetProp) {
    return (
        <Col xl={6} className={`box-col-6 ${colClass}`}>
            <Card className={`title-line ${cardClass ? cardClass : ''}`}>
                <DropdownWithHeader caret end headerClass='card-no-border' heading={ProjectsOverviewTitle} headerIconClass='right-xl-dropdown' dropDownTitle='Monthly' dropDownList={monthlyDropdownList} />
                <CardBody className="pt-0">
                    <div className="project-overview-wrapper">
                        <div id="project-overview">
                            <ReactApexChart type='line' options={projectOverviewOption} series={projectOverviewOption.series} height={height} />
                        </div>
                        <div className="project-back-bar">
                            <div id="project-bar">
                                <ReactApexChart type='bar' options={projectbarOption} series={projectbarOption.series} height={height2} />
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
