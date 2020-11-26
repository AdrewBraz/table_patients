import React from 'react';
import { Jumbotron, Button, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import PatientList from './PatientList'
import { useSelector } from 'react-redux';

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
        <Row>
                <Accordion >
                    <Accordion.Toggle as={Button} variant='info' eventKey='0'>
                        Add Filter
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    </Accordion.Collapse>
                </Accordion>
            </Row>
        </Container>
        <Container fluid>
            <Row>
               <PatientList />
            </Row>
        </Container>
        </div>
    )
}