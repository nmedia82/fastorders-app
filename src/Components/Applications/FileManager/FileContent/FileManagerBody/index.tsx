import React from 'react'
import { CardBody } from 'reactstrap'
import { FileManagerBodyProps } from '../../../../../Types/FileManager.type'
import { H2, H6, P, UL } from '../../../../../AbstractElements'
import FolderListItem from './FolderListItem'

export default function FileManagerBody({ myFile, fileList }: FileManagerBodyProps) {
    return (
        <CardBody className="file-manager">
            <H2>{'All Files'}</H2>
            <P className="f-m-light mb-2">{'Recently opened files'}</P>
            <UL className="simple-list files list-group">{fileList}</UL>
            <H6 className="mt-4">{'Folders'}</H6>
            <UL className="simple-list folder flex-row">
                {myFile.map((item) => (
                    <FolderListItem key={item.id} item={item} />
                ))}
            </UL>
            <H6 className="mt-4">{'Files'}</H6>
            <UL className="simple-list files list-group">{fileList}</UL>
        </CardBody>
    )
}
