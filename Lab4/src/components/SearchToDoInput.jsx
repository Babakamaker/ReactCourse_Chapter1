/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const SearchToDoInput = ({ searchValue, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={(event) => onSearchChange(event.target.value)}
    />
  )
}

export default SearchToDoInput