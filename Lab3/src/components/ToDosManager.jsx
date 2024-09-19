import React from 'react'
import AddToDoForm from './AddToDoForm'
import ToDoTable from './ToDoTable'
import SearchToDoInput from './SearchToDoInput'

const ToDosManager = ({
  toDos,
  newToDo,
  searchValue,
  onTitleChange,
  onSubmit,
  onRemove,
  onSearchChange,
}) => {
  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div>
      <SearchToDoInput
        searchValue={searchValue}
        onSearchChange={onSearchChange}
      />
      <AddToDoForm
        title={newToDo?.title}
        onTitleChange={onTitleChange}
        onSubmit={onSubmit}
      />
      <ToDoTable toDos={filteredToDos} onRemove={onRemove} />
    </div>
  )
}

export default ToDosManager
