import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const SearchResult = () => {
  const {query} = useParams

  const [data, loading] = useFetch()
  console.log(data);
  return (
    <div>searchResult</div>
  )
}

export default SearchResult