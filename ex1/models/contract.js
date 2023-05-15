const mongoose = require('mongoose');

// Create a contract schema
const contractSchema = new mongoose.Schema({
  NomeInstituicao: String,
  NIPCInstituicao: Number,
  NomeTitularContrato: String,
  CienciaID: String,
  ORCID: String,
  CienciaVitae: String,
  Carreira_RPN: String,
  Categoria_RPN: String,
  Vinculo_RPN: String,
  RegimePrestacaoServico: String,
  DataInicioContrato: Date,
  DataFimContrato: Date,
  ETIremunerado: Number,
  ProcedimentoVinculacao: String,
  AreasInvestigacao: String,
  NivelFormacao: String,
  InstituicaoEnsino: String,
  PaisInstituicao: String,
  AnoDiploma: Number,
  Curso: String,
  AreaCNAEF: String,
  AreaFORD: String,
  ProvasAgregacao: Number,
  TituloEspecialista: Number,
  ProvasCoordenacao: Number,
  ProvasAptidao: Number
});

// Create a contract model
const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;
