import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddToDOComponent from './components/AddToDoComponent'
import ToDoTable from './components/ToDoTable'
import SearchToDoComponent from './components/SearchToDoComponent'

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
      <SearchToDoComponent
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
      <AddToDOComponent
        title={newToDo?.title}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
      />
      <ToDoTable toDos={filteredToDos} onRemove={handleRemoveToDo} />
    </>
  )
}

export default App
