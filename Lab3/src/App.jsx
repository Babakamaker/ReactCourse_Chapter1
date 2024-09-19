import { useState } from 'react'
import './App.css'
import PageTitle from './components/PageTitle'
import ToDosManager from './components/ToDosManager'

function App() {
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

  return (
    <>
      <PageTitle title="ToDoApp" />
      <ToDosManager
        toDos={toDos}
        newToDo={newToDo}
        searchValue={searchValue}
        onTitleChange={handleNewTitleChange}
        onSubmit={handleSubmit}
        onRemove={handleRemoveToDo}
        onSearchChange={setSearchValue}
      />
    </>
  )
}

export default App
