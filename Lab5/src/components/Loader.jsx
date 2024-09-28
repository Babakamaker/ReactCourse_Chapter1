/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import 'bootstrap/scss/bootstrap.scss'

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  )
}
const Loader = ({ isLoading, children }) => {
  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {children}
    </React.Fragment>
  )
}

export default Loader
