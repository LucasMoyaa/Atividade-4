

let professores = [
    {
      id: "1",
      nome: "Lucas1",
      idade: 40,
      departamento: "Matemática",
      turmas: [
        { codigo: "9A", disciplina: "MAT101", alunos: ["João", "Maria", "Pedro"] },
        { codigo: "10A", disciplina: "MAT201", alunos: ["Ana", "Luiz"] }
      ]
    },
    {
      id: "2",
      nome: "Lucas2",
      idade: 35,
      departamento: "História",
      turmas: [
        { codigo: "9A", disciplina: "HIS101", alunos: ["João", "Pedro"] },
        { codigo: "10B", disciplina: "HIS201", alunos: ["Maria", "Carlos", "Luiza"] }
      ]
    },
    {
      id: "3",
      nome: "Lucas3",
      idade: 50,
      departamento: "Ciências",
      turmas: [
        { codigo: "9A", disciplina: "CIE101", alunos: ["João", "Maria"] },
        { codigo: "9B", disciplina: "CIE101", alunos: ["Pedro", "Luiz"] }
      ]
    }
  ];
  
  module.exports = professores;
  