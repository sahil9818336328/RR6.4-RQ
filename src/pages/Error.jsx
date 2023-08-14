import React from 'react'
import notFound from '../assets/not-found.svg'
import ErrorWrapper from '../assets/wrappers/ErrorPage'
import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <ErrorWrapper>
        <div>
          <img src={notFound} alt='not found' />
          <h3>Ohh!</h3>
          <p>We can't seem to find the page you've been looking for.</p>
          <Link to='/'>back home</Link>
        </div>
      </ErrorWrapper>
    )
  }

  return (
    <ErrorWrapper>
      <div>
        <h3>Something went wrong...</h3>
      </div>
    </ErrorWrapper>
  )
}

export default Error
