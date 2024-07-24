import React from 'react'
import { Nav, NavLink } from 'reactstrap'
import { VerticalWizardNavProps } from '../../../../../Types/Forms.type'
import { customNavData } from '../../../../../Data/Forms/FormLayout'
import { H6 } from '../../../../../AbstractElements'

export default function CustomNavComponent({ steps, activeCallBack }: VerticalWizardNavProps) {
    return (
        <Nav className="horizontal-options" pills>
            {customNavData.map((data) => (
                <NavLink key={data.id} className={steps === data.id ? "active" : ''} onClick={() => activeCallBack(data.id)}>
                    <div className="horizontal-wizard">
                        <div className="stroke-icon-wizard">
                            <i className={`fa fa-${data.icon}`} />
                        </div>
                        <div className="horizontal-wizard-content">
                            <H6>{data.title}</H6>
                        </div>
                    </div>
                </NavLink>
            ))}
        </Nav>
    )
}

