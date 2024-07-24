import React from 'react'
import { Btn, LI, P, ProgressBar, UL } from '../../../../AbstractElements'
import { Database } from 'react-feather'

export default function Storage() {
    return (
        <UL className="simple-list">
            <LI>
                <Btn color="primary" outline>
                    <Database /> {'Storage'}
                </Btn>
                <div className="m-t-15">
                    <ProgressBar className="sm-progress-bar mb-1" color="primary" value={25} />
                    <P>{"25 GB of 100 GB used"}</P>
                </div>
            </LI>
        </UL>
    )
}
