import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './page/MainPage'
import { TaskPage } from './page/TaskPage'

const App = () => {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/task/:id' element={<TaskPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App