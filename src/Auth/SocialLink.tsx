import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Twitter } from 'react-feather';
import { FacebookLink, LinkedIn, TwitterLink } from '../Utils/Constants';

export default function SocialLink() {
    return (
        <>
            <div className="social mt-4">
                <div className="btn-showcase">
                    <Link to="https://www.linkedin.com/login" className='btn btn-light me-1' target='_blank'>
                        <Linkedin className='txt-linkedin' /> {LinkedIn}
                    </Link>
                    <Link to="https://twitter.com/login?lang=en" className='btn btn-light m-0' target='_blank'>
                        <Twitter className='txt-twitter' /> {TwitterLink}
                    </Link>
                    <Link to="https://www.facebook.com/" className='btn btn-light' target='_blank'>
                        <Facebook className="txt-fb" /> {FacebookLink}
                    </Link>
                </div>
            </div>
        </>
    )
}
