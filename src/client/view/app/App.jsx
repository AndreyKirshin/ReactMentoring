import React from 'react';
import Container from '../container/container.jsx';
import ErrorBoundary from '../errorBoundary/errorBoundary';

export default class App extends React.Component {
    render(){
       return(
           <React.Fragment>
               <h1>App for movies !!!</h1>
                <ErrorBoundary>
                    <Container />
                </ErrorBoundary>
           </React.Fragment>   
        )
     }
}