import React, { Fragment } from 'react'
import { LI, P } from '../../../../../AbstractElements'
import { Input, Label } from 'reactstrap'
import { variationSwitchesData1 } from '../../../../../Data/Forms/FormWidgets'

export default function SkewedFlipSwitch() {
    return (
        <>
            {variationSwitchesData1.map((data) => (
                <Fragment key={data.id}>
                    <LI className="tg-list-item">
                        <Input className={`tgl tgl-${data.class}`} id={`cb${data.id}`} type="checkbox" />
                        <Label className="tgl-btn text-white" data-tg-off={data.off} data-tg-on={data.on} htmlFor={`cb${data.id}`} />
                    </LI>
                    <LI><P>{data.text}</P></LI>
                </Fragment>
            ))}
        </>
    )
}
