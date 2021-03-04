import React from "react";
//we are going to need a form to input course . So we declare state using a contructor accepting props
class CoursesPage extends React.Component {
  constructor(props) {
    //need to call
    super(props);
    //declare the state
    this.state = {
      //course object has one property -title to make it simple first
      course: {
        title: ""
      },
    };
  }
  
  handleChange = event=>{
      //Make a copy of current course using spread operator and then set title to new value
      const course ={...this.state.course, title:event.target.value};
      //Now that we have created a copy of our course object that  reflects the new title and we can pass it that new course
      //this.setState({course:course}); since course is the same, we use only one time
      this.setState({course});

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Adding Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}
export default CoursesPage;
