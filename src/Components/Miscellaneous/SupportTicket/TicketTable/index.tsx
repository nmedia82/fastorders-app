import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import FilterComponent from './FilterComponent'
import { ticketTableColumns, ticketTableData } from '../../../../Data/Miscellaneous/SupportTicket';
import { SupportDataType } from '../../../../Types/Miscellaneous.type';

export default function TicketTable() {
    const [filterText, setFilterText] = useState('');
    const filteredItems: SupportDataType[] = ticketTableData.filter(
        (item: SupportDataType) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <div className="table-responsive overflow-hidden">
            <FilterComponent
                onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)}
                filterText={filterText}
            />
            <DataTable className='custom-scrollbar' data={filteredItems} columns={ticketTableColumns} pagination striped />
        </div>
    )
}
