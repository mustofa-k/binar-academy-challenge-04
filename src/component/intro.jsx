import { Container,Col, Button} from "react-bootstrap";
import'../App.css'

import { useNavigate } from 'react-router-dom';

function Intro() {
    const navigate = useNavigate();

    const goToCariFilmPage = () => {
        navigate('/cariFilm');
    }
  
    return ( 
        <>
        <Container>
            <Col className="content">
                <div className="Tittle text-white">
                    <h1>Temukan Film Terbaru dan Saksikan Petualangan Terbaik di Dunia Sinematik</h1>
                </div>
                <div className="desc text-white mt-3 mb-4">
                    <div className="text-white fs-6">Selalu Terhubung dengan Dunia Sinematik Terkini: Temukan Film Terbaru dan Saksikan Petualangan Terbaik di Layar Lebar. Jelajahi Kisah-Kisah Tak Terlupakan yang Akan Menghipnotis Anda!</div>
                </div>
                <Button variant="danger"  onClick={goToCariFilmPage}>lihat semua film</Button>
            </Col>
        </Container>
        </>
     );
}

export default Intro;