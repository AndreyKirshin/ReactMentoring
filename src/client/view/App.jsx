import React from 'react';
import CreateElement from './createElement';
import PureComponent from './pureComponent.jsx';
import FunctionalComponent from './functionalCompoonent.jsx';

export default class App extends React.Component {
    render(){
       return(
           <React.Fragment>
               <h1>App for movies !!!</h1>
               <CreateElement />
               <PureComponent />
               <FunctionalComponent />
           </React.Fragment>   
        )
     }
}