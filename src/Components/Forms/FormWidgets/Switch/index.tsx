import React from 'react'
import { Container, Row } from 'reactstrap'
import CustomSwitch from './CustomSwitch'
import IconUncheckedBorderSwitch from './IconUncheckedBorderSwitch'
import DisabledOutlineSwitch from './DisabledOutlineSwitch'
import VariationOfSwitches from './VariationOfSwitches'
import SwitchSizingIcons from './SwitchSizingIcons'

export default function SwitchContainer() {
  return (
    <Container fluid>
      <Row>
        <CustomSwitch />
        <IconUncheckedBorderSwitch />
        <DisabledOutlineSwitch />
        <VariationOfSwitches />
        <SwitchSizingIcons />
      </Row>
    </Container>
  )
}
