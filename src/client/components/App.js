import React from 'react';
import { Jumbotron, Container, Row } from 'react-bootstrap';
import PatientList from './PatientList'
import { useSelector } from 'react-redux';

export default () => {
    const patients = useSelector(state => state.patients)
    return (
        <div>
        <Jumbotron>
            <Container>
                <p>Количество пациентов пролеченных за месяц: {patients.length}</p>
            </Container>
        </Jumbotron>
        <Container fluid>
            <Row>
               <PatientList />
            </Row>
        </Container>
        </div>
    )
}