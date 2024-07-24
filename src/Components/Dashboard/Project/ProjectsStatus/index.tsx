import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { H2 } from '../../../../AbstractElements'
import { Href, ProjectsStatusTitle } from '../../../../Utils/Constants'
import SvgIcon from '../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { projectsStatusColumn, projectsStatusData } from '../../../../Data/Dashboard/Project'

export default function ProjectsStatus() {
    return (
        <Col xl={7}>
            <Card className="height-equal title-line overflow-hidden">
                <CardHeader className="card-no-border">
                    <div className="header-top">
                        <H2>{ProjectsStatusTitle}</H2>
                        <div className="card-header-right-icon">
                            <a className="link-with-icon" href={Href}>{'View all'}
                                <SvgIcon iconId='arrow-two-tone' />
                            </a>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="project-table p-0">
                    <DataTable className='custom-scrollbar' data={projectsStatusData} columns={projectsStatusColumn} />
                </CardBody>
            </Card>
        </Col>
    )
}
