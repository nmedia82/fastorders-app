import React, { useCallback, useState } from 'react'
import { Container, Row } from 'reactstrap'
import IcoIconBody from './IcoIconBody';
import { icoIconData } from '../../../Data/Icons/IcoIcon';
import IconMarkUp from '../Common/IconMarkUp';

export default function IcoIconContainer() {
  const [iconTag, setIconTag] = useState({ iconTag: '' });
  const [icon, setIcon] = useState({ icon: '' });
  const [iconFClass, setIconFClass] = useState({ iconFClass: '' });
  const callback = useCallback((tag: string) => {
    setIconTag({
      iconTag: '<i className="icofont icofont-' + tag + '"></i>',
    });
    setIcon({
      icon: 'icofont icofont-' + tag + ' fa-2x',
    });
    setIconFClass({
      iconFClass: 'icofont icofont-' + tag,
    });
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          {icoIconData.map((data, i) => (
            <IcoIconBody key={i} iconType={data.icons} title={data.title} parentCallback={callback} />
          ))}
        </Row>
      </Container>
      <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
    </>
  )
}
