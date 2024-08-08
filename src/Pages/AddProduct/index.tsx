import React, { useCallback, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";
import { AddProducts } from "../../Utils/Constants";
import ProductFormNav from "./ProductFormNav";
import ProductTabContents from "./ProductTabContents";

export default function AddProduct() {
  const [steps, setSteps] = useState(1);
  const activeCallBack = useCallback((tab: number) => {
    setSteps(tab);
  }, []);

  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Card>
              <CommonCardHeader title={AddProducts} />
              <CardBody>
                <Row className="g-xl-5 g-3">
                  <ProductFormNav steps={steps} setSteps={setSteps} />
                  <ProductTabContents
                    steps={steps}
                    activeCallBack={activeCallBack}
                  />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
