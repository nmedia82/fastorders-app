import { Col, Form, Row } from "reactstrap";
import { H6, LI, UL } from "../../../../../AbstractElements";
import { productIconList } from "../../../../../Pages/Common/Product";

export default function SocialIcons() {
  return (
    <Row className="g-2">
      <Col md={4}>
        <H6 className="product-title">{"Share it"}</H6>
      </Col>
      <Col md={8}>
        <div className="product-icon">
          <UL className="simple-list flex-row product-social">
            {productIconList.map((item) => (
              <LI className="d-inline-block" key={item.id}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  <i className={`fa fa-${item.icon}`} />
                </a>
              </LI>
            ))}
          </UL>
          <Form className="d-inline-block f-right" />
        </div>
      </Col>
    </Row>
  );
}
