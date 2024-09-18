import { ReactNode } from 'react'
import Sidebar from './components/SideBar/SideBar'

interface IAppProps {
  children:ReactNode
}


function App({children}: IAppProps) {

  return (
    <>
      <Sidebar/>
      {children}
    </>
  )
}

export default App
