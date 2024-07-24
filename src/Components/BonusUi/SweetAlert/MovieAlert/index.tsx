/* eslint-disable no-throw-literal */
import { Card, CardBody, Col } from 'reactstrap';
import Swal from 'sweetalert2';
import { Btn } from '../../../../AbstractElements';
import { movieAlertSubTitle } from '../../../../Data/BonusUi/SweetAlert';
import CommonCardHeader from '../../../../Utils/CommonComponents/CommonCardHeader';
import { MovieAlertTitle, MovieMode } from '../../../../Utils/Constants';

export default function MovieAlert() {
    const handleAlert = () => {
        Swal.fire({
            text: 'Search for a movie. e.g. "Harry Potter".',
            input: 'text',
            confirmButtonText: 'Search!'
        }).then((name) => {
            if (!name) throw null;

            return fetch(
                `https://itunes.apple.com/search?term=${name.value}&entity=movie`
            );
        })
            .then((results) => {
                return results.json();
            })
            .then((json) => {
                const movie = json.results[0];
                if (!movie) {
                    return Swal.fire("No movie was found!");
                }
                const name = movie.trackName;
                const imageURL = movie.artworkUrl100;
                Swal.fire({
                    imageUrl: imageURL,
                    title: 'Top result:',
                    text: name
                });
            })
            .catch((err) => {
                if (err) {
                    Swal.fire("Oh noes!", "The AJAX request failed!", "error");
                }
            });
    }
    return (
        <Col xxl={3} lg={4} sm={6} xs={12}>
            <Card className="height-equal title-line">
                <CommonCardHeader title={MovieAlertTitle} subTitle={movieAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Btn color='secondary' className="sweet-15" onClick={handleAlert}>{MovieMode}</Btn>
                </CardBody>
            </Card>
        </Col>
    )
}
