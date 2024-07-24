import React from 'react'
import { Card, CardBody, CardFooter, Col } from 'reactstrap'
import { Btn, H6, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { Cancel, Href, SaveThisJob, Submit, UIDesigner } from '../../../../../Utils/Constants'
import PersonalDetails from './PersonalDetails'
import YourEducation from './YourEducation'
import YourExperience from './YourExperience'
import UploadFiles from './UploadFiles'

export default function ApplyForm() {
    return (
        <Col xl={9} className="xl-60 box-col-12">
            <Card>
                <div className="job-search">
                    <CardBody className="pb-0">
                        <div className="d-flex">
                            <Image className="img-40 img-fluid m-r-20" src={dynamicImage(`job-search/1.jpg`)} alt="" />
                            <div className="flex-grow-1">
                                <H6 className="f-w-600">
                                    <a href={Href}>{UIDesigner}</a>
                                    <span className="pull-right">
                                        <Btn color='primary'><span><i className="fa fa-check text-white"></i></span> {SaveThisJob}</Btn>
                                    </span>
                                </H6>
                                <P>{'Endless Telecom & Technologies , NY'}
                                    <span><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i><i className="fa fa-star font-warning"></i></span>
                                </P>
                            </div>
                        </div>
                        <div className="job-description">
                            <PersonalDetails />
                            <YourEducation />
                            <YourExperience />
                            <UploadFiles />
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Btn color='primary' className='me-2'>{Submit}</Btn>
                        <Btn color='light'>{Cancel}</Btn>
                    </CardFooter>
                </div>
            </Card>
        </Col>
    )
}
