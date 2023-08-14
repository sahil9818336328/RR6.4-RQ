import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import Navbar from '../Components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <div>
      <Navbar />
      <section className='page'>
        {isPageLoading ? <div className='loading' /> : <Outlet />}
      </section>
    </div>
  )
}

export default HomeLayout
