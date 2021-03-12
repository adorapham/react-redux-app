//after we create the first reducer and our rootReducer, we need to create the Redux store
//in Redux , there is a single store. So in Redux folder, create a new file and call it configureStore.js
//There is no need to put it in the folder because we have only one of this type of file.  when creating
//a store , it is useful to define a function that configure the store because we will call this function
//at our application 's entry point.  This way the store will get configure when the application starts up.

/*import {createStore} from 'redux';*/
/*import {createStore, applyMiddleware} from 'redux';*/

//let include Redux dev tools which is handy for interacting with the Redux store by importing compose
//and declare a new variable composeEnhancers in the  function configureStore

import {createStore, applyMiddleware, compose} from 'redux';
//And the middleware that we would like to apply is called reduxImmutableStateInvariant
//this middleware is  helpful because it warns us if we accidentally mutate any state in the Redux store.
//so you can think it as a safety net
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

//since we call index.js, we don't need to reference the file index.js below import statement
import rootReducer from './reducers';

export default function configureStore (initialState){

    const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;//add support for Redux dev tools

    /*return createStore(rootReducer, initialState); */
    /*return createStore (rootReducer, initialState, applyMiddleware(reduxImmutableStateInvariant())); */
    //we can add a few optional pieces of middleware to enhance our store
    //Redux middleware is a way to enhance Redux with extra functionality. To work with middleware , let' add 
    //another import called applyMiddleware 
    return createStore (
        rootReducer, initialState, composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}
