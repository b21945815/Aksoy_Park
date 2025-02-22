import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import { Suspense, lazy } from 'react'

import GlobalStyles from './styles/GlobalStyles'
import AppLayout from './ui/AppLayout'
import { DarkModeProvider } from './context/DarkModeContext'

// Lazy-loaded pages
const Information = lazy(() => import('./pages/Information'))
const Admin = lazy(() => import('./pages/Admin'))
const Login = lazy(() => import('./pages/Login'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))
const Works = lazy(() => import('./pages/Works'))
const Examples = lazy(() => import('./pages/Examples'))
const ChildrenParkProduct = lazy(() => import('./pages/ChildrenParkProduct'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100000
    }
  }
})

function App () {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to='information' />} />
                <Route path='information' element={<Information />} />
                <Route path='works' element={<Works />} />
                <Route path='examples' element={<Examples />} />
                <Route path='admin' element={<Admin />} />
                <Route path='/childrenParkProduct/:categoryName/:itemName' element={<ChildrenParkProduct />} />
              </Route>

              <Route path='login' element={<Login />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </HashRouter>
        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000
            },
            error: {
              duration: 5000
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)'
            }
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
