import { ReactNode } from 'react'
import './App.css'

interface IAppProps {
  children:ReactNode
}


function App({children}: IAppProps) {

  return (
    <>
      {children}
    </>
  )
}

export default App
