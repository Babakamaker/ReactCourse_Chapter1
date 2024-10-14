/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'

const ToDoTable = ({ toDos, onRemove, onUpdate }) => {
  const [editId, setEditId] = useState(null)
  const [editTitle, setEditTitle] = useState('')

  const handleEdit = (id, currentTitle) => {
    setEditId(id)
    setEditTitle(currentTitle)
  }

  const handleSave = (id) => {
    if (!editTitle.trim()) {
      alert('Title is required')
      return
    }
    onUpdate(id, editTitle)
    setEditId(null)
  }

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
            <tr key={toDo.id}>
              <td>{toDo.id}</td>
              <td>
                {editId === toDo.id ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    style={{
                      borderColor: !editTitle.trim() ? 'red' : 'inherit',
                    }}
                  />
                ) : (
                  toDo.title
                )}
              </td>
              <td>
                <button onClick={() => onRemove(toDo.id)}>Remove</button>
                {editId === toDo.id ? (
                  <button onClick={() => handleSave(toDo.id)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(toDo.id, toDo.title)}>
                    Edit
                  </button>
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ToDoTable
