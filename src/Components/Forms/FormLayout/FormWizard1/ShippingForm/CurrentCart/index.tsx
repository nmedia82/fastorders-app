import React from 'react'
import { Col, Table } from 'reactstrap'
import { H3 } from '../../../../../../AbstractElements'
import { CurrentCartTitle } from '../../../../../../Utils/Constants'
import { currentCartTableFooterData } from '../../../../../../Data/Forms/FormLayout'
import CurrentCartTableBody from './CurrentCartTableBody'

export default function CurrentCart() {
    return (
        <Col xl={4}>
            <div className="shipping-info">
                <H3>{CurrentCartTitle}</H3>
                <div className="overflow-auto custom-scrollbar">
                    <Table striped>
                        <thead>
                            <tr>
                                <th scope="col">{'Product'}</th>
                                <th scope="col">{'Product Detail'}</th>
                                <th scope="col">{'Price'}</th>
                            </tr>
                        </thead>
                        <CurrentCartTableBody />
                        <tfoot>
                            {currentCartTableFooterData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.footerTittle}</td>
                                    <td colSpan={2}>{'$'}{data.price} </td>
                                </tr>
                            ))}
                        </tfoot>
                    </Table>
                </div>
            </div>
        </Col>
    )
}
