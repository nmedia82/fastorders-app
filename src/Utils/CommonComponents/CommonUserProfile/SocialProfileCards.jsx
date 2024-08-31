import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardBody, Col, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { fetchUsersData } from "../../../ReduxToolkit/Reducers/UsersReducer";
import { H3, H5, Image, LI, UL } from "../../../AbstractElements";
import FeatherIcons from "../../../Pages/Icons/FeatherIcons";

export default function SocialProfileCards() {
  const { allUsers } = useSelector((state) => state.userCards);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);
  const [filterValue, setFilterValue] = useState();
  // Empty function for GetProfileIcon
  function GetProfileIcon() {
    // Implement the functionality here or leave it empty for now
  }

  // Empty function for handleVacationOpen
  function handleVacationOpen() {
    // Implement the functionality here or leave it empty for now
  }

  // Empty function for navigate
  function navigate() {
    // Implement the functionality here or leave it empty for now
  }

  // Empty function for handleUserStatusUpdate
  function handleUserStatusUpdate() {
    // Implement the functionality here or leave it empty for now
  }

  // Empty function for handleUserDelete
  function handleUserDelete() {
    // Implement the functionality here or leave it empty for now
  }

  // Empty function for toggleVacationPopup
  function toggleVacationPopup() {
    // Implement the functionality here or leave it empty for now
  }

  // Empty function for VacationsPopup
  function VacationsPopup() {
    // Implement the functionality here or leave it empty for now
  }

  // Empty function for handleClosePopup
  function handleClosePopup() {
    // Implement the functionality here or leave it empty for now
  }

  // Placeholder for userSelected
  const userSelected = {}; // Or set it to null, undefined, or any initial value as per your needs

  return (
    <>
      {/* <div className="m-b-20">
        <div style={{ maxWidth: "40%" }}>
          <Input type="select" onChange={(e) => setFilterValue(e.target.value)}>
            <option value="all">All Role</option>
            <option value="Admin">Admin</option>
            <option value="Developer">Developer</option>
            <option value="Customer">Customer</option>
            <option value="Extern">Extern</option>
            <option value="Promoter">Promoter</option>
            <option value="Staff">Staff</option>
            <option value="Team">Team</option>
          </Input>
        </div>
      </div> */}
      {allUsers.map((item) => (
        <Col
          sm={6}
          xxl={3}
          xl={4}
          className="col-ed-4 box-col-4"
          key={item?.user_id}
        >
          <Card className="social-profile">
            <CardBody>
              <div className="social-img-wrap">
                <div className="social-img">
                  <Image
                    src={`${process.env.PUBLIC_URL}/assets/images/user/1.jpg`}
                    alt="profile"
                  />
                </div>
                <div className="edit-icon">
                  <i className={GetProfileIcon(item?.user_isactive)}></i>
                </div>
              </div>

              <div className="social-details">
                <H5 className="mb-1 f-w-600">
                  <Link
                    to={`${process.env.PUBLIC_URL}/applications/social_app`}
                  >
                    {item?.user_fullname}
                  </Link>
                </H5>
                <p className="f-light">{item?.user_email}</p>
                <div className="p-2">
                  <span className="mx-2 hover-effect">
                    <i className="icon-timer fs-5y"></i>
                  </span>
                  <span
                    className="mx-2 hover-effect "
                    onClick={() => handleVacationOpen(item?.user_id)}
                  >
                    <i className="icon-shine"></i>
                  </span>
                  <span
                    className="mx-2 svg-height hover-effect"
                    style={{ padding: "7.5px 9px" }}
                  >
                    <i className="icon-settings"></i>
                  </span>
                  <span className="mx-2 hover-effect">
                    <i className="icon-settings"></i>
                  </span>
                </div>
                <Button
                  color="theme-primary"
                  onClick={() =>
                    handleUserStatusUpdate(item, !item?.user_isactive)
                  }
                  className="btn  btn-sm btn-outline-theme-default btn-primary"
                >
                  {item?.user_isactive ? "De-Activate" : "Activate"}
                </Button>
                <Button
                  color="theme-danger"
                  onClick={() => handleUserDelete(item)}
                  className="btn btn-sm m-1 btn-outline-danger btn"
                >
                  Delete
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
      {/* {toggleVacationPopup && (
        <VacationsPopup onclose={handleClosePopup} user={userSelected} />
      )} */}
    </>
  );
}
