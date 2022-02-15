const base = require('../config/base');
const userModel = require('./userModel');

exports.create = async (req, res) => {
    const reqParam = req.body;
    console.log('Request Param ===> ', reqParam);
    const resp = base.baseSave(reqParam, userModel);
    resp.then(data => {
        res.send(data)
    })
}

exports.update = async (req, res) => {
    const reqParam = req.body;
    console.log('Request Param ===> ', reqParam);
    const resp = base.baseUpdate(reqParam, userModel);
    resp.then(data => {
        res.send(data)
    })
}

exports.list = async (req, res) => {
    const criteria = { activeStatus: 1 };
    const resp = base.baseFind(criteria, userModel);
    resp.then(data => {
        res.send(data)
    })
}

