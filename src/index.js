import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './components/App'
import './index.css';
import configureStore from './redux/configureStore';
//Provider is a highter-order component that provides your Redux store data to child components and update the 
//render to call ReduxProvider and passed store on props.
//our app will be able to access our Redux store because entire app is being wrapped in the Provider component
import {Provider as ReduxProvider} from 'react-redux';

//after creating the action, reducer, set configureStore, we will need to update the application entry point
//to instantiate our store.
//we instantiate the store. We are not going to pass in initial state to our store, but if we are creating
//a server-rendered app, we might choose to do so here. We might be confused about the difference between passing
//initial state here and setting the initial state within our reducer.  Now currently, our reducer sets the initial
//state usning the default parameter in the reducer.  So passing initial state here is merely for overriding the
//default parameters that we s pecify in our reducers.
//so when you would end up passing initial state to the configureStore call?
//if you want to re-hydrate your store using some separate state that passed down from the server or stored in local
//storage, then this would be a good place to do.

//we now have a configured instance of our store that 's set to a constant called store, what are we going to do with it?
//we need to use companion library React Redux library if we use React - Redux - import Provider and use alias
//as ReduxProvider.  

const store = configureStore();

ReactDOM.render(
/*   <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') */

  <ReduxProvider store={store}>
    <Router>
      <App/>
    </Router>

  </ReduxProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
