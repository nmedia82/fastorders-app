import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultDropzone from './DefaultDropzone'
import ImagePreview from './ImagePreview'
import SingleFileupload from './SingleFileupload'
import MultiFileUpload from './MultiFileUpload'

export default function DropzoneContainer() {
  return (
    <Container fluid>
        <Row>
            <DefaultDropzone/>
            <ImagePreview/>
            <SingleFileupload/>
            <MultiFileUpload/>
        </Row>
    </Container>
  )
}
