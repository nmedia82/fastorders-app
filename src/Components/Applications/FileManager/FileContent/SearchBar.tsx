import React, { ChangeEvent } from 'react'
import { Form, FormGroup, Input } from 'reactstrap';
import { FileSearchBarProps } from '../../../../Types/FileManager.type';

export default function SearchBar({ searchFile, setSearchFile }: FileSearchBarProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchFile(e.target.value);
    };
    return (
        <Form className="form-inline">
            <FormGroup className="mb-0 d-flex">
                <i className="fa fa-search" />
                <Input type="text" placeholder="Search..." plaintext onChange={handleChange} value={searchFile} />
            </FormGroup>
        </Form>
    )
}
