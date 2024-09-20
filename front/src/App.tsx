import { ReactNode } from 'react'
import Sidebar from './components/SideBar/SideBar'
import Bar from './components/Bar/Bar'
import Graph from './components/Graph/Graph'
import FormComponent from './components/Form/Form'
import LoginPage from './pages/LoginPage'


interface IAppProps {
  children:ReactNode
}


function App({children}: IAppProps) {

  return (
    <>
      <div>
        <LoginPage />
      </div>
      <Bar/>
      <Sidebar/>
      <FormComponent/>
      <Graph/>
      {children}
    </>
  )
}

export default App
