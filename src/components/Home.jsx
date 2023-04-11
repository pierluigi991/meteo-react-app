import { useState } from "react";
import { Container, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [valore, setValue] = useState("");
  const navigate = useNavigate();

  const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${valore}&appid=ac3b061e79e41a5a115f1d7eb1eca0f3`;
  const cerca = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();

        dispatch({ type: "SEARCH_CITY", payload: data });
        navigate("/meteo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className=" px-0">
      <Row className="">
        <h1 className="title display-2">Meteo.Vic</h1>
        <Form onSubmit={cerca} size="lg">
          <FormGroup>
            <Form.Control placeholder="enter your city" value={valore} onChange={(e) => setValue(e.target.value)} />
          </FormGroup>
        </Form>
      </Row>
    </Container>
  );
};
export default Home;
