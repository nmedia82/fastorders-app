import React, { useCallback, useState } from 'react'
import { Container, Row } from 'reactstrap';
import { fontAwesomeData } from '../../../Data/Icons/FontAwesomeIcon';
import FontAwesomeBody from './FontAwesomeBody';
import IconMarkUp from '../Common/IconMarkUp';

export default function FontAwesomeIconContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ icon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });
    const callback = useCallback((tag: string) => {
        setIconTag({
            iconTag: '<i className="fa fa-' + tag + '"></i>',
        });
        setIcon({
            icon: 'fa fa-' + tag + ' fa-2x',
        });
        setIconFClass({
            iconFClass: 'fa fa-' + tag,
        });
    }, []);
    return (
        <>
            <Container fluid>
                <Row>
                    {fontAwesomeData.map((data, i) => (
                        <FontAwesomeBody key={i} iconType={data.data} title={data.title} parentCallback={callback} />
                    ))}
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </>
    )
}
