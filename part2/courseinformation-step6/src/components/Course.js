import React from "react";

const Part = ({ part }) => {
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  );
};

const Course = ({ course }) => {
  console.log(course);
  const { parts } = course;
  console.log(parts, "parts");
  const total = parts.reduce((acc, currentValue) => {
    return acc + currentValue.exercises
  }, 0)

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part}></Part>
      ))}
      total of {total} exercises
    </div>
  );
};

export default Course;
