import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './index.scss'

export default function App() {
  return (
    <main>
      <Header/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <Footer/>
    </main>
  )
}
