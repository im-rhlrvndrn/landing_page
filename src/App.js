import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styled components
import './GlobalStyles.scss';

// React components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/about' exact>
                        <About />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
