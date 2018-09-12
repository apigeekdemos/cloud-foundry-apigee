'use strict';

exports.employee_uuidDELETE = function(args, res, next) {
  /**
   * Delete an Employee with given UUID
   * This endpoint will delete an existing Employee.
   *
   * employeeUuid Integer UUID of a Employee
   * returns Employee
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.employee_uuidGET = function(args, res, next) {
  /**
   * Get an Employee with given UUID.
   * This endpoint returns a Employee from a given UUID.
   *
   * employeeUuid Integer UUID of a Employee
   * returns Employee
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.employee_uuidPUT = function(args, res, next) {
  /**
   * Update an Employee with given UUID
   * This endpoint will update an existing Employee.
   *
   * employeeUuid Integer UUID of a Employee
   * body Employee an Employee oject
   * returns Employee
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.rootGET = function(args, res, next) {
  /**
   * Get all Employees
   * This endpoint returns a list of all Employees as an array.
   *
   * returns EmployeesArray
   **/

  var examples = {};
  examples['application/json'] = [{"uuid":"41f1f77b-8922-11e8-86ee-021e63aadcc4","type":"employee","name":"Estella Nolan","created":1531764086307,"modified":1531764086307,"birthDate":"07-29","city":"Dade City","department":"Human Resources","email":"estellanolan@inquala.com","gender":"female","isActive":true,"location":{"latitude":28.363635,"longitude":-82.240592},"metadata":{"path":"\/employees\/41f1f77b-8922-11e8-86ee-021e63aadcc4","size":787},"phone":"+1 (801) 480-3114","postal":"33525","state":"FL","street":"14129 Paradise Ln"},{"uuid":"41eb8ecf-8922-11e8-86ee-021e63aadcc4","type":"employee","name":"Puckett Williamson","created":1531764086265,"modified":1531764086265,"birthDate":"11-24","city":"Manitowoc","department":"IT","email":"puckettwilliamson@inquala.com","gender":"male","isActive":true,"location":{"latitude":44.1156727,"longitude":-87.6624432},"metadata":{"path":"\/employees\/41eb8ecf-8922-11e8-86ee-021e63aadcc4","size":784},"phone":"+1 (852) 576-3323","postal":"54220","state":"WI","street":"1609 Hillcrest Dr"},{"uuid":"41e54d2f-8922-11e8-86ee-021e63aadcc4","type":"employee","name":"Magdalena Mckinney","created":1531764086224,"modified":1531764086224,"birthDate":"09-08","city":"Cleveland","department":"IT","email":"magdalenamckinney@inquala.com","gender":"female","isActive":true,"location":{"latitude":41.4190114,"longitude":-81.8308226},"metadata":{"path":"\/employees\/41e54d2f-8922-11e8-86ee-021e63aadcc4","size":788},"phone":"+1 (934) 557-2785","postal":"44135","state":"OH","street":"7211 Rocky River Dr"},{"uuid":"41dee483-8922-11e8-86ee-021e63aadcc4","type":"employee","name":"Howell Gay","created":1531764086182,"modified":1531764086182,"birthDate":"12-15","city":"Granbury","department":"IT","email":"howellgay@inquala.com","gender":"male","isActive":true,"location":{"latitude":32.3964752,"longitude":-97.6782874},"metadata":{"path":"\/employees\/41dee483-8922-11e8-86ee-021e63aadcc4","size":767},"phone":"+1 (972) 512-2674","postal":"76049","state":"TX","street":"7060 Johnson Road"},{"uuid":"41d854c9-8922-11e8-86ee-021e63aadcc4","type":"employee","name":"Aguirre Gray","created":1531764086139,"modified":1531764086139,"birthDate":"02-25","city":"Lisbon","department":"Marketing","email":"aguirregray@inquala.com","gender":"male","isActive":true,"location":{"latitude":44.0091013,"longitude":-70.0757255},"metadata":{"path":"\/employees\/41d854c9-8922-11e8-86ee-021e63aadcc4","size":779},"phone":"+1 (919) 416-2177","postal":"04252","state":"ME","street":"54 Frost Hill Avenue"},{"uuid":"41d19dff-8922-11e8-86ee-021e63aadcc4","type":"employee","name":"Marshall Ramirez","created":1531764086095,"modified":1531764086095,"birthDate":"08-20","city":"Albany","department":"IT","email":"marshallramirez@inquala.com","gender":"male","isActive":true,"location":{"latitude":31.6256241,"longitude":-84.2492479},"metadata":{"path":"\/employees\/41d19dff-8922-11e8-86ee-021e63aadcc4","size":776},"phone":"+1 (972) 594-2989","postal":"31721","state":"GA","street":"103 Cambridge Rd"},{"uuid":"41cb3555-8922-11e8-86ee-021e63aadcc4","type":"employee","name":"Jordan Newton","created":1531764086053,"modified":1531764086053,"birthDate":"11-19","city":"Delray Beach","department":"Marketing","email":"jordannewton@inquala.com","gender":"male","isActive":true,"location":{"latitude":26.482777,"longitude":-80.0629809},"metadata":{"path":"\/employees\/41cb3555-8922-11e8-86ee-021e63aadcc4","size":779},"phone":"+1 (812) 485-3586","postal":"33483","state":"FL","street":"633 Allen Ave"},{"uuid":"41c4a699-8922-11e8-86ee-021e63aadcc4","type":"employee","name":"Clarke Foreman","created":1531764086010,"modified":1531764086010,"birthDate":"03-03","city":"Midlothian","department":"Human Resources","email":"clarkeforeman@inquala.com","gender":"male","isActive":true,"location":{"latitude":32.4255922,"longitude":-96.992966},"metadata":{"path":"\/employees\/41c4a699-8922-11e8-86ee-021e63aadcc4","size":786},"phone":"+1 (929) 486-2974","postal":"76065","state":"TX","street":"456 McAlpin Rd"},{"uuid":"41be3def-8922-11e8-86ee-021e63aadcc4","type":"employee","name":"Lee Lucas","created":1531764085968,"modified":1531764085968,"birthDate":"04-18","city":"Los Angeles","department":"IT","email":"leelucas@inquala.com","gender":"female","isActive":true,"location":{"latitude":34.0371133,"longitude":-118.175084},"metadata":{"path":"\/employees\/41be3def-8922-11e8-86ee-021e63aadcc4","size":766},"phone":"+1 (866) 415-2239","postal":"90063","state":"CA","street":"4219 E 1st St"},{"uuid":"41b82365-8922-11e8-86ee-021e63aadcc4","type":"employee","name":"Naseer Mohammed","created":1531764085928,"modified":1531764085928,"city":"Chicago","gender":"male","isActive":false,"metadata":{"path":"\/employees\/41b82365-8922-11e8-86ee-021e63aadcc4","size":557},"postal":0}];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.rootPOST = function(args, res, next) {
  /**
   * Create a new Employee
   * This endpoint will create a new Employee.
   *
   * body Employee an Employee oject
   * returns Employee
   **/
  var examples = {};
  examples['application/json'] = {
  "metadata" : {
    "path" : "aeiou",
    "size" : 123
  },
  "gender" : "aeiou",
  "city" : "aeiou",
  "created" : 123,
  "type" : "aeiou",
  "isActive" : true,
  "uuid" : "aeiou",
  "birthDate" : "aeiou",
  "phone" : "aeiou",
  "street" : "aeiou",
  "name" : "aeiou",
  "modified" : 123,
  "postal" : 123,
  "state" : "aeiou",
  "department" : "aeiou",
  "email" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

