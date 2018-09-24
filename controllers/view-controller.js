// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require("path");
const router = require('express').Router();
const db = require("../models");

// Routes
// =============================================================

"TODO:|FIXME:"
// Each of the below routes just handles the HTML page that the user gets sent to.
//TODO translations


router.get('/blog', renderBlog);
router.get('/', renderBlog);

// cms route loads cms.html
router.get("/cms", function (req, res) {
  res.render('cms');
});

router.get("/expenses", function (req, res) {
  res.render('expenses');
});


// helper for / and blog routes
function renderBlog(req, res) {
  var query = {};
  if (req.query.expense_id) {
    query.ExpenseId = req.query.expense_id;
  }
  db.Post.findAll({
    where: query,
    include: [db.Expense]
  }).then(function (posts) {
    res.render('blog', {
      posts: posts
    })
  });
}

module.exports = router;