import React, { lazy, Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Loader from '../components/atoms/Loader'

const List = lazy(() => import('../pages/List'))
const Detail = lazy(() => import('../pages/Detail'))
const CharacterLocation = lazy(() => import('../pages/CharacterLocation'))

const AppRoutes = () => {
  return (
    <Router>
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Navigate to="/rickmorty/list" replace />} />
                <Route path="/rickmorty" >
                    <Route index element={<Navigate to="list" replace />} />
                    <Route path="list" element={<List />} />
                    <Route path="detail/:id" element={<Detail />} />
                    <Route path="characterByLocation" element={<CharacterLocation />} />
                </Route>
            </Routes>
        </Suspense>
    </Router>
  )
}

export default AppRoutes