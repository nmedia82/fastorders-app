import React from "react";
import { Card, CardHeader, Col } from "reactstrap";
import { H2, H3 } from "../../../../AbstractElements";
import TotalOrderDropDown from "./OrdersDropdown";
import { dailyDropdownList } from "../../../../Data/Dashboard/Default";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchDashboardReports } from "../../../../ReduxToolkit/Reducers/AppReducer";

const TotalOrders = ({ colClass, total_orders }) => {
  const dispatch = useDispatch();
  const { currentRange } = useSelector((state) => state.app);

  return (
    <Col xl={3} sm={6} className={colClass ? colClass : ""}>
      <Card className="project-widget widget-1 title-line">
        <CardHeader className="card-no-border pb-100">
          <div className="header-top">
            <div>
              <H3 className="f-w-600">Total Orders</H3>
              <span className="f-12 f-light f-w-500">{currentRange}</span>
            </div>
            <div className="card-header-right-icon">
              <TotalOrderDropDown
                dropDownClass="icon-dropdown d-xxl-none1"
                dropDownIcon
                end
                dropDownList={dailyDropdownList}
                caret={true}
                onReportRangeChange={(range) =>
                  dispatch(fetchDashboardReports(range))
                }
              />
            </div>
          </div>
          <div className="widget-middle-content">
            <div className="d-flex align-items-center">
              <H2>{total_orders}</H2>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Col>
  );
};

export default TotalOrders;
