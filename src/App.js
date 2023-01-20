import './App.css';
import PostView from "./component/instaclonepage/postview/postview"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing_page from './component/landingpage/landing_page';
import Details from './component/Details/Details';

function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Landing_page/>}/> 
  <Route path='/instaclone' element={<PostView/>}/>
  <Route path='/details' element={<Details/>}/>

  <Route path='*' element={<div>Page Not Found 404 !</div>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
