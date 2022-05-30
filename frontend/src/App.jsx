import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './features/navigation/Footer';
import Header from './features/navigation/Header';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import { publicRoutes } from './Routes';

function App() {
  return (
    <Router>
      <Header />

      <Container as='main' fluid className='py-3'>
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
              exact={route?.exact || false}
            />
          ))}
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;

/*
  <Routes>
            <Route path='*' exact element={<NotFound />} />
            <Route path='/' exact element={<HomePage />} />
            <Route path='/page/:pageNumber' exact element={<HomePage />} />
            <Route path='/search/:keyword' exact element={<HomePage />} />
            <Route
              path='/search/:keyword/page/:pageNumber'
              exact
              element={<HomePage />}
            />

            <Route
              path='/product/:productId'
              exact
              element={<SingleProduct />}
            />
          </Routes>

*/
