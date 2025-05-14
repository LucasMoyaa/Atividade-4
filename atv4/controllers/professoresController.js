
let professores = require("../data/professores");

const listarProfessores = (req, res) => {
  res.json(professores);
};

const buscarProfessorPorId = (req, res) => {
  const id = req.params.id;
  const professor = professores.find(p => p.id === id);
  if (professor) {
    res.json(professor);
  } else {
    res.status(404).json({ mensagem: "Id não existente" });
  }
};

const listarTurmasPorProfessor = (req, res) => {
  const id = req.params.id;
  const professor = professores.find(p => p.id === id);
  if (professor) {
    res.json(professor.turmas);
  } else {
    res.status(404).json({ mensagem: "Id não existente" });
  }
};

const atualizarProfessor = (req, res) => {
  const id = req.params.id;
  const index = professores.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }
  const { nome, idade, departamento } = req.body;
  if (nome) professores[index].nome = nome;
  if (idade) professores[index].idade = idade;
  if (departamento) professores[index].departamento = departamento;
  res.json(professores[index]);
};

const adicionarTurma = (req, res) => {
  const id = req.params.id;
  const professor = professores.find(p => p.id === id);
  if (!professor) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }
  const { codigo, disciplina, alunos } = req.body;
  professor.turmas.push({ codigo, disciplina, alunos });
  res.status(201).json(professor);
};

const listarPorDepartamento = (req, res) => {
  const dep = req.params.departamento;
  const filtrados = professores.filter(p => p.departamento.toLowerCase() === dep.toLowerCase());
  res.json(filtrados);
};

const removerProfessor = (req, res) => {
  const id = req.params.id;
  const index = professores.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ mensagem: "Id não existente" });
  }
  professores.splice(index, 1);
  res.json({ mensagem: "Professor removido com sucesso" });
};

module.exports = {
  listarProfessores,
  buscarProfessorPorId,
  listarTurmasPorProfessor,
  atualizarProfessor,
  adicionarTurma,
  listarPorDepartamento,
  removerProfessor
};
