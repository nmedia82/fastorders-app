import React, { Fragment } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DropdownWithHeader from '../../../../../Utils/CommonComponents/DropdownWithHeader'
import { UpcomingTransaction } from '../../../../../Utils/Constants'
import { monthlyDropdownList, transactionHeaderData } from '../../../../../Data/Dashboard/Default'
import { H6, LI, UL } from '../../../../../AbstractElements'
import SvgIcon from '../../../../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'

export default function TransactionHeader() {
    return (
        <Col md={6} className="order-md-i">
            <Card className="title-line">
                <DropdownWithHeader end caret headerClass='card-no-border transaction-header' heading={UpcomingTransaction} span='Special Discount' spanClass='f-light f-12 d-block f-w-500'
                    span2='60% OFF' span2Class='txt-primary' dropDownList={monthlyDropdownList} dropDownTitle='Weekly' />
                <CardBody className="pt-0 transaction-list">
                    <UL className='simple-list'>
                        {transactionHeaderData.map((item) => (
                            <Fragment key={item.id}>
                                <LI className="transaction-title"><span className="f-w-500 f-light f-12">{item.date}</span></LI>
                                {item.entries.map((list, index) => (
                                    <LI key={index}>
                                        <div className="transaction-content">
                                            <div className={`transaction-icon bg-light-${list.color}`}>
                                                <SvgIcon iconId={list.icon} />
                                            </div>
                                            <div className="transaction-right-content">
                                                <div>
                                                    <H6>{list.title}</H6>
                                                    <span className="f-light f-w-400">{list.status}</span>
                                                </div>
                                                <span className={`${list.amountColor ? list.amountColor : ''} f-w-500`}>{list.amount}</span>
                                            </div>
                                        </div>
                                    </LI>
                                ))}
                            </Fragment>
                        ))}
                    </UL>
                </CardBody>
            </Card>
        </Col>
    )
}
