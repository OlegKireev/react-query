import { useFormik } from 'formik';
import React from 'react';

function FindPassengerForm({
  setPassengerId,
}) {
  const formik = useFormik({
    initialValues: {
      id: '',
    },
    onSubmit(values) {
      setPassengerId(values.id)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name='id'
        id="id"
        onChange={formik.handleChange}
      />
    </form>
  )
}

export default FindPassengerForm;;