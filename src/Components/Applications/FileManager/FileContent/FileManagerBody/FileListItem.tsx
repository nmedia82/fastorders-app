import React from 'react'
import { FileFolderItemProp } from '../../../../../Types/FileManager.type'
import { H6, LI, P } from '../../../../../AbstractElements'

export default function FileListItem({ item }: FileFolderItemProp) {
    return (
        <LI className='file-box'>
            <div className='file-top'>
                <i className={`fa fa-${item.icon}`}></i>
                <i className='fa fa-ellipsis-v f-14 ellips'></i>
            </div>
            <div className='file-bottom'>
                <H6>{item.name}</H6>
                <P className='mb-1'>{item.size}</P>
                <P>
                    <b>{'last open'} : </b>
                    {item.modify}
                </P>
            </div>
        </LI>
    )
}
