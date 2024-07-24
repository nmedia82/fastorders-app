import React from 'react'
import { FileFolderItemProp } from '../../../../../Types/FileManager.type'
import { H6, LI, P } from '../../../../../AbstractElements'

export default function FolderListItem({ item }: FileFolderItemProp) {
    return (
        <LI className="folder-box">
            <div className="d-flex">
                <i className={`fa fa-${item.folderClass} f-36 txt-warning`} />
                <div className="flex-grow-1 ms-3">
                    <H6 className='mb-0'>{item.title}</H6>
                    <P>{item.folderSize}</P>
                </div>
            </div>
        </LI>
    )
}
