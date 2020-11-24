import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../../actions';

export default (props) => {
    const { columnNames } = props;
    const dispatch = useDispatch();

    const orderList = (e) => {
            const { key } = e.target.dataset;
            if(!dirrection){
                e.target.dataset.dirrection = 'asc'
            }
            const { dirrection } = e.target.dataset;
            dispatch(actions.orderPatients({key, dirrection}))
        }

    return (
        <thead>
            <tr>
                {columnNames.map(name => <th data-key={name} onClick={(e) => {orderList(e)}} key={`${name}`}>{name}</th>)}
            </tr>
        </thead>
    )
}