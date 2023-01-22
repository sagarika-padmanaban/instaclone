import './App.css';
import PostView from "./component/instaclonepage/postview/postview"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing_page from './component/landingpage/landing_page';
import Details from './component/Details/Details';
import Login from './component/Login/Login';
import Register from './component/Register/Register';

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Landing_page/>}/> 
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/instaclone' element={<PostView/>}/>
  <Route path='/details' element={<Details/>}/>

  <Route path='*' element={<div>Page Not Found 404 !</div>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
