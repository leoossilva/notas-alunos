// NOMES E NOTAS DOS ALUNOS !!!

const students = [
  {
    name: "Diogo",
    gradeOne: 8, 
    gradeTwo: 7,
  },
  {
    name: "Rebeca",
    gradeOne: 10,
    gradeTwo: 8,
  },
  {
    name: "Suzane",
    gradeOne: 8,
    gradeTwo: 6,
  },
  {
    name: "Leonardo",
    gradeOne: 6,
    gradeTwo: 5,
  },
]


function Average (student) {
  let Sum = student.gradeOne + student.gradeTwo
  let quarter = Sum / 2

  if(quarter >= 7){
    alert(`A média do(a) aluno(a) ${student.name} é ${quarter} \n Parabéns, ${student.name}, você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é ${quarter} \n Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}

for (let student of students) {
  Average(student)
}
