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