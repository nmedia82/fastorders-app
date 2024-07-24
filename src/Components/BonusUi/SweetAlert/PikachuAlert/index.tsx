import React from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Swal from 'sweetalert2';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { Pikachu, PikachuAlertTitle } from '../../../../Utils/Constants';
import { pikachuAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert';
import { Btn } from '../../../../AbstractElements';

export default function PikachuAlert() {
    const handleAlert = () => {
        Swal.fire({
            text: 'A wild Pikachu appeared! What do you want to do?',
            showCancelButton: true,
            cancelButtonText: 'Run away!',
            confirmButtonText: 'Throw Pokeball!',
            denyButtonText: 'Defeat',
            showDenyButton: true,
            denyButtonColor: '#716add'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({ icon: 'success', title: 'Yeah!', text: 'Pikachu was caught!' });
                } else if (result.dismiss) {
                    Swal.fire({ text: 'Got away safely!' });
                } else if (result.isDenied) {
                    Swal.fire({ text: 'Pikachu fainted! You gained 500 XP!' });
                }
            });
    };
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={PikachuAlertTitle} subTitle={pikachuAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='warning' className="sweet-12" onClick={handleAlert}>{Pikachu}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}

