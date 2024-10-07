import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreens from './screens/HomeScreens';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router >
      <Header />
      <main className='py-3'>
        <Container>
        {/* A <Route> is only ever to be used as the child of <Routes> element" */}
          <Routes>
            <Route path='/' Component={HomeScreens} exact />
            <Route path='/product/:id' Component={ProductScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
