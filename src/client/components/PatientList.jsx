import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TableHead from './TableHead'
import  cn from 'classnames';
import { PatientSelector } from '../../reducers/appSlice';

export default () => {
const patients = useSelector(PatientSelector)
const { columnNames } = useSelector(state => state.app)
const renderPatients = (patients) => (
        patients.map((patient, i) => (
            <tr key={i}>
                {columnNames.map((name, j) => <td key={`${name + j}`}>{patient[name]}</td>)}
            </tr>
           )
        )
    )

    return (
        <Table striped bordered hover responsive>
            <TableHead />
            <tbody>
                {renderPatients(patients)}
            </tbody>
        </Table>
    )
}