import React, { useCallback, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import IconMarkUp from '../Common/IconMarkUp';
import CommonCardHeader from '../../../Utils/CommonComponents/CommonCardHeader';
import FeatherIconsBody from './FeatherIconsBody';
import { FeatherIconsTitle } from '../../../Utils/Constants';

export default function FeatherIconsContainer() {
    const [iconTag, setIconTag] = useState({ iconTag: '' });
    const [icon, setIcon] = useState({ feathericon: '' });
    const [iconFClass, setIconFClass] = useState({ iconFClass: '' });

    const getIconTag = useCallback((tag: string) => {
        setIconTag({
            iconTag: '<i data-feather="' + tag + '"></i>',
        });
        setIcon({
            feathericon: tag,
        });
        setIconFClass({
            iconFClass: tag,
        });
    }, [])
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={12}>
                        <Card className='title-line'>
                            <CommonCardHeader title={FeatherIconsTitle} />
                            <CardBody>
                                <FeatherIconsBody getIconTag={getIconTag} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
        </>
    )
}
