import React from 'react'
import { Container, Row } from 'reactstrap'
import CommonButtons from './Common/CommonButtons'
import { BoldBorderOutlineButtonsTitle, ButtonSizesTitle, DefaultButtonTitle, DisabledButtonsTitle, IconsButtonsTitle, OutlineButtonSizesTitle, OutlineRoundedButtonsTitle, OutlineRoundedSizesTitle, RoundedButtonsTitle, RoundedSizesTitle, SquareButtonsTitle } from '../../../Utils/Constants'
import { boldBorderOutlineButtonsData, boldBorderOutlineButtonsSubTitle, buttonSizesData, buttonSizesSubTitle, defaultButtonData, defaultButtonSubTitle, disabledButtonSubTitle, disabledButtonsData, iconsButtonSubTitle, iconsButtonsData, outlineButtonSizesData, outlineRoundedButtonsData, outlineRoundedButtonsSubTitle, outlineRoundedSizesData, roundedButtonsData, roundedButtonsSubTitle, roundedSizesData, squareButtonsData, squareButtonsSubTitle } from '../../../Data/Buttons/DefaultStyle'
import ButtonGroupCard from './ButtonGroup'
import BlockLevelButtons from './BlockLevelButtons'
import ButtonVariations from './ButtonVariations'
import RadioCheckboxGroup from './RadioCheckboxGroup'
import GradientButtons from './GradientButtons'

export default function DefaultStyleContainer() {
    
    return (
        <Container fluid>
            <Row>
                <CommonButtons md={6} commonButtonsData={squareButtonsData} title={SquareButtonsTitle} subTitle={squareButtonsSubTitle} />
                <CommonButtons md={6} commonButtonsData={defaultButtonData} title={DefaultButtonTitle} subTitle={defaultButtonSubTitle} />
                <CommonButtons md={6} bodyClass='align-items-center buttons-box' commonButtonsData={buttonSizesData} title={ButtonSizesTitle} subTitle={buttonSizesSubTitle} />
                <CommonButtons md={6} bodyClass='align-items-center' commonButtonsData={outlineButtonSizesData} title={OutlineButtonSizesTitle} subTitle={buttonSizesSubTitle} />
                <CommonButtons md={6} bodyClass='buttons-box' commonButtonsData={roundedButtonsData} title={RoundedButtonsTitle} subTitle={roundedButtonsSubTitle} />
                <CommonButtons md={6} commonButtonsData={outlineRoundedButtonsData} title={OutlineRoundedButtonsTitle} subTitle={outlineRoundedButtonsSubTitle} />
                <CommonButtons md={6} bodyClass='align-items-center' commonButtonsData={roundedSizesData} title={RoundedSizesTitle} subTitle={buttonSizesSubTitle} />
                <CommonButtons md={6} bodyClass='align-items-center' commonButtonsData={outlineRoundedSizesData} title={OutlineRoundedSizesTitle} subTitle={buttonSizesSubTitle} />
                <CommonButtons md={6} commonButtonsData={disabledButtonsData} title={DisabledButtonsTitle} subTitle={disabledButtonSubTitle} />
                <CommonButtons md={6} bodyClass='icon-button' commonButtonsData={iconsButtonsData} title={IconsButtonsTitle} subTitle={iconsButtonSubTitle} />
                <ButtonGroupCard/>
                <BlockLevelButtons/>
                <ButtonVariations/>
                <CommonButtons xs={12} commonButtonsData={boldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsTitle} subTitle={boldBorderOutlineButtonsSubTitle} />
                <RadioCheckboxGroup/>
                <GradientButtons/>
            </Row>
        </Container>
    )
}
