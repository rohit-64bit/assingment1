import React from 'react'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

const queryClient = new QueryClient()

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />

    </QueryClientProvider>
  )
}

export default App