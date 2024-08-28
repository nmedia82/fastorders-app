/** @format */

import React from "react";
import { Container, Row } from "reactstrap";
import UserProfile from "./UserProfile";
import UserEdit from "./UsersEdit";

// import AddProjectsAndUpload from "./AddProjectsAndUpload";

export default function UserSettings() {
  return (
    <div className="page-body main-project">
      <Container fluid>
        <div className="edit-profile">
          <Row>
            <UserProfile />
            <UserEdit />
            {/* <AddProjectsAndUpload /> */}
          </Row>
        </div>
      </Container>
    </div>
  );
}
