import React from 'react';
import Part from './Part';

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercise} />
      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercise} />
      <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercise} />
    </div>
  );
};

export default Content;
