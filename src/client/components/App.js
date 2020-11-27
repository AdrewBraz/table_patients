import React from 'react';
import { Jumbotron, Button, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import PatientList from './PatientList'
import { useSelector } from 'react-redux';

import FilterForm from './FilterForm';

export default () => {
    const patients = useSelector(state => state.patients)
    return (
        <div>
        <Jumbotron>
            <Container>
                <h1>Количество пациентов пролеченных за месяц: {patients.length}</h1>
            </Container>
        </Jumbotron>
        <Container >
            <FilterForm />
        </Container>
        <Container fluid>
            <Row>
                <PatientList/>
            </Row>
        </Container>
        </div>
    )
}