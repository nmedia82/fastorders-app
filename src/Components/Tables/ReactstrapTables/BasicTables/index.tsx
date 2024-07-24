import React from 'react'
import { Container, Row } from 'reactstrap'
import BasicTableWithBorder from './BasicTableWithBorder'
import InverseTable from './InverseTable'
import HoverableRows from './HoverableRows'
import InverseTablePrimary from './InverseTablePrimary'
import CaptionTable from './CaptionTable'
import TableHeadOptions from './TableHeadOptions'
import StripedRowInverseTable from './StripedRowInverseTable'
import BreckpointSpecific from './BreckpointSpecific'
import ResponsiveLightBackground from './ResponsiveLightBackground'
import SizingTables from './SizingTables'
import CustomColorHoverStripped from './CustomColorHoverStripped'
import DashedBorder from './DashedBorder'

export default function BasicTablesContainer() {
    return (
        <Container className='basic_table' fluid>
            <Row>
                <BasicTableWithBorder/>
                <InverseTable/>
                <HoverableRows/>
                <InverseTablePrimary/>
                <CaptionTable/>
                <TableHeadOptions/>
                <StripedRowInverseTable/>
                <BreckpointSpecific/>
                <ResponsiveLightBackground/>
                <SizingTables/>
                <CustomColorHoverStripped/>
                <DashedBorder/>
            </Row>
        </Container>
    )
}
