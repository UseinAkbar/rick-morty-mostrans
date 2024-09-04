import { Routes } from 'react-router-dom'
import AppRoutes from './routes/routes'
import {BrowserRouter as Router} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './components/organisms/Footer'

function App() {

  return (
    <main>
      <div className='App font-normal text-sm text-fontPrimary bg-background grid grid-cols-1 auto-rows-min gap-2 md:gap-4 px-6 py-8'>
        <Toaster 
          toastOptions={{ duration: 1500 }} 
          position="top-right" 
        />
        <AppRoutes />
      </div>
      <Footer />
    </main>
  )
}

export default App
