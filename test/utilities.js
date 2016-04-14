var mongoose = require('mongoose');

// create database
function dropDatabase(done){
	mongoose.connection.db.dropDatabase();
	if(done){
		done();
	}
};

module.exports = {
	dropDatabase: dropDatabase
};
