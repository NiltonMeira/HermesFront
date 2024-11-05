import { ReactNode } from 'react'

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
