import React from 'react'
import { Col, Input, Label } from 'reactstrap'
import { Collection, Group } from '../../../../../Utils/Constants'

export default function GroupCollection() {
    return (
        <>
            <Col md={6}>
                <Label>{Group}</Label>
                <Input type='select'>
                    <option value="bookmark">{'My Bookmarks'}</option>
                </Input>
            </Col>
            <Col md={6}>
                <Label>{Collection}</Label>
                <Input type='select'>
                    <option value="general">{'General'}</option>
                    <option value="fs">{'fs'}</option>
                </Input>
            </Col>
        </>
    )
}
