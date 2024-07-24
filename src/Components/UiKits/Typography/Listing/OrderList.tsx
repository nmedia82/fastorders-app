import React from 'react'
import { Col } from 'reactstrap'
import { H2, LI, OL } from '../../../../AbstractElements'
import { Accordion, Alert, Animations, Avatars, BonusUi, Dropdown, Grid, OrderListTitle, Tabs, TagPills, Typography, UIKits } from '../../../../Utils/Constants'

export default function OrderList() {
    return (
        <Col md={6} xxl={4}>
            <div className='card-wrapper border rounded-3 h-100 bg-warning-light'>
                <H2 className="sub-title fw-bold">{OrderListTitle}</H2>
                <OL className='simple-list'>
                    <LI>{UIKits}</LI>
                    <LI>{BonusUi}</LI>
                    <LI>{Animations}</LI>
                    <LI>
                        <OL>
                            <LI>{Typography}</LI>
                            <LI>{Avatars}</LI>
                            <LI>{Grid}</LI>
                            <LI>{TagPills}</LI>
                            <LI>{Alert}</LI>
                        </OL>
                    </LI>
                    <LI>{Dropdown}</LI>
                    <LI>{Tabs}</LI>
                    <LI>{Accordion}</LI>
                </OL>
            </div>
        </Col>
    )
}
