const mongoose = require('mongoose');
const db = require('../models');
const extend = require('lodash/extend');
const errorHandler = require('../helpers/dbErrorHandler');

module.exports = {
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    list: function (req, res) {

    },
    // userById: function (req, res) {

    // },
    read: function (req, res) {

    },
    update: function (req, res) {

    },
    delete: function (req, res) {

    }
};