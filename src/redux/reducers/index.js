// we will create our root reducer that  will compose our different reducers together in this file
// import the course we just created in the same directory

import {combineReducers}  from 'redux';
// since I am exporting default for my reducer, we can name it in import whatever name we like
// here we name it as courses because it will impact how we reference that particular data in our Redux store.
import courses from './courseReducer';

//declare rootReducer to combine all of our reducers together, right now we have only one reducer
const rootReducer = combineReducers (
    {
        //courses: courses; since the names are the same , we can omit one.
        courses;
    }
)
//since we are exporting default for the reducer, we can name this import whatever we like
export default rootReducer;