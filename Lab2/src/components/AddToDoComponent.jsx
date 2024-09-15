import React from 'react'

const AddToDOComponent = ({ title = '', onTitleChange, onSubmit }) => {
  return (
    <form>
      <input value={title} placeholder="Add" onChange={onTitleChange} />
      <button onClick={onSubmit}>Add</button>
    </form>
  )
}

export default AddToDOComponent
