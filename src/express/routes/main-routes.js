'use strict';
const {Router} = require(`express`);
const mainRoutes = new Router();

mainRoutes.get(`search`, (req, res) => res.render(`search-result`));
mainRoutes.get(`/register`, (req, res) => res.render(`sign-up`));
mainRoutes.get(`/login`, (req, res) => res.render(`login`));


module.exports = mainRoutes;

