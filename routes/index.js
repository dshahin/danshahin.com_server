var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('bloggy');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express yoself' });
});

router.get('/foo', function(req, res) {
	db.serialize(function() {
	    //db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
	    //db.close();
	    var sql = "SELECT rowid AS id, info FROM lorem";
	    db.all(sql, function(err, rows) {
	      res.send(JSON.stringify(rows));
	    });
	    //db.close();
	});
	

  	
});

module.exports = router;
