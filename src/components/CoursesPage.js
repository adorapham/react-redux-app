import React from "react";
//we are going to need a form to input course . So we declare state using a contructor accepting props
class CoursesPage extends React.Component {
/*   constructor(props) {
    //need to call
    super(props);
    //declare the state
    this.state = {
      //course object has one property -title to make it simple first
      course: {
        title: ""
      },
    }; */

    //now the function is only bound once so it won't be re-allocated on every render.
    //this.handleChange = this.handleChange.bind(this);

    //when using the arrown function , the constructor is simplier
    state ={
      course: {
        title:""
      }
    };
    
  
  
  //this type of declaration will need binding function either on onChange handler and re-located on every render or one time for
  //bounced on contructor binding
  //handleChange (event){
  //use arrow function to remove the binding function inside the contructor or onChange event handler
  //because Arrow functions inherit the binding context of their enclosing scope
  //it is suggestion to use arrow function to avoid binding issue
  handleChange =event=>{
      //Make a copy of current course using spread operator and then set title to new value
      //We copied React state up here because we should treat React state as immutable.
      //We cloned our existing state , made a change to it , and then call setState with that new object.
      const course ={...this.state.course, title:event.target.value};
     
      //Now that we have created a copy of our course object that  reflects the new title and we can pass it that new course
      //this.setState({course:course}); since course is the same, we use only one time -object shorthand syntax
      this.setState({course});

  }

  //nothing happen after typing on the textbox and click on save button  since the entire page posts back
/*   handleSubmit(){
    alert(this.state.course.title);
  } */
  //this to fix the above function to prevent the form from causing the page to reload
/*   handleSubmit(event){
    event.preventDefault();  //to keep it from posting back but this time we get TypeError: Cannot read property 'state' of undefined 
                            //due to no binding like previous handleChange function, so let use arrow function
    alert(this.state.course.title);
  } */
  
  handleSubmit = event =>
  {
    alert (this.state.course.title);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Adding Course</h3>
        <input
          type="text"
          //this approach isn't ideal because using bind within render causes a new function is allocated on every render
          //add the binding to the contructor instead
          onChange={this.handleChange.bind(this)}

          //onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}
export default CoursesPage;
