import React from 'react'
import { LI } from '../../../../AbstractElements';
import { Card, CardBody, Col, Form } from 'reactstrap';
import { Menu, MenuItem, Typeahead } from 'react-bootstrap-typeahead';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { MultipleSectionsHeadersTitle } from '../../../../Utils/Constants';
import { multipleSelectionSubTitle } from '../../../../Data/Forms/FormWidgets';
import { multipleWithHeadersData } from '../../../../Data/Forms/FormWidgets/Typeahead';

export default function MultipleSectionsWithHeaders() {
    const renderMenu = (results: any[], menuProps: any) => {
        const items = results.map((result, index) => {
            if (result.divider === true) {
                <LI key={index} role="separator" className="divider" />;
            }
            if (result.header === true) {
                <LI key={index} className="dropdown-header">{result.name}</LI>
            }
            return (
                <MenuItem key={index} option={result} position={index}>
                    <strong>{result.name}</strong>
                </MenuItem>
            );
        });
        return <Menu {...menuProps}>{items}</Menu>;
    };
    return (
        <Col sm={12} md={6}>
            <Card className='title-line'>
                <CommonCardHeader title={MultipleSectionsHeadersTitle} subTitle={multipleSelectionSubTitle} />
                <CardBody>
                    <div id="multiple-datasets">
                        <Form className="theme-form">
                            <div>
                                <Typeahead
                                    id='multi'
                                    options={multipleWithHeadersData}
                                    placeholder="NBA and NHL teams"
                                    renderMenu={renderMenu}
                                    labelKey='name'
                                />
                            </div>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
