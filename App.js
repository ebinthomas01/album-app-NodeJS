import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAlbum from './components/AddAlbum';
import Search from './components/Search';
import ViewAll from './components/ViewAll';
import Delete from './components/Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddAlbum/>}/>
          <Route path='/Search' element={<Search/>}/>
          <Route path='/Delete' element={<Delete/>}/>
          <Route path='/ViewAll' element={<ViewAll/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
