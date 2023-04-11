import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Card = () => {
  const meteo = useSelector((state) => state.meteo.content);
  const icona = `https://openweathermap.org/img/w/${meteo.weather[0].icon}.png`;
  return (
    <Row className="justify-content-center align-items-center">
      <Col xs={12} lg={6} className="d-flex justify-content-center">
        <img src={icona} className="card-icon" alt="Weather" />
      </Col>
      <Col xs={12} lg={6} className="cardBg d-flex justify-content-center">
        <div className="card mb-3 border border-0">
          <div className="card-body text-center">
            <h1 className="card-title display-1">{meteo.name}</h1>
            <p className="card-text fs-3">{meteo.weather[0].description}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Card;
