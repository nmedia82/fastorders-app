import React, { ChangeEvent, useState } from 'react'
import { Card, CardHeader, Col } from 'reactstrap';
import { toast } from 'react-toastify';
import { filesListData } from '../../../../Data/Applications/FileManager';
import SearchBar from './SearchBar';
import AddUploadMedia from './AddUploadMedia';
import FileManagerBody from './FileManagerBody';
import FileListItem from './FileManagerBody/FileListItem';

export default function FileContent() {
    const [searchFile, setSearchFile] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [myFile, setMyFile] = useState(filesListData);

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };
    const onFileUpload = () => {
        let myFiles = [...myFile];
        if (selectedFile !== null) {
            myFiles.push({
                id: myFile.length + 1,
                name: selectedFile.name,
                size: `${selectedFile.size}`,
                modify: `${selectedFile.lastModified}`,
                icon: "fa fa-file-text-o txt-info",
                folderClass: "fa fa-folder f-36 txt-warning",
                title: "Endless Admin",
                folderSize: "101 files, 10MB"
            });
            setMyFile(myFiles);
            toast.success("File Upload Successfully !");
        } else {
            toast.error("Please Select at least one file !");
        }
    };

    const fileList = myFile
        .filter((data) => searchFile === '' || data.name.toLowerCase().includes(searchFile.toLowerCase()))
        .map((item, i) => <FileListItem key={i} item={item} />);

    return (
        <Col xl={9} md={12} className="box-col-12">
            <div className="file-content">
                <Card>
                    <CardHeader>
                        <div className="d-flex file-flex">
                            <SearchBar searchFile={searchFile} setSearchFile={setSearchFile} />
                            <AddUploadMedia onFileChange={onFileChange} onFileUpload={onFileUpload} />
                        </div>
                    </CardHeader>
                    {fileList.length ? (
                        <FileManagerBody myFile={myFile} fileList={fileList} />
                    ) : (' Not Found ')}
                </Card>
            </div>
        </Col>
    )
}

