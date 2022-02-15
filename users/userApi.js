module.exports = app => {
    const users = require("./userRepository");
    const api = require("express").Router();

    app.use('/api/users', api);

    api.post("/create", users.create);

    api.post("/update", users.update);

    api.post("/list", users.list);

};
