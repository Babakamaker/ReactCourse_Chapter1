/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const AddToDoForm = ({ title = '', onTitleChange, onSubmit }) => {
  return (
    <form>
      <input value={title} placeholder="Add" onChange={onTitleChange} />
      <button onClick={onSubmit}>Add</button>
    </form>
  )
}

export default AddToDoForm
