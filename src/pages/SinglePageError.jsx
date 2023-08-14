import React from 'react'
import { useRouteError } from 'react-router'

const SinglePageError = () => {
  const error = useRouteError()
  return <div>{error.message}</div>
}

export default SinglePageError
