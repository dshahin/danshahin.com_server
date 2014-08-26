var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('bloggy');

/* GET users listing. */
router.get('/', function(req, res) {
  	db.serialize(function() {
	    var sql = "SELECT rowid AS id, info FROM lorem";
	    db.all(sql, function(err, rows) {
	      res.send(JSON.stringify(rows));
	    });
	});
});

module.exports = router;
