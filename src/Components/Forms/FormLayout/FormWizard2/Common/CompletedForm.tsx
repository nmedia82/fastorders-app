import React from 'react'
import { H6, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Utils'
import { SuccessfullyCompleted } from '../../../../../Utils/Constants'

export default function CompletedForm() {
    return (
        <div className="form-completed">
            <Image src={dynamicImage(`gif/successful.gif`)} alt="successful" />
            <H6>{SuccessfullyCompleted}</H6>
        </div>
    )
}
