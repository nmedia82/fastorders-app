import React from 'react'
import { CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DropdownWithHeader'
import { TotalTransactions } from '../../../../../Utils/Constants'
import { dailyDropdownList, totalTransactionOption } from '../../../../../Data/Dashboard/Default'
import ReportContent from './ReportContent'
import { Btn, H5 } from '../../../../../AbstractElements'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'

export default function DiscountReport() {
    return (
        <Col xl={12} sm={6} className="col-xl-40 order-xl-ii discount-report">
            <DropdownWithHeader end headerClass='card-no-border' heading={TotalTransactions} span='Special Discount' spanClass='d-block f-w-500 f-light f-12'
                span2='60% OFF' span2Class='txt-primary' dropDownClass='icon-dropdown' dropDownIcon dropDownList={dailyDropdownList} />
            <CardBody className="transaction-report">
                <div className="total-transaction-wrapper">
                    <div id="total-transaction-chart">
                        <ReactApexChart type="bar" options={totalTransactionOption} series={totalTransactionOption.series} height={200} />
                    </div>
                </div>
                <ReportContent />
                <div className="report-button">
                    <div>
                        <H5 className="f-w-600">{'+95.62 % '}<span className="f-light f-12 f-w-500">{'Performance'}</span></H5>
                    </div>
                    <Btn color='primary' className="f-w-500 f-12">{'New report'}
                        <SvgIcon className='svg-sprite ms-1' iconId='logout'/>
                    </Btn>
                </div>
            </CardBody>
        </Col>
    )
}
