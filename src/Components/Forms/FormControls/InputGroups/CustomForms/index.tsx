import React from 'react'
import { Card, CardBody, Col, InputGroup, InputGroupText } from 'reactstrap'
import CommonCardHeader from '../../../../../Utils/CommonComponents/CommonCardHeader'
import { CareerSelectTitle, CustomFormsTitle, FavoriteChocolatesTitle, FavoriteColorsTitle, FavoriteItemsTitle, Options, Submit } from '../../../../../Utils/Constants'
import { careerSelectList, customFormsSubTitle, favoriteChocolatesData, favoriteColorsData, favoriteItemsData } from '../../../../../Data/Forms/FormControls'
import { Btn } from '../../../../../AbstractElements'
import CustomFormSelect from './CustomFormSelect'

export default function CustomForms() {
    return (
        <Col md={6}>
            <Card>
                <CommonCardHeader title={CustomFormsTitle} subTitle={customFormsSubTitle} />
                <CardBody className="common-flex main-custom-form">
                    <InputGroup>
                        <InputGroupText htmlFor="inputGroupSelect01">{Options}</InputGroupText>
                        <CustomFormSelect inputId='inputGroupSelect01' title={CareerSelectTitle} options={careerSelectList} />
                    </InputGroup>
                    <InputGroup>
                        <CustomFormSelect inputId='inputGroupSelect02' title={FavoriteColorsTitle} options={favoriteColorsData} />
                        <InputGroupText htmlFor="inputGroupSelect02">{Options}</InputGroupText>
                    </InputGroup>
                    <InputGroup>
                        <Btn color='secondary' outline><i className="icofont icofont-credit-card"></i></Btn>
                        <CustomFormSelect inputId='inputGroupSelect03' title={FavoriteChocolatesTitle} options={favoriteChocolatesData} />
                    </InputGroup>
                    <InputGroup>
                        <CustomFormSelect inputId='inputGroupSelect04' title={FavoriteItemsTitle} options={favoriteItemsData} />
                        <Btn color='success' outline>{Submit}</Btn>
                    </InputGroup>
                </CardBody>
            </Card>
        </Col>
    )
}
