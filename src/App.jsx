import { Routes, Route } from 'react-router-dom';
import './App.css'
import Mainpage from './component/mainpage'
import Mealinfo from './component/mealinfo'
function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/mealinfo/:mealid' element={<Mealinfo/>}/>
    </Routes>
  )
}

export default App
