// export default ZMForm;
import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap"; // For grid layout (optional)

const NMForm = ({ formKey, formConfig, formData, onFormChange }) => {
  const [localFormData, setLocalFormData] = useState({});
  const [sameNumber, setSameNumber] = useState(false);

  // Update the local state when formData[formKey] from parent changes
  useEffect(() => {
    if (formData && formData[formKey]) {
      setLocalFormData(formData[formKey]);
      setSameNumber(formData[formKey]?.same_number || false);
    }
  }, [formData, formKey]);

  // Handle field changes by updating the local form data and notifying the parent
  const handleFieldChange = (key, value) => {
    const updatedFormData = { ...localFormData, [key]: value };
    if (key === "same_number") {
      setSameNumber(value);
      if (value) {
        updatedFormData["whatsapp_number"] = updatedFormData["phone_number"];
      } else {
        updatedFormData["whatsapp_number"] = "";
      }
    }
    setLocalFormData(updatedFormData);
    onFormChange(formKey, updatedFormData); // Notify the parent about the changes
  };
  // Handle changes for multi-select inputs
  const handleSelectChange = (selectedOptions, action) => {
    const updatedFormData = {
      ...localFormData,
      [action.name]: selectedOptions,
    };
    setLocalFormData(updatedFormData);
    onFormChange(formKey, updatedFormData); // Notify the parent about the changes
  };

  return (
    <Row>
      {formConfig.map((item, index) => (
        <Col key={index} md={item.col || 12}>
          {item.render(
            localFormData,
            handleFieldChange,
            sameNumber,
            handleSelectChange
          )}
        </Col>
      ))}
    </Row>
  );
};

export default NMForm;
