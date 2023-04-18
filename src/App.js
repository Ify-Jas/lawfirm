import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Testimonial from './pages/testimonial';
import Contact from './pages/contact';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/about'} element={<About />}/>
        <Route path={'/services'} element={<Services />} />
        <Route path={'/testimonial'} element={<Testimonial />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
    
    </div>
  );
}

export default App;
