import React from 'react';
import Part from './Part';
import Total from './Total';

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(c => (
        <Part key={c.name} part={c} />
      ))}
      <Total course={course} />
    </div>
  );
};

export default Content;
