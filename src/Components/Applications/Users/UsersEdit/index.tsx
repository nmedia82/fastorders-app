import React from 'react'
import { Container, Row } from 'reactstrap'
import MyProfile from './MyProfile'
import EditProfile from './EditProfile'
import AddProjectsAndUpload from './AddProjectsAndUpload'

export default function EditProfileContainer() {
    return (
        <Container fluid>
            <div className="edit-profile">
                <Row>
                    <MyProfile/>
                    <EditProfile/>
                    <AddProjectsAndUpload/>
                </Row>
            </div>
        </Container>
    )
}
