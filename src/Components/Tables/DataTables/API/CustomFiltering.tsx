import React, { ChangeEvent, useState } from 'react'
import { Card, CardBody, Col, Input, Table } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { FilterDataTableProp } from '../../../../Types/Tables.type';
import { customFilteringSearchSubTitle, filterDataTableColumns, filterDataTableData } from '../../../../Data/Tables/DataTables/API';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { CustomFilteringTitle } from '../../../../Utils/Constants';
import FilterComponent from '../Common/FilterComponent';

export default function CustomFiltering() {
    const [filterText, setFilterText] = useState('');
    const [first, setfirst] = useState<FilterDataTableProp[]>(filterDataTableData);
    const [value, setValue] = useState({ minValue: 0, maxValue: 0 });
    const filteredData = (event: ChangeEvent<HTMLInputElement>) => {
        setValue({ ...value, [event.target.name]: event.target.value });
        const filteredData = filterDataTableData.filter((item) => {
            const age = item.age;
            return age >= 30 && age <= 40;
        });
        setfirst(filteredData);
    };
    const filteredItems: FilterDataTableProp[] = first.filter(
        (item: FilterDataTableProp) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col sm={12}>
            <Card>
                <CommonCardHeader headClass='pb-0 card-no-border' title={CustomFilteringTitle} subTitle={customFilteringSearchSubTitle} />
                <CardBody>
                    <div className="table-responsive dataTables_wrapper me-0">
                        <Table>
                            <tbody className="dataTables_filter">
                                <tr><td>{'Minimum age:'}</td>
                                    <td><Input type="search" name="minValue" onChange={filteredData} /></td>
                                </tr>
                                <tr><td>{'Maximum age:'}</td>
                                    <td><Input type="search" name="maxValue" onChange={filteredData} /></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                    <div className="table-responsive user-datatable">
                        <DataTable className='custom-scrollbar' columns={filterDataTableColumns} data={filteredItems} pagination striped />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

