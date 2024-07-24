import React from 'react'
import { Container, Row } from 'reactstrap'
import DefaultCheckbox from './DefaultCheckbox'
import CustomCheckbox from './CustomCheckbox'
import DefaultRadio from './DefaultRadio'
import ImagesWithCheckbox from './ImagesWithCheckbox'
import ImagesWithRadio from './ImagesWithRadio'
import CustomRadio from './CustomRadio'
import DefaultSwitches from './DefaultSwitches'
import InlineInputTypes from './InlineInputTypes'
import AnimatedButtons from './AnimatedButtons'
import BasicRadioAndCheckbox from './BasicRadioAndCheckbox'
import RadioToggleButtons from './RadioToggleButtons'
import OutlinedCheckboxStyles from './OutlinedCheckboxStyles'

export default function CheckboxAndRadioContainer() {
  return (
    <Container fluid>
        <Row>
            <DefaultCheckbox/>
            <CustomCheckbox/>
            <DefaultRadio/>
            <ImagesWithCheckbox/>
            <ImagesWithRadio/>
            <CustomRadio/>
            <DefaultSwitches/>
            <InlineInputTypes/>
            <AnimatedButtons/>
            <BasicRadioAndCheckbox/>
            <RadioToggleButtons/>
            <OutlinedCheckboxStyles/>
        </Row>
    </Container>
  )
}
