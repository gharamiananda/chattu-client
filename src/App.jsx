
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Suspense, lazy } from 'react';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { LayoutLoader } from './components/layout/Loader';


const HomePage=lazy(()=>import('./pages/Home'));
const LoginPage=lazy(()=>import('./pages/Login'));
const ChatPage=lazy(()=>import('./pages/Chat'));
const GroupsPage=lazy(()=>import('./pages/Groups'));




const App = () => {

  const  user=true;
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<LayoutLoader />}>

    <Routes>

    <Route element={<><ProtectedRoute   user={user} /></>} >



      <Route path='/' element={<><HomePage/></>} />
      <Route path='/chat/:chatId' element={<><ChatPage/></>} />
      <Route path='/groups' element={<><GroupsPage/></>} />
    </Route>

      <Route path='/login' element={<ProtectedRoute
      user={!user}
redirect='/'
      ><LoginPage/></ProtectedRoute>} />


<Route path='*' element={<p>Not found 404</p>} />

    </Routes>
    </Suspense>

    </BrowserRouter>
    </>
  )
}

export default App