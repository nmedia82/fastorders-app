import React from 'react'
import { Container, Row } from 'reactstrap'
import UserProfile2Style from './UserProfile2Style'
import UserProfile3Style from './UserProfile3Style'
import UserFirstProfile from '../../../../Utils/CommonComponents/CommonUserProfile/UserFirstProfile'
import UserProfile4Style from './UserProfile4Style'
import UserProfile5Style from './UserProfile5Style'

export default function UserProfileContainer() {
    return (
        <Container fluid>
            <div className="user-profile">
                <Row>
                    <UserFirstProfile/>
                    <UserProfile2Style/>
                    <UserProfile3Style/>
                    <UserProfile4Style/>
                    <UserProfile5Style/>
                </Row>
            </div>
        </Container>
    )
}
