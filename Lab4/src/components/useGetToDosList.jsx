import { useState, useEffect } from 'react'
import useLoading from './useLoading'

const useGetToDosList = () => {
  const [toDos, setToDos] = useState([])
  const { isLoading, startLoading, stopLoading } = useLoading()

  useEffect(() => {
    const fetchToDos = () => {
      startLoading()
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
          setToDos(data)
          stopLoading()
        })
        .catch((error) => {
          console.error('Error fetching ToDos:', error)
          stopLoading()
        })
    }

    fetchToDos()
  }, [])

  return { toDos, isLoading }
}

export default useGetToDosList
