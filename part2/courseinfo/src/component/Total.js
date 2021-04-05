import React from 'react';

const Total = ({ course }) => {
  const sum = course.parts.reduce((s, p) => s + p.exercises, 0);
  return <p>Number of {sum} exercises</p>;
};

export default Total;
