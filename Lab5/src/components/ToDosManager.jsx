/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'
import AddToDoForm from './AddToDoForm'
import ToDoTable from './ToDoTable'
import SearchToDoInput from './SearchToDoInput'
import useGetToDosList from './useGetToDosList'
import Loader from './Loader'

const ToDosManager = () => {
  const { toDos, isLoading, setToDos } = useGetToDosList()
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

  const handleRemoveToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id))
  }

  const filteredToDos = toDos.filter((toDo) =>
    toDo.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div>
      <Loader isLoading={isLoading}>
        <SearchToDoInput
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />
        <AddToDoForm
          title={newToDo?.title}
          onTitleChange={handleNewTitleChange}
          onSubmit={handleSubmit}
        />
        <ToDoTable toDos={filteredToDos} onRemove={handleRemoveToDo} />
      </Loader>
    </div>
  )
}

export default ToDosManager
