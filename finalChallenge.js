const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];

const averangeStudent = () => {
  return students.map((student) => {
    const total = student.grades.reduce((sum, grade) => sum + grade, 0);
    const average = total / student.grades.length;
    return {
      name: student.name,
      grades: student.grades,
      average: average.toFixed(2),
      status: average >= 70 ? "Aproved" : "Reproved",
    };
  });
};

const countStudentsAproved = () => {
  const results = averangeStudent();
  const aprovedStudents = results.filter(
    (student) => student.status === "Aproved"
  );
  const reprovedStudents = results.filter(
    (student) => student.status === "Reproved"
  );

  return {
    totalAproved: aprovedStudents.length,
    totalReproved: reprovedStudents.length,
    aprovedStudents: aprovedStudents.map((student) => student.name),
    reprovedStudents: reprovedStudents.map((student) => student.name),
  };
};

const findTopStudent = () => {
  const results = averangeStudent();
  const topStudent = results.reduce((top, student) => {
    return top.average > student.average ? top : student;
  });

  return {
    name: topStudent.name,
    average: topStudent.average,
    status: topStudent.status,
  };
};

const averangeClass = () => {
  const results = averangeStudent();
  const totalAverage = results.reduce(
    (sum, student) => sum + parseFloat(student.average),
    0
  );
  return (totalAverage / results.length).toFixed(2);
};

console.log("Studends Average:", averangeStudent());
console.log("Count Students Aproved:", countStudentsAproved());
console.log("Top Student:", findTopStudent());
console.log("Class Average:", averangeClass());