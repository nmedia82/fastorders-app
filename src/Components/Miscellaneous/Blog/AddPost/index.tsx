import React from 'react'
import { Card, CardBody, Col, Container, Form, Row } from 'reactstrap'
import Dropzone from 'react-dropzone-uploader'
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader'
import { Discard, Post, PostEditTitle } from '../../../../Utils/Constants'
import PostEditForm from './PostEditForm'
import { Btn, H6 } from '../../../../AbstractElements'
export default function AddPostContainer() {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' };
    };
    return (
        <Container fluid>
            <Row>
                <Col sm={12}>
                    <Card>
                        <CommonCardHeader title={PostEditTitle} />
                        <CardBody className='add-post'>
                            <PostEditForm />
                            <Form className='add-primary-post m-b-20'>
                                <Dropzone
                                
                                    getUploadParams={getUploadParams}
                                    multiple={true}
                                    inputContent={
                                        <div className="m-0 dz-message needsclick">
                                            <i className="icon-cloud-up"></i>
                                            <H6 className="mb-0">{'Drop files here or click to upload.'}</H6>
                                        </div>}
                                />
                            </Form>
                            <div className="btn-showcase text-end">
                                <Btn color='primary'>{Post}</Btn>
                                <Btn color='light'>{Discard}</Btn>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
