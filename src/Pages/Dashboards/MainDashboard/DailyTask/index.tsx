import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DropdownWithHeader from '../../../../Utils/CommonComponents/DropdownWithHeader'
import { DailyTaskTitle } from '../../../../Utils/Constants'
import { Btn, H6, LI, UL } from '../../../../AbstractElements'
import { dailyTaskData } from '../../../../Data/Dashboard/Project'
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { dailyDropdownList } from '../../../../Data/Dashboard/Default'

export default function DailyTask() {
    return (
        <Col xl={3} md={6} className="box-col-3">
            <Card className="title-line">
                <DropdownWithHeader end headerClass='card-no-border' heading={DailyTaskTitle} dropDownClass='icon-dropdown' dropDownIcon dropDownList={dailyDropdownList} />
                <CardBody className="notification daily-task pt-0">
                    <UL className='simple-list'>
                        {dailyTaskData.map((item) => (
                            <LI className="d-flex align-items-center" key={item.id}>
                                <div className={`activity-dot-${item.color}`} />
                                <div className="task-content ms-2">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <H6>{item.title}</H6>
                                            <span className="f-light f-w-500 f-12">
                                                <SvgIcon iconId='clock-2' />
                                                <span>{item.time}</span>
                                            </span>
                                        </div>
                                        <Btn color='lighten-primary'>{'Remind Me'}</Btn>
                                    </div>
                                </div>
                            </LI>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
