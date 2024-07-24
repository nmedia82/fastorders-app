import React from 'react'
import { Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigurationProps } from '../../../../Types/Layout.type';
import { Cancel, ConfigurationTitle, CopyTextButton } from '../../../../Utils/Constants';
import { Btn, P } from '../../../../AbstractElements';
import ConfigDB from '../../../../Config/ThemeConfig';
import ConfigurationContent from './ConfigurationContent';

export default function Configuration({ modal, toggle }: ConfigurationProps) {
    const handleCopy = () => {
        toast.success("Code Copied to clipboard !", {
            position: toast.POSITION.BOTTOM_RIGHT,
        })
    }
    return (
        <Modal isOpen={modal} toggle={toggle} className="modal-body" centered={true}>
            <ModalHeader toggle={toggle}>{ConfigurationTitle}</ModalHeader>
            <ModalBody>
                <Container fluid={true} className="bd-example-row">
                    <Row>
                        <P>{"To replace our design with your desired theme. Please do configuration as mention"}</P>
                        <P>
                            <b> {"Path : src > Config > ThemeConfig.tsx "}</b>
                        </P>
                    </Row>
                    <ConfigurationContent />
                </Container>
            </ModalBody>
            <ModalFooter>
                <CopyToClipboard text={JSON.stringify(ConfigDB)}>
                    <Btn color="primary" className="notification" onClick={handleCopy}>{CopyTextButton}</Btn>
                </CopyToClipboard>
                <Btn color="secondary" onClick={toggle}>{Cancel}</Btn>
            </ModalFooter>
        </Modal>
    )
}

