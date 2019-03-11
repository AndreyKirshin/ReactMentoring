import React from 'react';
import CreateElement from './createElement';
import PureComponent from './pureComponent.jsx';
import FunctionalComponent from './functionalCompoonent.jsx';

export default class App extends React.Component {
    render(){
       return(
           <div>
               <h1>App for movies</h1>
               <CreateElement />
               <PureComponent />
               <FunctionalComponent />
           </div>   
        )
     }
}