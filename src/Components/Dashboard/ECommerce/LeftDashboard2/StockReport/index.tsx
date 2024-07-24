import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { H2 } from '../../../../../AbstractElements'
import { StockReportTitle } from '../../../../../Utils/Constants'
import CommonDropdown from '../../../../../Utils/CommonComponents/CommonDropdown'
import { stockReportColumns, stockReportData, technologyDropdownList } from '../../../../../Data/Dashboard/ECommerce'

export default function StockReport() {
    return (
        <Col xl={7} md={6} sm={12} className="col-xl-100 order-xl-iii">
            <Card className="height-equal title-line overflow-hidden">
                <CardHeader className="card-no-border">
                    <div className="header-top">
                        <H2>{StockReportTitle}<span className="f-12 f-w-500 f-light d-block">{'Total 4,998 Items in stock'}</span></H2>
                        <div className="card-header-right-icon stock-report">
                            <CommonDropdown start dropDownList={technologyDropdownList} dropDownTitle='Category' caret />
                            <CommonDropdown start dropDownList={technologyDropdownList} dropDownTitle='View Stock' caret />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="p-0 stock-table custom-scrollbar">
                    <DataTable className='custom-scrollbar' data={stockReportData} columns={stockReportColumns} />
                </CardBody>
            </Card>
        </Col>
    )
}
