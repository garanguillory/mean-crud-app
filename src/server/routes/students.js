var express = require('express');
var router = express.Router();

var Students = require('../models/students');


// GET ALL students WORKS
router.get('/', function(req, res, next) {
	Students.find({}, function(err, students){
		if(err){
			return next(err);
		}
		res.status(200).json({
			status: "success",
			data: students
		});
	});

});



// INSERT new student
router.post('/', function(req, res, next) {

	// var student = Students(req.body);

	// student.save(function(error, student){
	// 	res.status(200).json({
	// 		status: 'success',
	// 		data: student
	// 	});
	// });

});



// GET student by id WORKS
router.get('/:id', function(req, res, next) {
	var id = req.params.id;
	Students.findById(id, function(err, student){
		if(err){
			return next(err);
		}
		res.status(200).json({
			status: "success",
			data: student
		});
	});

});


// UPDATE a current student
router.put('/:id', function(req, res, next) {

	var studentID = req.params.id;

	student.save(function(error, student){
		res.status(200).json({
			status: 'success',
			data: student
		});
	});

});


// DELETE a student
router.delete('/', function(req, res, next) {


	student.save(function(error, student){
		res.status(200).json({
			status: 'success',
			data: student
		});
	});

});





module.exports = router;
