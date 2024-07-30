import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Twitter } from 'react-feather'
import { SocialLinksProp } from '../../../../../Types/Others.type'
import { H6, P } from '../../../../../AbstractElements'
import { CreateAccount, FacebookLink, LinkedIn, SignInWith, TwitterLink } from '../../../../../Utils/Constants'

export default function SocialLinks({ logtext, btntext }: SocialLinksProp) {
    return (
        <>
            <H6 className="text-muted mt-4 or">{SignInWith}</H6>
            <div className="social mt-4">
                <div className="btn-showcase">
                    <Link to="https://www.linkedin.com/login" className='btn btn-light me-1' target='_blank'>
                        <Linkedin className='txt-linkedin' /> {LinkedIn}
                    </Link>
                    <Link to="https://twitter.com/login?lang=en" className='btn btn-light me-1' target='_blank'>
                        <Twitter className='txt-twitter' /> {TwitterLink}
                    </Link>
                    <Link to="https://www.facebook.com/" className='btn btn-light' target='_blank'>
                        <Facebook className='txt-fb' /> {FacebookLink}
                    </Link>
                </div>
            </div>
            <P className="mt-4 mb-0 text-center">
                {logtext ? logtext : "Don't have account?"}
                {!logtext && !btntext ? (
                    <Link className="ms-2" to={`${process.env.PUBLIC_URL}/auth/sign_up`}>{CreateAccount}</Link>
                ) : (
                    <Link to={`${process.env.PUBLIC_URL}/auth/login`} className='ms-2'>{btntext}</Link>
                )}
            </P>
        </>
    )
}
