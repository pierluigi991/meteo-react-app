import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Search = () => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState([]);
  const myApiKey = "ac3b061e79e41a5a115f1d7eb1eca0f3";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=${myApiKey}`);
      if (response.ok) {
        const data = await response.json();

        setCities(data);
      } else {
        alert("Error fetching cities");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cities[0].lat}&lon=${cities[0].lon}&appid=${myApiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        alert("error fetching weather");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [cities]);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="fw-bold">Cerca il meteo nella tua città</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Milano,Londra,Roma,Tokyo...."
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          <div className="border border-warning rounded px-2 mt-2 d-flex align-items-center div-city">
            {cities.length > 0 && (
              <>
                <Container className="d-flex justify-content-between p-1  mt-2">
                  <div className="">
                    <h2 className=" fw-bold my-1">{cities[0].name} </h2>
                    <span className="fs-6">{weather.weather[0].main}</span>
                    <p className="fw-bold mb-0">{cities[0].country}</p>
                    <p className="fw-bold">{cities[0].state}</p>
                    <h3 className=" fw-bold my-1">{weather.main.temp} °</h3>
                  </div>
                  <div className="text-center">
                    <p className="fw-bold mb-0">Humidity</p>
                    <p className="fw-semibold text-center">{weather.main.humidity} %</p>
                    <p className="fw-bold mb-0">Pressure</p>
                    <p className="fw-semibold text-center">{weather.main.pressure} Pa</p>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-0">Wind</h3>
                    <div className="d-flex justify-content-evenly">
                      <p className="fw-semibold"></p>
                      <p className="fw-semibold mx-1">{weather.wind.deg} °</p>
                      <p className="fw-semibold">{weather.wind.gust}</p>
                    </div>
                  </div>
                </Container>
              </>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
