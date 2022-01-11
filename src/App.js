import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Header />
            <div className='container'>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/movie/:imdbID' component={MovieDetail} />
                    {/* Any route that does not match one of our predefined route will be in this page */}
                    <Route component={PageNotFound} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
}

export default App;
