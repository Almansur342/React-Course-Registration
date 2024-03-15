import { useState } from "react";
import Course from "./Course";
import { useEffect } from "react";
const Courses = ({handleSelect}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() =>{
  fetch('courses.json')
  .then(res => res.json())
  .then(data => setCourses(data));

  },[])
  return (
    <div className="grid grid-cols-3 gap-5">
       {
        courses.map(course => <Course 
          key={course.id}
           course ={course}
           handleSelect={handleSelect}
           ></Course>)
       }
    </div>
  );
};

export default Courses;