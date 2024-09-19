import { ReactNode } from 'react'
import Sidebar from './components/SideBar/SideBar'
import Bar from './components/Bar/Bar'
import Graph from './components/Graph/Graph'
import FormComponent from './components/Form/Form'


interface IAppProps {
  children:ReactNode
}


function App({children}: IAppProps) {

  return (
    <>
      <Bar/>
      <Sidebar/>
      <FormComponent/>
      <Graph/>
      {children}
    </>
  )
}

export default App
