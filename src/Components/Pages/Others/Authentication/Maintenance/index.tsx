import React from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Btn, H2, H4, LI, UL } from '../../../../../AbstractElements'
import { MAINTENANCE } from '../../../../../Utils/Constants'

export default function Maintenance() {
    return (
        <div className="page-wrapper">
            <div className="error-wrapper maintenance-bg">
                <Container>
                    <UL className="simple-list maintenance-icons">
                        <LI><i className="fa fa-cog"></i></LI>
                        <LI><i className="fa fa-cog"></i></LI>
                        <LI><i className="fa fa-cog"></i></LI>
                    </UL>
                    <div className="maintenance-heading">
                        <H2 className="headline">{MAINTENANCE}</H2>
                    </div>
                    <H4 className="sub-content">{'Our Site is Currently under maintenance We will be back Shortly'}<br />{'Thank You For Patience'}</H4>
                    <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                        <Btn color='primary-gradien' size='lg' className="text-light">{'BACK TO HOME PAGE'}</Btn>
                    </Link>
                </Container>
            </div>
        </div>
    )
}
