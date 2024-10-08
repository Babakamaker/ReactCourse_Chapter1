/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const SearchContactInput = ({ searchValue, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default SearchContactInput;
