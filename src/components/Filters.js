import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Filters = ({ id, handleIdChange, date, handleDateChange, abv, handleAbvChnage, handleChange, noOfPost, beerName, handleBeerNameChange, yeast, handleYeastChange }) => {
    return (
        <>
            <Container>
                <h3 className='p-2'>Filters</h3>
                <Row>
                    <Col md={2} className='mx-5 my-3'>
                        <input value={noOfPost} onChange={handleChange} type="text" placeholder='Post Per Page' className="form-control" />
                    </Col>
                </Row>

                <Row>
                    <Col md={4} >
                        <div className='d-flex'>
                            <label className='fw-bold me-4'>iD#</label>
                            <input value={id} onChange={handleIdChange} type="text" className="form-control id" />
                        </div>
                    </Col>
                    <Col md={4} >
                        <div className='d-flex'>
                            <label className='fw-bold me-4'>Brewed</label>
                            <input value={date} onChange={handleDateChange} type="text" className="form-control" />
                        </div>
                    </Col>
                    <Col md={4} >
                        <div className='d-flex'>
                            <label className='fw-bold me-4'>ABV</label>
                            <input value={abv} onChange={handleAbvChnage} type="text" placeholder='Abv' className="form-control" />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col md={4} >
                        <div className='d-flex'>
                            <label className='fw-bold me-4'>Beer</label>
                            <input value={beerName} onChange={handleBeerNameChange} type="text" className="form-control id" />
                        </div>
                    </Col>
                    <Col md={4} >
                        <div className='d-flex'>
                            <label className='fw-bold me-4'>yeast</label>
                            <input value={yeast} onChange={handleYeastChange} type="text" className="form-control" />
                        </div>
                    </Col>
                </Row>
                <hr />
            </Container>


        </>
    )
}

export default Filters