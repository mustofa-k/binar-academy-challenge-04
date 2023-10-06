import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { BaseImgUrl, apikey } from "../api";
import axios from "axios";

function DetailPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getMovieDetails(movieId) {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: apikey,
          },
        });

        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    getMovieDetails(movieId);
  }, [movieId]);

  if (!movieDetails) {
    return (
      <div className="bg" style={{ height: "100vh" }}>
        <Container>
          <p>Loading...</p>
        </Container>
      </div>
    );
  }

  const posterUrl = `${BaseImgUrl}/${movieDetails.poster_path}`;

  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${posterUrl})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="bgc text-white p-4">
        <div className="conten container">
          <h1>{movieDetails.title}</h1>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>{movieDetails.overview}</p>
          <p className="fs-5 fw-bold text-danger">Rating: {movieDetails.vote_average.toFixed(1)}</p>
          <Link to="/" className="btn btn-danger mt-3">
            Lihat Trailer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
