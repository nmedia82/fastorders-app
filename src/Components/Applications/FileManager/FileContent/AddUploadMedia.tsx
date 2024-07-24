import React from 'react'
import { Form, Input } from 'reactstrap';
import { PlusSquare, Upload } from 'react-feather';
import { AddUploadMediaProps } from '../../../../Types/FileManager.type';
import { Btn } from '../../../../AbstractElements';

export default function AddUploadMedia({ onFileChange, onFileUpload }: AddUploadMediaProps) {
    const getFile = () => {
        const fileInput = document.getElementById("upfile") as HTMLInputElement | null;
        if (fileInput) {
            fileInput.click();
        }
    };
    return (
        <div className="flex-grow-1 file-buttons">
            <Form className="d-inline-flex">
                <Btn color="primary" onClick={getFile}>
                    <PlusSquare /> {'Add New'}
                </Btn>
                <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
                    <Input id="upfile" multiple type="file" onChange={(event) => onFileChange(event)} />
                </div>
            </Form>
            <Btn color="primary" className='ms-2' outline onClick={onFileUpload}>
                <Upload /> {'Upload'}
            </Btn>
        </div>
    )
}
