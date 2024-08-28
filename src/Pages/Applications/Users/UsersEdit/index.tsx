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

// Define an interface for form data
interface FormData {
  home_video_url: string;
  shipping_charges: number;
  shipping_charges_label: string;
  logo_url: FileList;
  show_invoice_shipping: boolean;
  name: string;
  address: string;
  city: string;
  email: string;
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
              className={classnames({ active: activeTab === "1" })}
              onClick={() => toggle("1")}
              style={{
                backgroundColor: activeTab === "1" ? "#945bfa" : "transparent",
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
                backgroundColor: activeTab === "2" ? "#945bfa" : "transparent",
                color: activeTab === "1" ? "black" : "white",
              }}>
              Business Info
            </NavLink>
          </NavItem>
        </Nav>

        <Form onSubmit={handleSubmit(onEditSubmit)}>
          <TabContent activeTab={activeTab}>
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
                  <Col md={6}>
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
                  </Col>
                </Row>
              </CardBody>
            </TabPane>
          </TabContent>

          <CardFooter className="text-end">
            <button
              type="submit"
              className="btn "
              style={{ backgroundColor: "#945bfa", color: "white" }}>
              Update Profile
            </button>
          </CardFooter>
        </Form>
      </Card>
    </Col>
  );
}
