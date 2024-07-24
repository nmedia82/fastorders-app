import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Image } from '../../AbstractElements'
import { dynamicImage } from '../../Utils'
import SvgIcon from '../../Utils/CommonComponents/CommonIcons/CommonSvgIcons'
import { RootState } from '../../ReduxToolkit/Store'
import { setSideBarToggle } from '../../ReduxToolkit/Reducers/Layout/LayoutReducer'

export default function HeaderLogo() {
    const dispatch = useDispatch();
    const { sideBarToggle } = useSelector((state: RootState) => state.layout);
    const handleSidebarToggle = () => {
        dispatch(setSideBarToggle(!sideBarToggle));
    };

    return (
        <Col xs={'auto'} className="header-left-wrapper">
            <div className="header-logo-wrapper p-0 left-header">
                <div className="logo-wrapper">
                    <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                        <Image className="img-fluid" src={dynamicImage(`logo/logo_dark.png`)} alt="" />
                    </Link>
                </div>
            </div>
            <div className="toggle-sidebar" onClick={handleSidebarToggle}>
                <SvgIcon className='status_toggle sidebar-toggle' iconId='collapse-sidebar' />
            </div>
        </Col>
    )
}
