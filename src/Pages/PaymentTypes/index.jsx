import { useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";
import AddNewModal from "./AddPayment";
import ListTable from "./ListTable";

export default function PaymentTypes() {
  const [paymentType, setPaymentType] = useState();
  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title="Payment Types" />
              <CardBody>
                <div className="list-product-header">
                  <div>
                    <div>
                      <AddNewModal
                        paymentType={paymentType}
                        setPaymentType={setPaymentType}
                      />
                    </div>
                  </div>
                </div>
                <ListTable setPaymentType={setPaymentType} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
