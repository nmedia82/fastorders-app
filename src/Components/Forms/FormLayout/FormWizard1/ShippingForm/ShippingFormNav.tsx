import React from 'react'
import { VerticalWizardNavProps } from '../../../../../Types/Forms.type'
import { Nav, NavLink } from 'reactstrap'
import { shippingFormNav } from '../../../../../Data/Forms/FormLayout'
import { H6 } from '../../../../../AbstractElements'

export default function ShippingFormNav({ activeCallBack, steps }: VerticalWizardNavProps) {
    return (
        <Nav className="horizontal-options shipping-options" pills>
            {shippingFormNav.map((data) => (
                <NavLink key={data.id} className={`b-r-0 ${steps === data.id ? "active" : ''}`} onClick={() => activeCallBack(data.id)}>
                    <div className="cart-options">
                        <div className="stroke-icon-wizard">
                            <i className={`fa fa-${data.icon}`} />
                        </div>
                        <div className="cart-options-content">
                            <H6>{data.title}</H6>
                        </div>
                    </div>
                </NavLink>
            ))}
        </Nav>
    )
}
