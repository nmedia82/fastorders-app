import React, { useCallback, useState } from 'react'
import { NavCustomizerProps } from '../../../Types/Layout.type';
import { TabContent, TabPane } from 'reactstrap';
import { Btn, H5, P } from '../../../AbstractElements';
import Configuration from './ConfigurationModal';
import SidebarCusmizer from './SidebarCusmizer';

export default function TabCustomizer({ callbackNav, selected }: NavCustomizerProps) {
    const [modal, setModal] = useState(false);
    const toggle = useCallback(() => {
        setModal(!modal);
    }, [modal]);
    return (
        <TabContent activeTab={selected}>
            <div className="customizer-header">
                <i className="icofont-close icon-close" onClick={() => callbackNav("", false)}></i>
                <H5 className="f-w-700">{'Preview Settings'}</H5>
                <P className="mb-0">
                    {"Try It Real Time  "}
                    <i className="fa fa-thumbs-o-up txt-primary"></i>
                </P>
                <Btn color="primary" className="plus-popup mt-2" onClick={toggle}>
                    {'Configuration'}
                </Btn>
                <Configuration modal={modal} toggle={toggle} />
            </div>
            <div className="customizer-body custom-scrollbar">
                <TabPane tabId="sidebar-type"><SidebarCusmizer /></TabPane>
            </div>
        </TabContent>
    )
}
