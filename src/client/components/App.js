import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';

export default () => {
    const patients = useSelector(state => state.patients);
    const dispatch = useDispatch();
    const columnNames = Object.keys(patients[0]);
    const renderPatients = (patients) => (
        patients.map((patient, i) => (
            <tr key={i}>
                {columnNames.map((name, j) => <td key={`${name + j}`}>{patient[name]}</td>)}
            </tr>
           )
        )
    )

    const orderList = (e) => {
        const { key } = e.target.dataset;
        if(!dirrection){
            e.target.dataset.dirrection = 'asc'
        }
        const { dirrection } = e.target.dataset;
        dispatch(actions.orderPatients({key, dirrection}))
    }

    return (
        <Table striped bordered hover>
            <thead>
              <tr>{columnNames.map(name => <th data-key={name} onClick={(e) => {orderList(e)}} key={`${name}`}>{name}</th>)}</tr>
            </thead>
            <tbody>
              {renderPatients(patients)}
            </tbody>
        </Table>
    )
}