import React from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions'

export default () => {
  const {filters, columnNames } = useSelector(state => state.app);
  console.log(filters, columnNames)
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
      dispatch(actions.filterPatients(values))
  };

  return (
    <div>
        <h1>Filter List</h1>
        <Formik
            initialValues={{filters}}
            onSubmit={handleSubmit()}
            >
        {({ values }) => {
            console.log(values, columnNames)
            return (
            <Form>
            <FieldArray name="filters">
                {({ insert, remove, push }) => (
                <div>
                    {values.filters.length >= 0 &&
                    values.filters.map((filter, index) => (
                        <div className="row" key={index}>
                            <div className="col form-group">
                                <label htmlFor={`filters.${index}.key`}>Column Name</label>
                                <Field as="select"
                                name={`filters.${index}.key`}>
                                    {columnNames.map(name => <option value={name}>{name}</option>)}
                                </Field>
                                <ErrorMessage
                                name={`filters.${index}.name`}
                                component="div"
                                className="field-error"
                                />
                            </div>
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