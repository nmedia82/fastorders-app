import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Card, CardBody, Col, Row, TabContent, TabPane } from "reactstrap";
import CommonCardHeader from "../../../Utils/CommonComponents/CommonCardHeader";
import CustomerNav from "./VerticalWizardNav";
import { Btn } from "../../../AbstractElements";
import YourInfoForm from "./CustomerForm";
import http from "../../../services/http";
import { getAPIURL, getVendorID } from "../../../services/helper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Loader from "../../../Layout/Loader";
import {
  addNewCustomer,
  setLoading,
  updateCustomer,
} from "../../../ReduxToolkit/Reducers/AppReducer";
import { useParams } from "react-router-dom";

export default function CustomerForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    address: "",
    city: "",
  });
  const [steps, setSteps] = useState(1);
  const [showFinish, setShowFinish] = useState(false);
  const activeCallBack = useCallback((tab: number) => {
    setSteps(tab);
  }, []);

  const { isLoading, vendorCustomers } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const { customer_id } = useParams();

  useEffect(() => {
    if (customer_id) {
      const found = vendorCustomers.find(
        (c: any) => c.id === parseInt(customer_id)
      );
      console.log(found);
      if (found) {
        setFormData((existing: any) => ({
          ...existing,
          ...found,
          full_name: `${found.first_name} ${found.last_name}`,
        }));
      }
    }
  }, [customer_id, vendorCustomers, setFormData]);

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

  const handleAddNew = async () => {
    try {
      const api_url = getAPIURL();
      const vendor_id = getVendorID();
      dispatch(setLoading(true));
      const { full_name, email, phone_number, address, city } = formData;
      if (full_name !== "" && email !== "" && address !== "" && city !== "") {
        const payload = { ...formData, vendor_id };
        const { data: customer } = await http.post(
          `${api_url}/customers`,
          payload
        );
        if (!customer.success) return toast.error(customer.data);

        toast.success("Customer Added");
        dispatch(addNewCustomer(customer.data));
      } else {
        return toast.error(
          "please fill out all the fields before moving on to the next step"
        );
      }
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleUpdate = async () => {
    try {
      const api_url = getAPIURL();
      const vendor_id = getVendorID();
      dispatch(setLoading(true));
      const { full_name, email, phone_number, address, city } = formData;
      if (full_name !== "" && email !== "" && address !== "" && city !== "") {
        const payload = { ...formData, vendor_id };
        const { data: customer } = await http.put(
          `${api_url}/customers/${customer_id}`,
          payload
        );
        if (!customer.success) return toast.error(customer.data);

        toast.success("Customer Updated");
        dispatch(updateCustomer(customer.data));
      } else {
        return toast.error(
          "please fill out all the fields before moving on to the next step"
        );
      }
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <Col md={12}>
      {isLoading && <Loader />}
      <Card className="title-line">
        <CommonCardHeader title={"Add Customer"} />
        <CardBody>
          <div className="vertical-main-wizard">
            <Row className="g-3">
              <Col xxl={3} xl={4} xs={12}>
                <CustomerNav steps={steps} activeCallBack={activeCallBack} />
              </Col>
              <Col xxl={9} xl={8} xs={12}>
                <TabContent activeTab={steps}>
                  <TabPane tabId={1}>
                    <YourInfoForm
                      formData={formData}
                      updateFormData={updateFormData}
                    />
                  </TabPane>
                </TabContent>
                <Col xs={12} className="text-end">
                  {customer_id ? (
                    <Btn
                      color={showFinish ? "success" : "primary"}
                      onClick={handleUpdate}
                    >
                      Update Customer
                    </Btn>
                  ) : (
                    <Btn
                      color={showFinish ? "success" : "primary"}
                      onClick={handleAddNew}
                    >
                      Add Customer
                    </Btn>
                  )}
                </Col>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
