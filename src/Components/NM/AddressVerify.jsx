import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Card,
} from "react-bootstrap";
import { SelectInput } from "./SelectInput";
import { getGoogleAddressRegions } from "../../Data/Google.Address.Regions";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const address_regions = getGoogleAddressRegions();

const AddressValidation = ({ address, onResultAccepted }) => {
  const [addressLine1, setAddressLine1] = useState("");
  const [cityStateZip, setCityStateZip] = useState("");
  const [formattedAddress, setFormattedAddress] = useState(null);
  const [geocode, setGeoCode] = useState({});
  const [countries] = useState([...address_regions]);
  const [country, setCountry] = useState("");
  const [validationResult, setValidationResult] = useState(null);
  const [error, setError] = useState(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (address) {
      setFormattedAddress(address.formatted_address);
      setGeoCode(address.geocode);
      setShowMap(true); // Show map if the existing address is provided
    }
  }, [address]);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const handleAddressLine1Change = (e) => {
    setAddressLine1(e.target.value);
  };

  const handleCityStateZipChange = (e) => {
    setCityStateZip(e.target.value);
  };

  const handleValidateAddress = async (e) => {
    e.preventDefault();
    setError(null);

    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    const requestBody = {
      address: {
        regionCode: country,
        addressLines: [addressLine1, cityStateZip],
      },
    };

    const validationUrl = `https://addressvalidation.googleapis.com/v1:validateAddress?key=${apiKey}`;

    try {
      const response = await fetch(validationUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok && data.result.verdict?.addressComplete) {
        setShowMap(true); // Show the map on button click
        setValidationResult(data.result);
        handleAccept(data.result);
      } else {
        setError("Address could not be verified. Please check and try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while verifying the address.");
    }
  };

  const handleAccept = (validated_results) => {
    if (validated_results) {
      const { address, geocode } = validated_results;

      const acceptedResult = {
        formatted_address: address.formattedAddress,
        country: address.postalAddress?.regionCode,
        post_code: address.postalAddress?.postalCode,
        city: address.postalAddress?.locality,
        address: address.postalAddress?.addressLines?.join(", ") || "", // Join address lines if they exist
        geocode: {
          latitude: geocode?.location?.latitude,
          longitude: geocode?.location?.longitude,
        },
      };

      setFormattedAddress(acceptedResult.formatted_address);
      setGeoCode(acceptedResult.geocode);

      onResultAccepted(acceptedResult);
    }
  };

  const handleRetry = () => {
    setValidationResult(null);
    setFormattedAddress(null);
    setGeoCode({});
    setShowMap(false); // Hide the map when retrying
  };

  return (
    <div
      style={{
        marginTop: "10px",
        marginBottom: "20px",
        padding: "10px",
        border: "1px dashed",
      }}
    >
      <Row className="justify-content-md-center">
        <Col md={6}>
          {!formattedAddress && (
            <Form onSubmit={handleValidateAddress}>
              <SelectInput
                name={"shop_country"}
                label={"Country"}
                placeholder={"Select Country"}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                options={countries.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.country}
                  </option>
                ))}
              />
              <Form.Group controlId="formAddressLine1" className="mt-3">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter street address"
                  value={addressLine1}
                  onChange={handleAddressLine1Change}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formCityStateZip" className="mt-3">
                <Form.Label>City, State, ZIP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city, state, ZIP"
                  value={cityStateZip}
                  onChange={handleCityStateZipChange}
                  required
                />
              </Form.Group>
            </Form>
          )}

          {error && (
            <Alert variant="danger" className="mt-4">
              {error}
            </Alert>
          )}

          {formattedAddress && (
            <Card>
              <Card.Body>
                <Card.Title>Validated Address</Card.Title>
                <Card.Text>
                  <strong>{formattedAddress}</strong>
                </Card.Text>
                <div className="mt-3">
                  <Button variant="warning" onClick={handleRetry}>
                    Change
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>

        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          {!showMap && (
            <Button
              variant="primary"
              type="submit"
              onClick={handleValidateAddress}
              className="mt-4"
            >
              Validate Address
            </Button>
          )}
          {showMap && isLoaded && formattedAddress && (
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "400px" }}
              center={{
                lat: geocode.latitude || 0,
                lng: geocode.longitude || 0,
              }}
              zoom={15}
            >
              <Marker
                position={{
                  lat: geocode.latitude || 0,
                  lng: geocode.longitude || 0,
                }}
              />
            </GoogleMap>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AddressValidation;
