import { useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CommonCardHeader from "../../Utils/CommonComponents/CommonCardHeader";
import AddNewModal from "./AddExpense";
import ListTable from "./ListTable";

export default function ExpenseTypes() {
  const [expenseType, setExpenseType] = useState();
  return (
    <div className="page-body main-project">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title="Expense Types" />
              <CardBody>
                <div className="list-product-header">
                  <div>
                    <div>
                      <AddNewModal
                        expenseType={expenseType}
                        setExpenseType={setExpenseType}
                      />
                    </div>
                  </div>
                </div>
                <ListTable setExpenseType={setExpenseType} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
