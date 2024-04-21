import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/index.tsx'
import { PrimeReactProvider } from 'primereact/api';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <PrimeReactProvider >
    <Router/>
    </PrimeReactProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
