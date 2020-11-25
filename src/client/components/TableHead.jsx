import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import { has } from 'lodash';

export default (props) => {
    const { columnNames } = props;
    const order = useSelector(state => state.app.order);
    const dispatch = useDispatch();

    const getDirrection = {
        'asc': () => 'desc',
        'desc': () => 'asc'
    }

    const orderList = (e) => {
        const { key } = e.target.dataset;
        console.log( order[key])
        const dirrection = has(order, key) ? getDirrection[order[key]]() : 'asc'
        dispatch(actions.orderPatients({[key]: dirrection}))
    }

    return (
        <thead>
            <tr>
                {columnNames.map(name => <th data-key={name} onClick={(e) => {orderList(e)}} key={`${name}`}>{name}</th>)}
            </tr>
        </thead>
    )
}