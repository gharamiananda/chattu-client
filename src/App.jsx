
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { lazy } from 'react';


const HomePage=lazy(()=>import('./pages/Home'));
const LoginPage=lazy(()=>import('./pages/Login'));
const ChatPage=lazy(()=>import('./pages/Chat'));
const GroupsPage=lazy(()=>import('./pages/Groups'));




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><HomePage/></>} />
      <Route path='/chat/:chatId' element={<><ChatPage/></>} />
      <Route path='/login' element={<><LoginPage/></>} />
      <Route path='/groups' element={<><GroupsPage/></>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App