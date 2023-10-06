// ListFilm.jsx
import { useEffect, useState } from "react";
import { Container, InputGroup, Form, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getMovieList, BaseImgUrl, searchMovie } from "../api";

function ListFilm() {
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const handleDetailClick = (movieId) => {
    navigate(`/detail/${movieId}`);
  };

  const PopularMoviesList = () => {
    return popularMovies.map((movie, i) => (
      <Col md="3" key={i}>
        <Card className="mt-3 p-1">
          <Card.Img variant="top" src={`${BaseImgUrl}/${movie.poster_path}`} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.release_date}</Card.Text>
            <Card.Text className="fs-5 fw-bold text-danger">{movie.vote_average.toFixed(1)}</Card.Text>
            <Button variant="danger" onClick={() => handleDetailClick(movie.id)}>Detail Film</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <div className="bg">
      <Container>
        <div className="header">
          <Row>
            <Col md="4 text-white">
              <h1>Populer Movie</h1>
            </Col>
            <Col md="4">
              <InputGroup>
                <Form.Control
                  placeholder="Cari Film Kesukaan mu"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="Movie-search"
                  onChange={({ target }) => search(target.value)}
                />
                <Button variant="danger" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Col>
            <Col className="text-end text-danger fs-5 fw-bold">
              <p>Show More {">>"}</p>
            </Col>
          </Row>
          <div>
            <Row className="justify-content-center mt-5 text-center">
              <PopularMoviesList />
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ListFilm;
