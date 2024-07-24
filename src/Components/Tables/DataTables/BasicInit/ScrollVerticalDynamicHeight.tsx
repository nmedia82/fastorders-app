import React, { useState } from 'react'
import { ScrollVerticalType } from '../../../../Types/Tables.type';
import { dynamicHeightSubTitle, scrollVerticalDynamicHeightColumns, scrollVerticalDynamicHeightData } from '../../../../Data/Tables/DataTables/BasicInit';
import { Card, CardBody, Col } from 'reactstrap';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { ScrollVerticalDynamicHeightTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';
import DataTable from 'react-data-table-component';

export default function ScrollVerticalDynamicHeight() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: ScrollVerticalType[] = scrollVerticalDynamicHeightData.filter(
        (item: ScrollVerticalType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass="pb-0 card-no-border" title={ScrollVerticalDynamicHeightTitle} subTitle={dynamicHeightSubTitle} />
                <CardBody>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive user-datatable">
                        <DataTable data={filteredItems} columns={scrollVerticalDynamicHeightColumns} striped={true} fixedHeader fixedHeaderScrollHeight="40vh" className="display dataTable custom-scrollbar" />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

