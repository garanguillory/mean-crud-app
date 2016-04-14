process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');
var testSeed = require('../../src/server/models/seeds/test-seed');
var Student = require('../../src/server/models/students');

chai.use(chaiHttp);


describe('student routes', function() {


  beforeEach(function(done) {
  	testUtilities.dropDatabase();
    testSeed.runSeed(done);
  });

  afterEach(function(done) {
  	testUtilities.dropDatabase(done);
  });

  describe('/GET students', function() {

    it('should return all students', function(done) {
        chai.request(server)
        		.get("/students")
        		.end(function(err, res){
        			res.status.should.equal(200);
        			res.type.should.equal('application/json');
        			res.body.should.be.a('object');
              res.body.should.have.property('status');
              res.body.should.have.property('data');
              res.body.status.should.equal('success');
              res.body.data.should.be.a('array');
              res.body.data.length.should.equal(1);
        			done();
        		})
    });
  });



  describe('/GET student by id', function() {

    it('should return a student', function(done) {
      Student.findOne(function(error, student){
        var studentID = student._id;
        // console.log("student:",student);
        // console.log("id:",studentID)
        
        chai.request(server)
            .get("/students/"+studentID)
            .end(function(err, res){
                // console.log(res.body);
              res.status.should.equal(200);
              res.type.should.equal('application/json');
              res.body.should.be.a('object');
              res.body.should.have.property('status');
              res.body.status.should.equal('success');
              res.body.should.have.property('data');
              // res.body.data.should.have.property('_id');
              // res.body.data._id.should.equal(""+studentID);
              res.body.data.should.have.property('firstName');
              res.body.data.firstName.should.equal('Mike');
              res.body.data.should.have.property('lastName');
              res.body.data.lastName.should.equal('Jones');
              res.body.data.should.have.property('year');
              res.body.data.year.should.equal(1998);
              res.body.data.should.be.a('object');

              done();
            })
      });
    });
  });




  describe('/POST a new student', function() {

    it('should add a new student', function(done) {

        chai.request(server)
            .post("/students")
            .send({firstName: "Bob", lastName: "Flow", year: 1887})
            .end(function(err, res){
                console.log(res.body);
              res.status.should.equal(200);
              res.type.should.equal('application/json');
              res.body.should.be.a('object');
              res.body.should.have.property('status');
              res.body.status.should.equal('success');
              res.body.should.have.property('data');
              res.body.data.should.have.property('firstName');
              res.body.data.firstName.should.equal('Bob');
              res.body.data.should.have.property('lastName');
              res.body.data.lastName.should.equal('Flow');
              res.body.data.should.have.property('year');
              res.body.data.year.should.equal(1887);
              res.body.data.should.be.a('object');

              done();
            })
      });
  });



});




