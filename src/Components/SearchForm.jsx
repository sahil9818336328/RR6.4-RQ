import React from 'react'
import { Form, useNavigation } from 'react-router-dom'
import SearchformWrapper from '../assets/wrappers/SearchForm'

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <SearchformWrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          className='form-input'
          defaultValue={searchTerm}
        />
        <button type='submit' className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </SearchformWrapper>
  )
}

export default SearchForm
