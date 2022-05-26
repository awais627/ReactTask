import React,{FC} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
type HandleChange={
  handleChange:any;
}
const Filters:FC<HandleChange> = ({ handleChange }) => {
  return (
    <>
      <Container>
        <h3 className="p-2">Filters</h3>
        <Row>
          <Col md={2} className="mx-5 my-3">
            <DebounceInput
              className="form-control"
              debounceTimeout={500}
              name="postPerPage"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="d-flex">
              <label className="fw-bold me-4">iD#</label>
              <DebounceInput
                className="form-control"
                name="id"
                debounceTimeout={500}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex">
              <label className="fw-bold me-4">Brewed</label>
              <DebounceInput
                className="form-control"
                name="date"
                debounceTimeout={500}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex">
              <label className="fw-bold me-4">ABV</label>
              <DebounceInput
                className="form-control"
                name="abv"
                debounceTimeout={500}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <div className="d-flex">
              <label className="fw-bold me-4">Beer</label>
              <DebounceInput
                className="form-control"
                name="beerName"
                debounceTimeout={500}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex">
              <label className="fw-bold me-4">yeast</label>
              <DebounceInput
                className="form-control"
                name="yeast"
                debounceTimeout={500}
                onChange={handleChange}
              />
            </div>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  );
};
export default Filters;
