import { useFormik } from 'formik';
import React from 'react';
import Preloader from '../../../../components/Preloader';
import useAddPassengerMutation from '../../api/useAddPassengerMutation';

function CreateUserForm() {
  const { mutate, data, isLoading, isSuccess } = useAddPassengerMutation()

  const formik = useFormik({
    initialValues: {
      name: '',
      trips: 0,
      airline: 0,
    },
    onSubmit(values) {
      mutate(values);
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input name="name" placeholder='name' onChange={formik.handleChange} />
      <input name="trips" type="number" placeholder='trips' onChange={formik.handleChange} />
      <input name="airline" type="number" placeholder='airline' onChange={formik.handleChange} />
      <button type='submit'>Create</button>
      {isLoading && <Preloader />}
      {isSuccess && <p>The passenges has been created with ID: {data.data._id}</p>}
    </form>
  )
}

export default CreateUserForm;