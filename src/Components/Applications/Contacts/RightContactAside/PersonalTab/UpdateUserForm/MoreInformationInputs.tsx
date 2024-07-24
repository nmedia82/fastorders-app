import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'
import { basicSingleList} from '../../../../../../Data/Applications/Contacts'
import MoreInfoDrop from './MoreInfoDrop'

export default function MoreInformationInputs() {
    return (
        <Row className="g-3 more-data mt-2">
            <Col md={12}>
                <Label>{'URLS'}</Label>
                <Row className='g-3'>
                    <Col sm={6}><Input type="text" required /></Col>
                    <Col sm={6}>
                        <Input type='select' className="js-example-basic-single">
                            {basicSingleList.map((item) => (
                                <option value={item.value} key={item.id}>{item.text}</option>
                            ))}
                        </Input>
                    </Col>
                </Row>
            </Col>
            <Col md={12}>
                <Label>{'Personal'}</Label>
                <div className="d-block">
                    <Label className="me-3" htmlFor="edo-ani">
                        <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked /><span>{'Male'}</span>
                    </Label>
                    <Label htmlFor="edo-ani1">
                        <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" /><span>{'Female'}</span>
                    </Label>
                </div>
            </Col>
            <MoreInfoDrop/>
            <Col md={12}>
                <Label>{'Home Address'}</Label>
                <Row className='g-3'>
                    <Col xs={12}><div className="mb-2"><Input type="text" placeholder="Address" /></div></Col>
                    <Col sm={6}><div className="mb-2"><Input type="text" placeholder="City" /></div></Col>
                    <Col sm={6}><div className="mb-2"><Input type="text" placeholder="State" /></div></Col>
                    <Col sm={6}><div className="mb-2"><Input type="text" placeholder="Country" /></div></Col>
                    <Col sm={6}><div className="mb-2"><Input type="number" placeholder="Pin Code" /></div></Col>
                </Row>
            </Col>
        </Row>
    )
}
