import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions'

export default () => {
  const { columnNames, filters } = useSelector(state => state.app);
  const dispatch = useDispatch()

  const handleSubmit = (filter) => {
    console.log(filter)
    dispatch(actions.filterPatients(filter))
  };

  return (
    <div>
        <h1>Filter List</h1>
        <Formik
            initialValues={{filters: [{key: '', value: ''}]}}
            onSubmit={({filters}) => handleSubmit(filters)}
            >
        {({ values }) => {
            return (
            <Form>
            <FieldArray name="filters">
                {({ insert, remove, push }) => (
                <div>
                    {values.filters.length >= 0 &&
                    values.filters.map((filter, index) => (
                            <div key={`${filter}${index}`} className="col form-group">
                              <div className="row">
                                <label htmlFor={`filters.${index}.key`}>Column Name</label>
                                <Field as="select"
                                name={`filters.${index}.key`}>
                                    {columnNames.map(name => <option key={`${name}${index}`} value={name}>{name}</option>)}
                                </Field>
                              </div>
                              <div className="row">
                                <label htmlFor={`filters.${index}.value`}>Column Value</label>
                                <Field 
                                  placeholder=''
                                  type='text'
                                  name={`filters.${index}.value`} />
                                </div>
                                <ErrorMessage
                                name={`filters.${index}.name`}
                                component="div"
                                className="field-error"
                                />
                            </div>
                    ))}
                </div>
                )}
            </FieldArray>
            <button type="submit">Invite</button>
            </Form>
        )}}
        </Formik>
    </div>
  )
}