import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { MultiFileUploadTitle } from '../../../../Utils/Constants';
import Dropzone, { IFileWithMeta } from 'react-dropzone-uploader';
import { H6 } from '../../../../AbstractElements';
import { fileUploadData } from '../../../../Data/BonusUi/Dropzone';

export default function MultiFileUpload() {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    };
    const handleSubmit = (successFiles: IFileWithMeta[], allFiles: IFileWithMeta[]): void => {
        allFiles.forEach((f) => f.remove());
    };
    return (
        <Col lg={6}>
            <Card className='title-line'>
                <CommonCardHeader title={MultiFileUploadTitle} subTitle={fileUploadData} />
                <CardBody className='dropzone-secondary'>
                    <Dropzone
                        getUploadParams={getUploadParams}
                        onSubmit={handleSubmit}
                        accept="image/*"
                        inputContent={
                            <div className='dz-message needsclick'>
                                <i className="icon-cloud-up"></i>
                                <H6>{"Drop files here or click to upload."}</H6>
                                <span className='note needsclick'>
                                    {'(This is just a demo dropzone. Selected files are '}<strong>{'not'}</strong>{' actually uploaded.)'}
                                </span>
                            </div>
                        }
                    />
                </CardBody>
            </Card>
        </Col>
    )
}

