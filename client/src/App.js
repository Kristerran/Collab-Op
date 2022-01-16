import { BrowserRouter, Route, Routes} from 'react-router-dom';


import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Page from './pages/Page'
import Search from './pages/Search'


function App() {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route exact path ="/feed" element={<Feed/>} />
        <Route exact path ="/user" element={<Page />} />
        <Route exact path ="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
