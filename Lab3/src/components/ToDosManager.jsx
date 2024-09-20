/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'
import AddToDoForm from './AddToDoForm'
import ToDoTable from './ToDoTable'
import SearchToDoInput from './SearchToDoInput'

const ToDosManager = () => {
  const [toDos, setToDos] = useState([])
  const [newToDo, setNewToDo] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  function handleNewTitleChange(event) {
    setNewToDo({ id: Date.now(), title: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!newToDo || !newToDo.title.trim()) {
      setNewToDo(null)
      return
    }
    setToDos([...toDos, newToDo])
    setNewToDo(null)
  }

  function handleRemoveToDo(id) {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id)
    setToDos(updatedToDos)
  }
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
