import React from 'react'
import { Col, FormGroup, Label, Row } from 'reactstrap';
import Dropzone from 'react-dropzone-uploader';
import { UploadProjectFile } from '../../../../../Utils/Constants';
import { H6 } from '../../../../../AbstractElements';

export default function UploadFile() {
    const getUploadParams = () => {
        return { url: "https://httpbin.org/post", };
    };

    return (
        <Row>
            <Col>
                <FormGroup>
                    <Label>{UploadProjectFile}</Label>
                    <Dropzone getUploadParams={getUploadParams} maxFiles={1} multiple={false} canCancel={false}
                        inputContent={
                            <div className='dz-message needsclick'>
                                <i className="icon-cloud-up" />
                                <H6>{'Drop files here or click to upload.'}</H6>
                                <span className='note needsclick'>{'(This is just a demo dropzone. Selected files are '}<strong>{'not'}</strong>{' actually uploaded.)'}</span>
                            </div>
                        } />
                </FormGroup>
            </Col>
        </Row>
    )
}
