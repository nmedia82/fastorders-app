import React, { useState, useCallback } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { Btn } from "../../../../AbstractElements";
import SvgIcon from "../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";

export default function EmployeeDetails({
  activeCallBack,
  employee,
  onFormChange,
}) {
  const [borderTab, setBorderTab] = useState(1);
  const activeBorder = useCallback((val) => {
    setBorderTab(val);
  }, []);
  const { name } = employee;

  const handleNextButton = () => {
    if (name !== "") {
      activeCallBack(2);
    } else {
      return toast.error(
        "Please fill out details before moving on to the next step"
      );
    }
  };

  return (
    <div className="sidebar-body">
      <Form id="advance-tab">
        <Row className="g-2">
          {/* First Name */}
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>
                First Name <span className="txt-danger">{"*"}</span>
              </Label>
              <Input
                type="text"
                name="first_name"
                value={employee?.first_name}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>

          {/* Last Name */}
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>
                Last Name <span className="txt-danger">{"*"}</span>
              </Label>
              <Input
                type="text"
                name="last_name"
                value={employee?.last_name}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>

          {/* Phone Number 1 */}
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>Phone Number 1</Label>
              <Input
                type="text"
                name="phone_number1"
                value={employee?.phone_number1}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>

          {/* Phone Number 2 */}
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>Phone Number 2</Label>
              <Input
                type="text"
                name="phone_number2"
                value={employee?.phone_number2}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>

          {/* Title */}
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={employee?.title}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>

          {/* Address */}
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>Address</Label>
              <Input
                type="text"
                name="address"
                value={employee?.address}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>

          {/* City */}
          <Col xs={6} className="m-0">
            <FormGroup>
              <Label>City</Label>
              <Input
                type="text"
                name="city"
                value={employee?.city}
                onChange={(e) => onFormChange(e.target.name, e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>

      <div className="employee-buttons">
        <Btn color="transparent" onClick={handleNextButton}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SvgIcon iconId="front-arrow" /> {"Next"}
          </div>
        </Btn>
      </div>
    </div>
  );
}
