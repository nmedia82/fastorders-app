import React, { useEffect, useState } from "react";
import { Col, TabContent, TabPane } from "reactstrap";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getVendorID } from "../../../../services/helper";
import EmployeeDetails from "./EmployeeDetails";
import EmployeeGallery from "./EmployeeGallery";
import { addEmployee } from "../../../../ReduxToolkit/Reducers/AppReducer";

export default function EmployeeAdd({ steps, activeCallBack }) {
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    phone_number1: "",
    phone_number2: "",
    title: " ",
    address: " ",
    city: "",
    status: "active",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFormChange = (key, value) => {
    setEmployee((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async (Images) => {
    const vendor_id = getVendorID();
    try {
      const employeeData = {
        ...employee,
        vendor_id,
      };
      const result = await dispatch(addEmployee(employeeData)).unwrap();
      if (result.payload.success) {
        toast.success("Employee added successfully");
      }
    } catch (e) {
      toast.error(`Failed to save Employee: ${e.message}`);
      console.error(e);
    }
  };
  console.log(employee);
  return (
    <Col xxl={9} xl={8} className="box-col-8 position-relative">
      <TabContent activeTab={steps} className="p-b-50">
        <TabPane tabId={1}>
          <EmployeeDetails
            activeCallBack={activeCallBack}
            onFormChange={handleFormChange}
            employee={employee}
          />
        </TabPane>
        <TabPane tabId={2}>
          <EmployeeGallery
            activeCallBack={activeCallBack}
            onFormChange={handleFormChange}
            employee={employee}
            onSave={handleSave}
          />
        </TabPane>
      </TabContent>
    </Col>
  );
}
