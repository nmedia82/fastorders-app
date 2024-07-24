import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DropdownWithHeader'
import { RecentOrders } from '../../../../../Utils/Constants'
import { recentOrderColumns, recentOrderData, technologyDropdownList } from '../../../../../Data/Dashboard/ECommerce'

export default function RecentOrder() {
    return (
        <Col xl={9} md={8} className="col-xl-100 order-xl-ii">
            <Card className="height-equal title-line overflow-hidden">
                <DropdownWithHeader start caret headerClass='card-no-border' heading={RecentOrders} headerIconClass='recent-order-header'
                    dropDownTitle='Generate Report' dropDownList={technologyDropdownList} />
                <CardBody className="project-datatable p-0 order-tables custom-scrollbar">
                    <DataTable className='custom-scrollbar' data={recentOrderData} columns={recentOrderColumns} />
                </CardBody>
            </Card>
        </Col>
    )
}
