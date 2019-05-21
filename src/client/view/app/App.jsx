import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import './container.less';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import Home from '../pages/home';
import SearchResults from '../pages/searchResults';
import MoviePage from '../pages/moviePage';
import NotFound from '../pages/notFound';
import { hot } from 'react-hot-loader';



class App extends React.Component {
    render(){
        const Router = this.props.router;
        const store = this.props.store;
       return(
           <div className='container'>
               <Provider store={store}>
                   <ErrorBoundary>
                       <Router>
                            <h1>App for movies !!!</h1>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path='/search' component={SearchResults} />
                                <Route path='/film/:id' component={MoviePage} />
                                <Route path="*" component={NotFound} />
                            </Switch>
                        </Router>       
                   </ErrorBoundary>
               </Provider>
           </div>   
        )
    }
}

export default hot(module)(App);