// Styles Imported
import './App.css'
import rightArrow from './assets/rightArrow.svg'
// Components Imported
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Main from './components/main'
import NoteState from './Context/NoteState'
const App = ()=> {

  return (
    <NoteState>
      <BrowserRouter>
        <nav className='nav'>
          <section className='navleft'>
            <Link className='link' to = '/'><h1>iNote</h1></Link>
          </section>
          <section className='navRight'>
            <Link className='link' to = '/login'>    
              <div className='login'>Login</div>
            </Link>
            <Link className='link' to='/signup'>
              <div className='signup'>
                Get Started <img className='arrowImg' src={rightArrow} alt="rightArrow" />
              </div>
            </Link>
          </section>
        </nav>
        <Routes>
          <Route path='/' element= {<Main />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/signup' element= {<Signup />} />
        </Routes>
      </BrowserRouter>
    </NoteState>
  )
}

export default App;
