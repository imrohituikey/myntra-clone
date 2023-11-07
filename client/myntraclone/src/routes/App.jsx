import {Header, Footer, Fetch} from '../components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Fetch/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
