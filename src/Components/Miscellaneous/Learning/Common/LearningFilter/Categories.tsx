import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Col, Collapse } from 'reactstrap';
import { Badges, Btn, H5, LI, UL } from '../../../../../AbstractElements';
import { CategoriesTitle, Href } from '../../../../../Utils/Constants';
import { ChevronDown, ChevronUp } from 'react-feather';
import { categoriesData } from '../../../../../Data/Miscellaneous/Learning';

export default function Categories() {
    const [isDesign, setIsDesign] = useState(true);
    const toggle = () => { setIsDesign(!isDesign); }
    return (
        <Col xl={12}>
            <Card>
                <CardHeader>
                    <H5 className='mb-0'>
                        <Btn color='transparent' className='btn-link d-flex align-items-center gap-2 justify-content-between' onClick={toggle}>{CategoriesTitle}
                            {isDesign ? <ChevronDown /> : <ChevronUp />}
                        </Btn>
                    </H5>
                </CardHeader>
                <CardBody>
                    <Collapse isOpen={isDesign}>
                        {categoriesData.map((data) => (
                            <div className={`categories ${data.id === 2 ? 'pt-0' : ''}`} key={data.id}>
                                <div className='learning-header'><span className='f-w-600'>{data.title}</span></div>
                                <UL className='simple-list'>
                                    {data.child.map((item) => (
                                        <LI key={item.id}>
                                            <a href={Href}>{item.text} </a>
                                            <Badges color='primary' className='pull-right'>{item.value}</Badges>
                                        </LI>
                                    ))}
                                </UL>
                            </div>
                        ))}
                    </Collapse>
                </CardBody>
            </Card>
        </Col>
    )
}
