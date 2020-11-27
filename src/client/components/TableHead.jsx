import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../actions';
import { has } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default () => {
    const { order, columnNames } = useSelector(state => state.app);
    const dispatch = useDispatch();

    const getDirrection = {
        asc: () => 'desc',
        desc: () => 'asc'
    }

    const orderList = (e) => {
        const { key } = e.target.dataset;
        const dirrection = has(order, key) ? getDirrection[order[key]]() : 'asc'
        dispatch(actions.orderPatients({[key]: dirrection}))
    }

    const renderIcon = (keyName) => {
        const key = order[keyName];
        const getIcon = {
            undefined: () => keyName,
            asc: () => <FontAwesomeIcon icon={faArrowDown} />,
            desc: () => <FontAwesomeIcon icon={faArrowUp} />
        }
        return getIcon[key]()
    }

    return (
        <thead>
            <tr>
              {columnNames.map(name => <th data-key={name} onClick={(e) => {orderList(e)}} key={`${name}`}>{renderIcon(name)}</th>)}
            </tr>
        </thead>
    )
}