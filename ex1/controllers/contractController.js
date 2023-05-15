var contractModel = require('../models/contract')

const mongoose = require('mongoose');

module.exports.list = () => {
    return contractModel
            .find()
    .then(value => {
        return value
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getCursos = () => {
    return contractModel
    .distinct('Curso')
    .then(value => {
        return value
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getInst = () => {
    return contractModel
    .distinct('InstituicaoEnsino')
    .then(value => {
        return value
    })
    .catch(erro => {
        return erro
    })
}

module.exports.addContract = c => {
    return contractModel.create(c)
        .then(value => {
            return value
        })
        .catch(erro => {
            return erro
        })
}




module.exports.getById = id => {
    return contractModel.findOne({_id: id})
    .then(value => {
        return value
    })
    .catch(erro => {
        return erro
    })
}

module.exports.getByInst = inst => {
    return contractModel.find({InstituicaoEnsino: inst })
    .then(value => {
        return value
    })
    .catch(erro => {
        return erro
    })
}

exports.getByYear = year => {
    return contractModel.find({ DataInicioContrato: { $regex: year.toString()} })
      .then(contracts => {
        return contracts
      })
      .catch(error => {
        return error
      });
  };