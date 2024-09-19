import React from 'react'

const ToDoTable = ({ toDos, onRemove }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {toDos.map((toDo) => {
          return (
            <tr key={toDo.id.toString()}>
              <td>{toDo.id.toString()}</td>
              <td>{toDo.title}</td>
              <td>
                <button onClick={() => onRemove(toDo.id)}>Remove</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ToDoTable
