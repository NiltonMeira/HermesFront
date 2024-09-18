import { ReactNode } from 'react'
import Sidebar from './components/SideBar/SideBar'
import Bar from './components/Bar/Bar'

interface IAppProps {
  children:ReactNode
}


function App({children}: IAppProps) {

  return (
    <>
      <Bar/>
      <Sidebar/>
      {children}
    </>
  )
}

export default App
