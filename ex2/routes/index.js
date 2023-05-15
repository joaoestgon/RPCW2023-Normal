var express = require('express');
var router = express.Router();

var axios = require('axios')

router.get('/', function(req, res, next) {
  if (req.query.inst) {
    axios.get('http://localhost:15015/contracts?inst=' + req.params.inst).then(value => {
    res.render('institution', {contracts: value.data});
  }).catch( error => res.status(500).send("<p>Erro na obtenção da classe.</p>"))
  } else {
    axios.get('http://localhost:15015/contracts').then(value => {
      res.render('index', {contracts: value.data});
    }).catch( error => res.status(500).send("<p>Erro na obtenção dos contratos.</p>"))
  }

});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:15015/contracts/:id').then(value => {
    res.render('contract', {contracts: value.data[0]});
  }).catch( error => res.status(500).send("<p>Erro na obtenção do contrato.</p>"))
});
  
router.get('/:nipc', function(req, res, next) {
  axios.get('http://localhost:15015/contracts').then(value => {
    res.render('contract', {contracts: value.data});
  }).catch( error => res.status(500).send("<p>Erro na obtenção do contrato.</p>"))
});
  

module.exports = router;
