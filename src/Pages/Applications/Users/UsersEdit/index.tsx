/** @format */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  Form,
  Input,
  Label,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import CommonCardHeader from "../../../../Utils/CommonComponents/CommonCardHeader";
import classnames from "classnames";
import { Btn } from "../../../../AbstractElements";

// Define an interface for form data
interface FormData {
  home_video_url: string;
  shipping_charges: number;
  shipping_charges_label: string;
  logo_url: string;
  show_invoice_shipping: boolean;
  name: string;
  address: string;
  city: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  title: string;
  profile_address: string;
  profile_city: string;
}

export default function UserEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // Use the FormData interface

  const [activeTab, setActiveTab] = useState<string>("1");

  // Fix type for tab parameter
  const toggle = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const onEditSubmit = (data: FormData) => {
    console.log(data); // You can replace this with an API call to save form data.
    alert("Form is Submitted successfully");
  };

  return (
    <Col xl={8}>
      <Card>
        <CommonCardHeader titleClass="card-title mb-0" title={"Edit Profile"} />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => toggle("3")}
              style={{
                backgroundColor: activeTab === "3" ? "#f39324" : "transparent",
                color: activeTab === "3" ? "white" : "black",
              }}>
              Profile Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => toggle("1")}
              style={{
                backgroundColor: activeTab === "1" ? "#f39324" : "transparent",
                color: activeTab === "1" ? "white" : "black",
              }}>
              Vendor Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => toggle("2")}
              style={{
                backgroundColor: activeTab === "2" ? "#f39324" : "transparent",
                color: activeTab === "2" ? "white" : "black",
              }}>
              Business Info
            </NavLink>
          </NavItem>
        </Nav>

        <Form onSubmit={handleSubmit(onEditSubmit)}>
          <TabContent activeTab={activeTab}>
            {/* Profile Settings Tab */}
            <TabPane tabId="3">
              <CardBody>
                <Row className="g-3">
                  <Col md={6}>
                    <Label>First Name</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      {...register("first_name", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.first_name && "First name is required"}{" "}
                    </span>
                  </Col>
                  <Col md={6}>
                    <Label>Last Name</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                      {...register("last_name", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.last_name && "Last name is required"}{" "}
                    </span>
                  </Col>
                  <Col md={6}>
                    <Label>Phone Number</Label>
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="Phone Number"
                      {...register("phone_number", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.phone_number && "Phone number is required"}{" "}
                    </span>
                  </Col>
                  <Col md={6}>
                    <Label>Title</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Title"
                      {...register("title", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.title && "Title is required"}{" "}
                    </span>
                  </Col>
                  <Col md={6}>
                    <Label>Address</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Address"
                      {...register("profile_address", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.profile_address && "Address is required"}{" "}
                    </span>
                  </Col>
                  <Col md={6}>
                    <Label>City</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="City"
                      {...register("profile_city", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.profile_city && "City is required"}{" "}
                    </span>
                  </Col>
                </Row>
              </CardBody>
            </TabPane>

            {/* Vendor Settings Tab */}
            <TabPane tabId="1">
              <CardBody>
                <Row className="g-3">
                  <Col md={6}>
                    <Label>Home Video </Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="YouTube Video URL"
                      {...register("home_video_url", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.home_video_url && "Video URL is required"}{" "}
                    </span>
                  </Col>
                  <Col md={6}>
                    <Label>Shipping Charges</Label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Shipping Charges"
                      {...register("shipping_charges", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.shipping_charges &&
                        "Shipping charges are required"}{" "}
                    </span>
                  </Col>
                  <Col md={6}>
                    <Label>Shipping Charges Label</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Shipping Charges Label"
                      {...register("shipping_charges_label", {
                        required: true,
                      })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.shipping_charges_label &&
                        "Shipping label is required"}{" "}
                    </span>
                  </Col>
                  <Col md={6}>
                    <Label for="logo_url">Upload Logo </Label>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Enter logo URL"
                      {...register("logo_url", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.logo_url && "Logo URL is required"}
                    </span>
                  </Col>

                  <Col md={12} className="d-flex align-items-center">
                    <Label for="show_invoice_shipping" className="me-2">
                      Show Shipping Address on Invoice
                    </Label>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="show_invoice_shipping"
                        {...register("show_invoice_shipping")}
                      />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </TabPane>

            {/* Business Info Tab */}
            <TabPane tabId="2">
              <CardBody>
                <Row className="g-3">
                  <Col md={6}>
                    <Label>Business Name</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Business Name"
                      {...register("name", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.name && "Business name is required"}{" "}
                    </span>
                  </Col>
                  <Col md={6}>
                    <Label>Business Address</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Business Address"
                      {...register("address", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.address && "Business address is required"}{" "}
                    </span>
                  </Col>
                  <Col md={6}>
                    <Label>City</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="City"
                      {...register("city", { required: true })}
                    />
                    <span style={{ color: "red" }}>
                      {errors.city && "City is required"}{" "}
                    </span>
                  </Col>
                    {/* <Col md={6}>
                      <Label>Email</Label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                      />
                      <span style={{ color: "red" }}>
                        {errors.email && "Email is required"}{" "}
                      </span>
                    </Col> */}
                </Row>
              </CardBody>
            </TabPane>
          </TabContent>
          <CardFooter className="text-end">
            <Btn color="primary" attrBtn={{ type: "submit" }}>
              Update Profile
            </Btn>
          </CardFooter>
        </Form>
      </Card>
    </Col>
  );
}
