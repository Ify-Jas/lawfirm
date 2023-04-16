import {Routes, Route} from 'react-router-dom';
import Footer from './components/footer';
import Home from './pages/home'
import About from './pages/about'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/about'} element={<About />}/>

      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
