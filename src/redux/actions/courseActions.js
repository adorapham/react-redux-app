/*
create folder Redux to keep all Redux related files
create new folder actions under Redux folder where to store all actions like saving a course, deleting a course or loading course
inside actions folder, create new file called courseActions.js.  This file will hold our course-related action creators

*/
//this action creator return a plain object and it must have a type property
//for the payload , we will pass along the course that is passed in as an argument
//the only requirement for an action is that it has a type property, the rest of its shape can be whatever works best for you
export function createCourse (course){
      //return {type : "CREATE_COURSE", course:course};
      return {type : "CREATE_COURSE", course};

}