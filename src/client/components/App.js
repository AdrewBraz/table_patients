import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

export default () => {
    const patients = useSelector(state => state.patients);
    const columnNames = Object.keys(patients[0]);
    const renderPatients = (patients) => (
        patients.map((patient, i) => (
            <tr key={i}>
                {columnNames.map((name, j) => <td key={`${name + j}`}>{patient[name] instanceof Date ? format(patient[name], 'yyyy/mm/dd') : patient[name]}</td>)}
            </tr>
           )
        )
    )
    return (
        <Table striped bordered hover>
            <thead>
              <tr>{columnNames.map(name => <th key={`${name}`}>{name}</th>)}</tr>
            </thead>
            <tbody>
              {renderPatients(patients)}
            </tbody>
        </Table>
    )
}