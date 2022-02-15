const db = require("../config/sequilize-config");
const Response = require('../utils/Response');
// db.sequelize.sync(); // Only For Auto Generate Table

exports.baseSave = async (reqObj, Model) => {
    const response = new Response();
    Model = Model(db.sequelize, db.Sequelize);
    await Model.create(reqObj)
        .then(res => {
            response.itemObj = res;
            if (res) {
                response.message = "Saved successfully.";
                response.itemObj = res;
            } else {
                response.success = false;
                response.message = "Saved failed.";
            }
        })
        .catch(err => {
            response.success = false;
            response.message = "Saved failed.";
            response.errCode = err ? err.parent && err.parent.code ? err.parent.code : err.errors && err.errors.length > 0 ? err.errors[0].type : null : null;
            response.errMessage = err ? err.parent && err.parent.sqlMessage ? err.parent.sqlMessage : err.errors && err.errors.length > 0 ? err.errors[0].message : null : null;
        });
    return response;
}

exports.baseUpdate = async (reqObj, Model) => {
    const response = new Response();
    const criteria = { where: { id: reqObj.id } }
    Model = Model(db.sequelize, db.Sequelize);
    await Model.update(reqObj, criteria)
        .then(num => {
            if (num == 1) {
                response.message = "Updated successfully.";
            } else {
                response.success = false;
                response.message = "Updated failed.";
            }
        })
        .catch(err => {
            response.success = false;
            response.message = "Updated failed.";
            response.errCode = err ? err.parent && err.parent.code ? err.parent.code : err.errors && err.errors.length > 0 ? err.errors[0].type : null : null;
            response.errMessage = err ? err.parent && err.parent.sqlMessage ? err.parent.sqlMessage : err.errors && err.errors.length > 0 ? err.errors[0].message : null : null;
        });
    return response;
}

exports.baseFind = async (criteria, Model) => {
    criteria= criteria?{ where: criteria }:{};
    const response = new Response();
    Model = Model(db.sequelize, db.Sequelize);
    await Model.findAll(criteria)
        .then(data => {
            if (data && data.length > 0) {
                response.message = 'Data Found.';
                response.itemList = data;
            } else {
                response.success = false;
                response.message = 'Data Not Found.';
            }
        })
        .catch(err => {
            response.success = false;
            response.message = 'Data Not Found.'
            response.errCode = err ? err.parent && err.parent.code ? err.parent.code : err.errors && err.errors.length > 0 ? err.errors[0].type : null : null;
            response.errMessage = err ? err.parent && err.parent.sqlMessage ? err.parent.sqlMessage : err.errors && err.errors.length > 0 ? err.errors[0].message : null : null;
        });

    return response;
};
