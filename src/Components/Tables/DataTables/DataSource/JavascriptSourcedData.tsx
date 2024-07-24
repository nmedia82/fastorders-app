import React, { useState } from 'react'
import { AjaxSourcedColumnsInterface } from '../../../../Types/Tables.type';
import { ajaxSourcedColumns, javaScriptTableSubTitle, javascriptSourcedData } from '../../../../Data/Tables/DataTables/DataSource';
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { JavascriptSourcedDataTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';
import DataTable from 'react-data-table-component';

export default function JavascriptSourcedData() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: AjaxSourcedColumnsInterface[] = javascriptSourcedData.filter(
        (item: AjaxSourcedColumnsInterface) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={JavascriptSourcedDataTitle} subTitle={javaScriptTableSubTitle} titleClass="mb-3" />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive">
                        <DataTable data={filteredItems} columns={ajaxSourcedColumns} pagination striped className='custom-scrollbar display w-100' />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
