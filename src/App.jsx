import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  Landing,
  About,
  Error,
  Cocktail,
  HomeLayout,
  NewsLetter,
  SinglePageError,
} from './pages'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/NewsLetter'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
        action: newsletterAction,
      },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools position='bottom-right' />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
export default App
