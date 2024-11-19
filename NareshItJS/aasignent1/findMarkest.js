const arr = [
    { name: 'raj', marks: 50 },
    { name: 'ravi', marks: 25 },
    { name: 'vani', marks: 85 }
  ];
  
  const qualifiedStudents = arr.filter(student => student.marks > 35);
  
  console.log(qualifiedStudents);
  