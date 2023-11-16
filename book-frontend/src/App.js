import {Route, Routes} from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Home from './pages/book/Home';
import SaveForm from './pages/book/SaveForm';
import Detail from './pages/book/Detail';
import UpdateForm from './pages/book/UpdateForm';
import JoinForm from './pages/user/JoinForm';
import LoginForm from './pages/user/LoginForm';

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Routes>
        <Route path='/' exact={true} element={<Home/>}/>
        <Route path='/saveForm' exact={true} element={<SaveForm/>}/>
        <Route path='/book/:id' exact={true} element={<Detail/>}/>
        <Route path='/loginForm' exact={true} element={<LoginForm/>}/>
        <Route path='/joinForm' exact={true} element={<JoinForm/>}/>
        <Route path='/updateForm/:id' exact={true} element={<UpdateForm/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
