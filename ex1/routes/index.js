var express = require('express');
var router = express.Router();

var contractContoller = require('../controllers/contractController')

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.year) {
    contractContoller.getByYear(req.query.year)
      .then(contracts => {
        res.jsonp(contracts);
      })
      .catch(error => {
        res.status(500).render('error', { error, message: 'Error retrieving contracts' });
      });

  } else if (req.query.inst){
    contractContoller.getByInst(req.query.inst)
      .then(contracts => {
        res.jsonp(contracts);
      })
      .catch(error => {
        res.status(500).render('error', { error, message: 'Error retrieving contracts' });
      });
  }
    else {

    contractContoller.list()
    .then(contracts => {
      res.jsonp(contracts)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de alunos"})
    })
  }
  

});

router.get('/courses', function(req, res, next) {

  contractContoller.getCursos()
    .then(contract => {
      res.jsonp(contract);
    })
    .catch(error => {
      res.render('error', { error, message: 'Erro na obtenção do contrato' });
    });
});

router.get('/institutions', function(req, res, next) {

  contractContoller.getInst()
    .then(contract => {
      res.jsonp(contract);
    })
    .catch(error => {
      res.render('error', { error, message: 'Erro na obtenção do contrato' });
    });
});

router.get('/:id', function(req, res, next) {
  const contractId = parseInt(req.params.id);

  contractContoller.getById(contractId)
    .then(contract => {
      res.jsonp(contract);
    })
    .catch(error => {
      res.render('error', { error, message: 'Erro na obtenção do contrato' });
    });
});

router.post('/', (req,res) => {
  contractContoller.addContract(req.body)
  .then(contract => {
    res.jsonp(contract);
  })
  .catch(error => {
    res.render('error', { error, message: 'Erro na obtenção do contrato' });
  });
});

router.delete('/:id', function(req, res, next) {
  contractContoller.deleteContract(req.params.id)
  .then(contract => {
    res.jsonp("Contract " + req.params.id + " was deleted.");
  })
  .catch(error => {
    res.render('error', { error, message: 'Erro na obtenção do contrato' });
  });
});


module.exports = router;
