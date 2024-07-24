import React from 'react'
import { Container, Row } from 'reactstrap'
import CommonTableComponent from './Common/CommonTableComponent'
import { AlertTitle, BadgesTitle, CheckboxTitle, Inputs, ProgressbarTitle, RadioButtonsTitle, Select, SwitchTitle, TooltipTriggersTitle, UIComponentsTitle } from '../../../../Utils/Constants'
import { alertTableData, badgesTableData, checkboxTableData, inputTableData, progressTableData, radioBoxTableData, selectBoxTableData, switchTableData, toolTipTriggersData, uiComponentTableData } from '../../../../Data/Tables/ReactstrapTables/TableComponents'

export default function TableComponentsContainer() {
    return (
        <Container fluid>
            <Row>
                <CommonTableComponent title={UIComponentsTitle} data={uiComponentTableData} />
                <CommonTableComponent title={AlertTitle} data={alertTableData} />
                <CommonTableComponent title={ProgressbarTitle} data={progressTableData} tableClass='checkbox-td-width' />
                <CommonTableComponent title={CheckboxTitle} data={checkboxTableData} tableClass='checkbox-td-width' />
                <CommonTableComponent title={RadioButtonsTitle} data={radioBoxTableData} tableClass='radio-first-col-width' />
                <CommonTableComponent title={Select} data={selectBoxTableData} tableClass='checkbox-td-width' />
                <CommonTableComponent title={Inputs} data={inputTableData} tableClass='checkbox-td-width' />
                <CommonTableComponent title={BadgesTitle} data={badgesTableData} />
                <CommonTableComponent title={TooltipTriggersTitle} data={toolTipTriggersData} />
                <CommonTableComponent title={SwitchTitle} data={switchTableData} />
            </Row>
        </Container>
    )
}
