import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/Home';
import About from '@pages/About/About';
import Missing from '@pages/Missing/Missing';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
