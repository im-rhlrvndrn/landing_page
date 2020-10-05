import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styled components
import './GlobalStyles.scss';

// React components
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Mission from './pages/mission/Mission';
import Vision from './pages/vision/Vision';
import Objectives from './pages/objectives/Objectives';

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
                    <Route path='/mission' exact>
                        <Mission />
                    </Route>
                    <Route path='/vision' exact>
                        <Vision />
                    </Route>
                    <Route path='/objectives' exact>
                        <Objectives />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
