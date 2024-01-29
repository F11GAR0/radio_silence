import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Dashboard } from './components/pages/dashboard/dashboard'
import { Radio } from './components/pages/radio/radio'

export const AppRoutes = () => {

  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="dashboard" element={<Dashboard/>}>

          </Route>
          <Route path="radio" element={<Radio/>}>

          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}