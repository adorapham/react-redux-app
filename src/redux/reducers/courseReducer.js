/* we have created our action , now we need a function that handle tha action and that is where reducers come in.
   In Redux, you handle actions within reducers.  Reducer is function that accepts state and action and return a new state.
   We create folder reducers, and create this courseReducer.js
   Inside we will export a function, set it as the default export.
   All reducers accept state and an action as their arguments.  For this state argument, we need to decide  how we want
   to initialize state.  We will use the defautl argument syntax to specify that states should be initialized to an
   empty array because this will end up storing an array of courses.
   Inside the reducer, we will create a switch statement taht looks at the action type that gets passed in.
   Each Reducer handles a "slice" of a state (a portion of the entire Redux store). We are going to have multiple reducers in
   our application , we will create our root reducer that  will compose our different reducers together.
   Create index.js in reducers folder
   

*/
//with the default export for function courseReducer, we can decide what to name it when you import it.
export default function courseReducer (state =[], action){
   switch (action.type)
   {
      case "CREATE_COURSE":
         // state is immutable so can't use push method.  instead need to return an updated copy of state.
         // we copy the existing array which is held in state, and then add the course that was passed in on action.course.
         // Remember that whatever is returned from our reducer becomes the new state for that particular reducer.
         // whatever is returned from the reducer becomes the new state for that particular reducer.
         // so this will update our Redux store by adding a new action passed in on action.course to our Redux store.
         // It is also import to always declare a default on a Redux reducer and for our default here , as usual.
         // this case, if some other action is dispatched that this particular deducer doesn't care about , for instance,
         // maybe it is an action that 's related to author data or products. Some other data taht is not related to this 
         // reducer, then it just returns the state untouched.  We use the spread operation to clone state and also clone
         // the course passed in.  So this ends up creating a new array that contains all of the existing courses
         // and that one additional course passed in on our action. 
         // For this course, we just keep it simple and store courses as simple array of objects
         // But for large data sets, you can consider storing by ID instead.
         return [...state, {...action.course}];
      default:
         return state;
   }

}