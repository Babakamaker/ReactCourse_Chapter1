/* eslint-disable no-undef */
import './App.css'
import PageTitle from './components/PageTitle'
import ToDosManager from './components/ToDosManager'

function App() {

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
