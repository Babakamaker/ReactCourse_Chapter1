import { useState } from 'react'
import './App.css'
import AddToDoForm from './components/AddToDoForm'
import ToDoTable from './components/ToDoTable'
import SearchToDoInput from './components/SearchToDoInput'
import PageTitle from './components/PageTitle'

function App() {
  const [toDos, setToDos] = useState([])
  const [newToDo, setNewToDo] = useState(null)
  const [searchValue, setSearchValue] = useState('')

  function handleNewTitleChange(event) {
    setNewToDo({ id: Math.random(), title: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault()
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
    <>
      <PageTitle title={'ToDoApp'} />
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
    </>
  )
}

export default App
