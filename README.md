# ReactCourse_Chapter1
##Lab3 Scheme 1 Relationship explanation (placed in the Lab3 folder)
The App component is the main container that manages state and passes data to child components ToDoTable, SearchToDoInput, AddToDoForm and PageTitle<br>

The PageTitle component receives the title prop<br>

The SearchToDoInput component receives searchValue and onSearchChange as props. onSearchChange is called when the value in the input field changes, which updates the searchValue state in the App component<br>

The AddToDoForm component receives title, onTitleChange, and onSubmit as props. onTitleChange is called when text is entered in the input field, which updates the newToDo state in the App component<br>

The ToDoTable component receives a list of tasks (toDos) and an onRemove function as props. onRemove is called when the "Remove" button is clicked and removes the corresponding task from the toDos list, which updates the state of the toDos list in the App component<br>

##Side effects:
Components ToDoTable, SearchToDoInput and AddToDoForm have unwanted impact on PageTitle component and the other way around
