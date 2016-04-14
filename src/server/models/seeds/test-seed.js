var Student = require('../students');

var data = [
	{
		firstName: 'Mike',
		lastName: 'Jones',
		year: 1998
	},
	{
		firstName: 'Sam',
		lastName: 'Swan',
		year: 1991
	},
	{
		firstName: 'Peter',
		lastName: 'Pan',
		year: 1500
	},
	{
		firstName: 'Christopher',
		lastName: 'Columbus',
		year: 1469
	},
	{
		firstName: 'Mike',
		lastName: 'Jones',
		year: 1998
	}
];


function runSeed(done) {
	var student = new Student(data[0]);
		student.save(function(err, res){
		 done();
	});
}



module.exports = {
	runSeed: runSeed
};



// data.forEach(function(student){
// 	Students.insert(student);
// });


