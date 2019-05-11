import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './container.less';
import Home from '../pages/home';
import SearchResults from '../pages/searchResults';
import MoviePage from '../pages/moviePage';
import NotFound from '../pages/notFound';



export default class App extends React.Component {
    render(){
       return(
           <div className='container'>
               <h1>App for movies !!!</h1>
               <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path='/search' component={SearchResults} />
                        <Route path='/film/:id' component={MoviePage} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>       
           </div>   
        )
    }
}