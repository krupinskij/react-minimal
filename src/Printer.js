import React from 'react';

const Printer = ({ data }) => {

  const studentList = data.map(student => {
    return (
      <p key={Math.random()}>Name: { student.name }, age: { student.age }</p>
    )
  })

  return (
    <div>
      { studentList }
    </div>
  )
}

export default Printer;