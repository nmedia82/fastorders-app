import React from 'react'
import { Card, CardBody, Col, Form } from 'reactstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CommonTypeaheadProps } from '../../../../../Types/Forms.type'

export default function CommonTypeahead({ title, subTitle, options, placeholder, labelKey, className,id }: CommonTypeaheadProps) {
    return (
        <Col sm={12} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={title} subTitle={subTitle} />
                <CardBody>
                    <div>
                        <Form className="theme-form">
                            <div className={className}>
                                <Typeahead id={id} options={options} labelKey={labelKey} placeholder={placeholder} />
                            </div>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

