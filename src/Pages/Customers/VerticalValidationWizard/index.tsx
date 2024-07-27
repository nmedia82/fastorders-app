import React, { ChangeEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { Card, CardBody, Col, Row, TabContent, TabPane } from "reactstrap";
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader";
import { verticalValidationWizardSubTitle } from "../../../Data/Forms/FormLayout";
import { Previous, VerticalValidationWizardTitle } from "../../../Utils/Constants";
import CustomerNav from "./VerticalWizardNav";
import { Btn } from "../../../AbstractElements";
import YourInfoForm from "./YourInfoForm";

export default function CustomerForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number1: "",
    phone_number2: "",
    address: "",
    city: "",
    status: "",
  });
  const [steps, setSteps] = useState(1);
  const [showFinish, setShowFinish] = useState(false);
  const activeCallBack = useCallback((tab: number) => {
    setSteps(tab);
  }, []);
  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value =
      name === "rememberNextTime"
        ? event.target.checked
        : name === "documentationName"
        ? event.target.files && event.target.files[0].name
        : event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // const handleFinishButton = () => {
  //   return toast.success("Successfully Completed");
  // };
  const handleSubmitButton = () => {
    const { first_name, last_name, phone_number1, phone_number2, address, city, status } = formData;
    if (
      first_name !== "" &&
      last_name !== "" &&
      phone_number1 !== "" &&
      phone_number2 !== "" &&
      address !== "" &&
      city !== "" &&
      status !== ""
    ) {
      return toast.success("Successfully Completed");
    } else {
      return toast.error("please fill out all the fields before moving on to the next step");
    }
  };
  return (
    <Col md={12}>
      <Card className="title-line">
        <CommonCardHeader title={"Add Customers"} subTitle={verticalValidationWizardSubTitle} />
        <CardBody>
          <div className="vertical-main-wizard">
            <Row className="g-3">
              <Col xxl={3} xl={4} xs={12}>
                <CustomerNav steps={steps} activeCallBack={activeCallBack} />
              </Col>
              <Col xxl={9} xl={8} xs={12}>
                <TabContent activeTab={steps}>
                  <TabPane tabId={1}>
                    <YourInfoForm formData={formData} updateFormData={updateFormData} />
                  </TabPane>
                </TabContent>
                <Col xs={12} className="text-end">
                  <Btn color={showFinish ? "success" : "primary"} onClick={handleSubmitButton}>
                    {showFinish ? "Finish" : "Next"}
                  </Btn>
                </Col>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
