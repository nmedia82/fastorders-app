import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import { FlagIconsTitle } from '../../../Utils/Constants';
import FlagIconBody from './FlagIconBody';
import IconMarkUp from '../Common/IconMarkUp';

export default function FlagIconsContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ icon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });

    const getIconTag = useCallback((tag: { abbreviation: string }) => {
        setIconTag({
            iconTag: '<i className="fi fi-' + tag.abbreviation + '"></i>',
        });
        setIcon({
            icon: 'fi fi-' + tag.abbreviation + ' fa-3x',
        });
        setIconFClass({
            iconFClass: 'fi fi-' + tag.abbreviation,
        });
    }, [])
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card className='title-line'>
                            <CommonCardHeader title={FlagIconsTitle} />
                            <CardBody>
                                <FlagIconBody getIconTag={getIconTag} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </>
    )
}
