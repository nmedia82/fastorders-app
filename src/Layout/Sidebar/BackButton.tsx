import React from 'react'
import { Link } from 'react-router-dom'
import { Image, LI } from '../../AbstractElements'
import { dynamicImage } from '../../Utils'

export default function BackButton() {
    return (
        <LI className="back-btn">
            <Link to={`${process.env.PUBLIC_URL}/pages/sample_page`}>
                <Image className="img-fluid" src={dynamicImage(`logo/logo-icon.png`)} alt="" />
            </Link>
            <div className="mobile-back text-end">
                <span>{'Back'}</span>
                <i className="fa fa-angle-right ps-2"></i>
            </div>
        </LI>
    )
}
